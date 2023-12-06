import React, { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import DNav from "./DNav";
import taps from "./black.png";

//import TO from "../assets/images/TO.jpg";

function Darys() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <DNav />
      <div
        className={`w-100 h-100 home ${darkMode ? "dark-mode" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: darkMode ? "#333" : "#F9F6EE",
          color: darkMode ? "#FFF" : "#000",
          overflowY: "auto",
        }}
      >
        <button
          onClick={toggleDarkMode}
          style={{
            position: "absolute",
            top: "100px",
            right: "10px",
            padding: "10px 20px", // Adjust  as needed
            fontSize: "0.9em", // Adjust as needed
            borderRadius: "20px", // Rounded corners
            border: "none",
            color: "#fff",
            backgroundColor: "#10425F", // Adjust as needed
            cursor: "pointer",
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode "}
        </button>{" "}
        <div
          className="container"
          style={{
            backgroundColor: darkMode ? "#333" : "#F9F6EE", // Change the background color based on darkMode
            height: "100vh",
            display: "flex", // This will make the container a flex container
            flexDirection: "column", // This will make the children stack vertically
          }}
        >
          <div
            className="responsive-div"
            style={{
              flex: 1,
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              marginTop: "4%",

              display: "flex",
              flexDirection: "row", // changed from 'column' to 'row'
              alignItems: "flex-start",
              justifyContent: "left",
            }}
          >
            <div
              style={{
                marginTop: "2%",
                marginLeft: "40%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={taps}
                alt="Profile"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 6px #00000029", // Add shadow
                  transition: "0.3s",
                }}
              />
              <h3
                style={{
                  marginTop: "5px",
                  marginLeft: "5%",
                  color: "#10425F",
                }}
              >
                Darys
              </h3>{" "}
            </div>
          </div>
          <div
            className="about-section"
            style={{
              flex: 0.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <h5>ABOUT</h5>
            <p>
              A aspiring full stack software engineer student with a background
              in <br />
              <b>
                Android, JavaScript, FIGMA, HTML, CSS, React, Node.js, Express,
                MongoDB, MySQL
              </b>
              . <br />
              Currently in my fourth year, Bachelor's degree in Aplied Computer
              Technology
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
                marginTop: "30px",
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
      </div>
    </>
  );
}

export default Darys;
