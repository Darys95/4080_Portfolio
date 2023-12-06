import React from "react";
import DNav from "./DNav";

function ExperienceDarys() {
  return (
    <>
      <DNav />
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
            As a dedicated student specializing in Software Engineering, I bring
            a robust academic foundation coupled with practical experience from
            personal projects and small enterprize associations. While my formal
            work experience is limited, my coursework and personal projects
            serve as a testament to my expertise in JavaScript, React, Node.js,
            MongoDB, and Android Development in Java.
            <br />
            <br /> My knowledge extends to essential software engineering
            principles, algorithms, and data structures. I approach tasks with a
            collaborative mindset, backed by effective communication skills and
            a commitment to continuous learning. These qualities position me as
            a proactive learner ready to make valuable contributions to dynamic
            projects. Keen to apply my skills and thrive in a professional
            setting, I am an ambitious Software Engineering student eager for
            opportunities to contribute meaningfully in the field.
            <br />
            <br /> As for my non-technical aspect, I have interest and
            experience in counseling as I have been involved with peer
            counseling throughout my campus life.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "150px",
              marginTop: "10px",
            }}
          >
            <a
              class="bi bi-github"
              href="https://github.com/Darys95"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#10425F" }}
            ></a>
            <a
              class="bi bi-instagram"
              href="https://instagram.com/Darys95"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#10425F" }}
            ></a>
            <a
              class="bi bi-linkedin"
              href="https://linkedin.com/in/daryssandi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#10425F" }}
            ></a>
            <a
              class="bi bi-twitter"
              href="https://twitter.com/Darys95"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#10425F" }}
            ></a>
            <a
              style={{ color: "#10425F" }}
              class="bi bi-envelope"
              href="mailto:dsandi@usiu.ac.ke"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceDarys;
