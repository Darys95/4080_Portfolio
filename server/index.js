const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const EmployeeModel = require("./models/Employee");
const ProductModel = require("./models/Product");
const CheckoutItemModel = require("./models/CartSummary");
const CourseModel = require("./models/Courses");

const PRODUCTS = [
  {
    p_id: 1,
    productName: "IPhone",
    price: 999.0,
    quantity: 10,
  },

  {
    p_id: 2,
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    quantity: 10,
  },
  {
    p_id: 3,
    productName: "Cannon M50 Camera",
    price: 699.0,
    quantity: 10,
  },

  {
    p_id: 5,
    productName: "LED Light Strips",
    price: 19.99,
    quantity: 10,
  },
];

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://tapiwachimbwanda4:Yi6jiOjTn2UzYKVr@cluster0.jixknj6.mongodb.net/employee?retryWrites=true&w=majority"
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else if (user.password !== password) {
        res.json("Password does not match");
      }
    } else {
      res.json({ message: "You are not registered" });
    }
  });
});

app.post("/cartSummary", (req, res) => {
  const { summary, totalAmount } = req.body;
  const checkoutItem = new CheckoutItemModel({ summary, totalAmount });

  checkoutItem
    .save()
    .then(() => res.json({ message: "Cart summary saved" }))
    .catch((err) => res.json(err));
});

app.get("/cartSummary", (req, res) => {
  CheckoutItemModel.find()
    .then((summary) => res.json(summary))
    .catch((err) => res.json(err));
});

app.post("/admin", (req, res) => {
  ProductModel.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
});

app.get("/products", (req, res) => {
  ProductModel.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.get("/getCourses", (req, res) => {
  CourseModel.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.json(err));
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  EmployeeModel.findOne({ _id: userId })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.json(null);
      }
    })
    .catch((err) => res.json(err));
});

app.put("/updateProducts/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.productName,
      price: req.body.price,
      id: req.body.id,
      quantity: req.body.quantity,
    }
  )
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.delete("/deleteProducts/:id", (req, res) => {
  const id = req.params.id; // variable id to store parameter id gotten from the database using Params
  ProductModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

/*
ProductModel.insertMany(PRODUCTS)
  .then(() => console.log('Products inserted'))
  .catch(err => console.error(err));
*/

app.post("/submitAssignments", (req, res) => {
  const { courseId, userId, assignments, cats } = req.body;

  CourseModel.findOneAndUpdate(
    { courseId: courseId, "students.userId": userId },
    {
      $push: {
        "students.$.assignments": assignments,
        "students.$.cats": cats,
      },
    },
    { new: true }
  )
    .then((course) => res.json(course))
    .catch((err) => res.json(err));
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.get("/products", (req, res) => {
  ProductModel.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server has started on port 3001");
});

//student course registration
app.post("/registerCourse", (req, res) => {
  const { userId, courseId, academicYear, semester, attempts } = req.body;
  CourseModel.create(req.body)
    .then((user) => {
      if (
        user.registeredCourses.filter((course) => course.semester === semester)
          .length < 5 &&
        user.registeredCourses.filter(
          (course) => course.academicYear === academicYear
        ).length < 10
      ) {
        const courses = courseId.split(",").map((id) => ({
          courseId: id,
          academicYear,
          semester,
          attempts,
        }));
        user.registeredCourses.push(...courses);
        user
          .save()
          .then(() => res.json({ message: "Course registered successfully" }))
          .catch((err) => res.json(err));
      } else {
        res.json({ message: "Cannot register for more courses" });
      }
    })
    .catch((err) => res.json(err));
});

//get students registered for a course
app.get("/getStudents", (req, res) => {
  CourseModel.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.json(err));
});
//lecturer score entry
app.post("/enterScore", (req, res) => {
  const { courseId, userId, assignments, cats, exam } = req.body;
  CourseModel.findOne({ _id: courseId })
    .then((course) => {
      const student = course.students.find(
        (student) => student.userId === userId
      );
      if (student) {
        student.assignments = assignments;
        student.cats = cats;
        student.exam = exam;
        course
          .save()
          .then(() => res.json({ message: "Scores entered successfully" }))
          .catch((err) => res.json(err));
      } else {
        res.json({ message: "Student not found in course" });
      }
    })
    .catch((err) => res.json(err));
});

//administrator reports
app.get("/passedCoursesSemester", (req, res) => {
  const { semester } = req.query;
  UserModel.find()
    .then((users) => {
      const passedStudents = users.filter((user) =>
        user.registeredCourses.every(
          (course) =>
            course.semester === semester &&
            CourseModel.findById(course.courseId).students.find(
              (student) => student.userId === user._id && student.exam >= 50
            )
        )
      );
      res.json(passedStudents);
    })
    .catch((err) => res.json(err));
});

//disallow lecturer from score editing
app.post("/enterScore", (req, res) => {
  const { courseId, userId, assignments, cats, exam } = req.body;
  CourseModel.findOne({ _id: courseId })
    .then((course) => {
      const student = course.students.find(
        (student) => student.userId === userId
      );
      if (student) {
        if (
          student.assignments.length > 0 ||
          student.cats.length > 0 ||
          student.exam
        ) {
          res.json({ message: "Cannot edit scores" });
        } else {
          student.assignments = assignments;
          student.cats = cats;
          student.exam = exam;
          course
            .save()
            .then(() => res.json({ message: "Scores entered successfully" }))
            .catch((err) => res.json(err));
        }
      } else {
        res.json({ message: "Student not found in course" });
      }
    })
    .catch((err) => res.json(err));
});

//allow administrator to edit scores
app.put("/editScore", (req, res) => {
  const { courseId, userId, assignments, cats, exam } = req.body;
  CourseModel.findOne({ _id: courseId })
    .then((course) => {
      const student = course.students.find(
        (student) => student.userId === userId
      );
      if (student) {
        student.assignments = assignments;
        student.cats = cats;
        student.exam = exam;
        course
          .save()
          .then(() => res.json({ message: "Scores edited successfully" }))
          .catch((err) => res.json(err));
      } else {
        res.json({ message: "Student not found in course" });
      }
    })
    .catch((err) => res.json(err));
});

//print marks summary
app.get("/marksSummary", (req, res) => {
  const { courseId } = req.query;
  CourseModel.findOne({ _id: courseId })
    .then((course) => {
      const marksSummary = course.students.map((student) => ({
        userId: student.userId,
        totalMarks:
          student.assignments.reduce((a, b) => a + b, 0) +
          student.cats.reduce((a, b) => a + b, 0) +
          student.exam,
        mean:
          (student.assignments.reduce((a, b) => a + b, 0) +
            student.cats.reduce((a, b) => a + b, 0) +
            student.exam) /
          (student.assignments.length + student.cats.length + 1),
        recommendation: student.exam >= 50 ? "Pass" : "Fail",
      }));
      res.json(marksSummary);
    })
    .catch((err) => res.json(err));
});
