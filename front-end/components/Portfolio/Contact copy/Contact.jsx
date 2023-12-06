import React from "react";
import Typewriter from "typewriter-effect";
import Nav from "../../Nav/Nav";
import "bootstrap-icons/font/bootstrap-icons.css";

//import TO from "../assets/images/TO.jpg";

function Contact() {
  return (
    <>
      <Nav />
      <div
        className="w-100 h-100 home"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#F9F6EE",
          overflowY: "auto",
        }}
      >
        {" "}
        <div
          className="container"
          style={{
            backgroundColor: "#F9F6EE",
            height: "100vh",
            display: "flex", // This will make the container a flex container
            flexDirection: "column", // This will make the children stack vertically
          }}
        >
          <div
            style={{
              flex: 1,

              marginTop: "7%",
              display: "flex",
              flexDirection: "row", // changed from 'column' to 'row'
              alignItems: "flex-start",
              justifyContent: "left",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                width: "100%",
                height: "100%",
                padding: "20px",
                position: "relative", // Added this line
              }}
            >
              <h2 style={{ color: "#10425F" }}>Contact Darys</h2>
              <div
                style={{
                  position: "absolute", // Position it absolutely
                  top: "25%", // Position it at a quarter of the card's height
                  left: 0, // Align it to the left
                  width: "100%", // Make it span the entire width
                  borderBottom: "1px solid grey", // Add the grey line
                }}
              />
              <p style={{ marginTop: "60px" }}>Fell free to get in touch</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "150px",
                  marginTop: "20px",
                }}
              >
                <a
                  class="bi bi-github"
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#10425F" }}
                ></a>
                <a
                  class="bi bi-instagram"
                  href="https://instagram.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#10425F" }}
                ></a>
                <a
                  class="bi bi-linkedin"
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#10425F" }}
                ></a>
                <a
                  class="bi bi-twitter"
                  href="https://twitter.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#10425F" }}
                ></a>
                <a
                  style={{ color: "#10425F" }}
                  class="bi bi-envelope"
                  href="mailto:email@example.com"
                ></a>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,

              marginTop: "0.2%",
              display: "flex",
              flexDirection: "row", // changed from 'column' to 'row'
              alignItems: "flex-end",
              justifyContent: "flex-end", // changed from 'flex-end' to 'flex-start'
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                width: "100%",
                height: "100%",
                padding: "20px",
                position: "relative", // Added this line
                display: "flex", // Added this line
                flexDirection: "column",
                alignItems: "flex-end", // Added this line
              }}
            >
              <h2 style={{ color: "#10425F" }}>Contact Tapiwa</h2>
              <div
                style={{
                  position: "absolute", // Position it absolutely
                  top: "25%", // Position it at a quarter of the card's height
                  left: 0, // Align it to the left
                  width: "100%", // Make it span the entire width
                  borderBottom: "1px solid grey", // Add the grey line
                }}
              />
              <p style={{ marginTop: "60px" }}>Fell free to get in touch</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "150px",
                  marginTop: "0px",
                }}
              >
                <a
                  class="bi bi-github"
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#10425F" }}
                ></a>
                <a
                  class="bi bi-instagram"
                  href="https://instagram.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#10425F" }}
                ></a>
                <a
                  class="bi bi-linkedin"
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#10425F" }}
                ></a>
                <a
                  class="bi bi-twitter"
                  href="https://twitter.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#10425F" }}
                ></a>
                <a
                  style={{ color: "#10425F" }}
                  class="bi bi-envelope"
                  href="mailto:email@example.com"
                ></a>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    </>
  );
}

export default Contact;
