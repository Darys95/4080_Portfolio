import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  //variables to store user input from input fields
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [name, setName] = useState(String);
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);
  const navigate = useNavigate();

  //function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          if (email === "darys@ad.com") {
            navigate("/darys");
          } else if (email === "tapiwa@ad.com") {
            navigate("/tapiwa");
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const handlePasswordRecovery = (e) => {
    e.preventDefault();
    if (name === "Admin" && email === "admin@ad.com") {
      alert("Your password is: admin");
    } else if (name === "Lecturer1" && email === "lecturer1@lec.com") {
      alert("Your password is: lecturer");
    } else {
      alert("Invalid name or email");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              name="email"
              placeholder="Enter email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                className="form-control rounded-0"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Login
            </button>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => setShowPasswordRecovery(true)}
            >
              Forgot Password?
            </button>
          </div>
        </form>
        {showPasswordRecovery && (
          <div className="password-recovery">
            <h2>Password Recovery</h2>
            <form onSubmit={handlePasswordRecovery}>
              <div className="mb-3">
                <label htmlFor="name">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="name"
                  placeholder="Enter name"
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  name="email"
                  placeholder="Enter email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-0">
                Recover Password
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
