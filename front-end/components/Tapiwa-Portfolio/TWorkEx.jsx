import React from "react";
import TNav from "./TNav";

function TWorkEx() {
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
            flexDirection: "column", // Added this
            justifyContent: "center", // Added this
            alignItems: "center", // Added this
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)", // Add this
            backgroundColor: "#fff",
          }}
        >
          <h1>Experience</h1>

          <p
            style={{
              justifyContent: "justify",
              marginRight: "40px",
              marginLeft: "40px",
            }}
          >
            As a MERN (MongoDB, Express.js, React, Node.js) software engineering
            student, I bring a strong academic background and hands-on
            experience with the MERN stack. While I haven't had formal work
            experience, my coursework and personal projects demonstrate
            proficiency in JavaScript, React, Node.js, and MongoDB.
            <br />
            <br /> I possess a solid understanding of software engineering
            principles, algorithms, and data structures. My collaborative
            mindset, effective communication skills, and commitment to
            continuous learning make me a proactive learner ready to contribute
            to dynamic projects. Eager to apply my skills and grow in a
            professional setting, I am a dedicated MERN software engineering
            student seeking opportunities to make meaningful contributions in
            the field.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "150px",
              marginTop: "50px",
            }}
          >
            <a
              class="bi bi-github"
              href="https://github.com/Civil-t"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#10425F",
                fontSize: "1em",
                margin: "0 10px",
              }}
            ></a>
            <a
              class="bi bi-instagram"
              href="https://instagram.com/civill_t?igshid=MTNiYzNiMzkwZA=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#10425F",
                fontSize: "1em",
                margin: "0 10px",
              }}
            ></a>
            <a
              class="bi bi-linkedin"
              href="https://www.linkedin.com/in/tapiwa-chimbwanda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#10425F",
                fontSize: "1em",
                margin: "0 10px",
              }}
            ></a>
            <a
              class="bi bi-twitter"
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#10425F",
                fontSize: "1em",
                margin: "0 10px",
              }}
            ></a>
            <a
              style={{
                color: "#10425F",
                fontSize: "1em",
                margin: "0 10px",
              }}
              class="bi bi-envelope"
              href="mailto:tapiwachimbwanda4@gmail.com"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TWorkEx;
