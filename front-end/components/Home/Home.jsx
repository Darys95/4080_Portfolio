import React from "react";
import Nav from "../Nav/Nav";
import "./Home.css";
//import TO from "../assets/images/TO.jpg";
import myImage from "./taps.jpeg";
import black from "./black.png";

function Home() {
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
            className="responsive-div"
            style={{
              flex: 1,
              borderTop: "1px solid #D3D3D3",
              borderBottom: "1px solid #D3D3D3",
              marginTop: "7%",
              display: "flex",
              flexDirection: "row", // changed from 'column' to 'row'
              alignItems: "flex-start",
              justifyContent: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <img
                src={black}
                alt="Profile"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                }}
              />
              <h4
                style={{
                  marginTop: "5px",
                  marginLeft: "65px",
                  color: "#10425F",
                }}
              >
                Darys
              </h4>{" "}
            </div>
            <div
              style={{
                marginLeft: "5px", // Add some margin to separate from the image
              }}
            >
              <h4
                style={{
                  marginTop: "5px",
                  marginLeft: "65px",
                  color: "#10425F",
                }}
              >
                About
              </h4>
              <p
                style={{
                  marginTop: "5px",
                  marginLeft: "65px",
                  color: "#10425F",
                }}
              >
                An aspiring full stack software engineer student
                <br /> with a background in{" "}
                <b>
                  Android, React, <br />
                  HTML, CSS, Javascript, Node.js, Express,
                  <br /> MongoDB, MySQL
                </b>
                . <br /> Currently in my fourth year, pursuing a <br />
                Bachelor's in Aplied Computer Technology
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "150px",
                  marginTop: "0px",
                  marginLeft: "45px",
                }}
              >
                <a
                  class="bi bi-github"
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#10425F",
                    fontSize: "1.2em",
                    margin: "0 20px",
                  }}
                ></a>
                <a
                  class="bi bi-instagram"
                  href="https://instagram.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#10425F",
                    fontSize: "1.2em",
                    margin: "0 20px",
                  }}
                ></a>
                <a
                  class="bi bi-linkedin"
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#10425F",
                    fontSize: "1.2em",
                    margin: "0 20px",
                  }}
                ></a>
                <a
                  class="bi bi-twitter"
                  href="https://twitter.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#10425F",
                    fontSize: "1.2em",
                    margin: "0 20px",
                  }}
                ></a>
                <a
                  style={{
                    color: "#10425F",
                    fontSize: "1.2em",
                    margin: "0 20px",
                  }}
                  class="bi bi-envelope"
                  href="mailto:email@example.com"
                ></a>
              </div>
            </div>
          </div>
          <div
            className="responsive-div"
            style={{
              flex: 1,
              borderTop: "1px solid #10425F",
              borderBottom: "1px solid #10425F",
              marginTop: "0.2%",
              display: "flex",
              flexDirection: "row", // changed from 'column' to 'row'
              alignItems: "flex-start",
              justifyContent: "flex-start", // changed from 'flex-end' to 'flex-start'
            }}
          >
            <div
              style={{
                marginLeft: "570px", // Add some margin to separate from the image
                textAlign: "right", // added this line
                direction: "rtl", // added this line
                marginRight: "65px",
              }}
            >
              <h4
                style={{
                  marginTop: "px",
                  marginLeft: "65px",
                  color: "#10425F",
                }}
              >
                About
              </h4>
              <p
                style={{
                  marginTop: "4px",
                  marginLeft: "1px",
                  color: "#10425F",
                }}
              >
                A full stack software engineer student
                <br /> with a background in{" "}
                <b>
                  MERN stack, JavaScript, HTML, CSS, React, Node.js, Express,
                  MongoDB, MySQL
                </b>
                . Currently in my fourth year, Bachelor's degree in Aplied
                Computer Technology
              </p>
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
                  href="https://github.com/Civil-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#10425F",
                    fontSize: "1.2em",
                    margin: "0 20px",
                  }}
                ></a>
                <a
                  class="bi bi-instagram"
                  href="https://instagram.com/civill_t?igshid=MTNiYzNiMzkwZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#10425F",
                    fontSize: "1.2em",
                    margin: "0 20px",
                  }}
                ></a>
                <a
                  class="bi bi-linkedin"
                  href="https://www.linkedin.com/in/tapiwa-chimbwanda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#10425F",
                    fontSize: "1.2em",
                    margin: "0 20px",
                  }}
                ></a>
                <a
                  class="bi bi-twitter"
                  href="https://twitter.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#10425F",
                    fontSize: "1.2em",
                    margin: "0 20px",
                  }}
                ></a>
                <a
                  style={{
                    color: "#10425F",
                    fontSize: "1.2em",
                    margin: "0 20px",
                  }}
                  class="bi bi-envelope"
                  href="mailto:tapiwachimbwanda4@gmail.com"
                ></a>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                marginLeft: "auto", // added this line
              }}
            >
              <img
                src={myImage}
                alt="Profile"
                style={{
                  width: "20vw", // Use viewport width units
                  height: "20vw", // Use viewport width units
                  borderRadius: "50%",
                  maxWidth: "200px", // Limit the maximum size
                  maxHeight: "200px", // Limit the maximum size
                }}
              />
              <h4
                style={{
                  marginTop: "5px",
                  marginLeft: "65px",
                  color: "#10425F",
                }}
              >
                Tapiwa
              </h4>{" "}
            </div>
          </div>
          <div />
        </div>
      </div>
    </>
  );
}

export default Home;
