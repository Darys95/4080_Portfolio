import React from "react";
import TNav from "./TNav";

function EducationTapiwa() {
  const education = [
    {
      school: "United States International-Africa",
      degree: "B.Sc. Applied Computer Technology",
      minor: "Minor in Finance",
      concentration: "Concentration in Software Engineering",
      year: "2020-2024",
    },
    {
      school: "Zengeza High School",
      degree: "GCE Advanced Level in Arts and Linguistics",
      year: "2015-2016",
    },
  ];

  const courses = [
    "Microsoft Azure Fundamentals",
    "Microsoft Certified Azure DevOps Engineer Expert",
  ];

  return (
    <>
      <TNav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 60px)", // Adjust as needed based on the height of DNav
        }}
      >
        <div
          style={{
            margin: "30px",
            marginTop: "120px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "transparent",
            width: "calc(80vw - 80px)", // Adjust as needed
            height: "calc(80vh - 80px)", // Adjust as needed
            display: "flex", // Added this
            justifyContent: "space-between", // Added this
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)", // Add this
            backgroundColor: "#fff",
          }}
        >
          <div>
            <h2>Education</h2>
            {education.map((item, index) => (
              <div key={index}>
                <h3>{item.school}</h3>
                <p>
                  {item.degree}
                  <br /> {item.concentration}
                  <br /> {item.minor}
                  <br /> {item.year}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h2 style={{ marginRight: "50px" }}> Certifications</h2>
            {courses.map((course, index) => (
              <p key={index}>{course}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationTapiwa;
