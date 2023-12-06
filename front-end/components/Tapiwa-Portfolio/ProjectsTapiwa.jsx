import React, { useState } from "react";
import TNav from "./TNav";
import simpleShellImage from "./mern.png";
import rasaImage from "./portfolio.jpg";
import syncodeImage from "./printf.avif";

function ProjectsTapiwa() {
  const deleteDiv = (index) => {
    // Add this function
    const newDivs = [...divs];
    newDivs.splice(index, 1);
    setDivs(newDivs);
  };

  const [cardTexts, setCardTexts] = useState([
    {
      text1: "Node ",
      text2: "Typescript",
      text3: "MySQL",
      simpleshell: "https://github.com/Civil-t/form-project",
      paragraph:
        "A simple in class project to create a form using React for front end, Node.js for server side and MySQL for database ",
      heading: "Form Project",
      backgroundImage: `url(${simpleShellImage})`,
    },
    {
      text1: "C Programming",
      text2: "Shell ",
      text3: "Vi",
      syncodeLink: "https://github.com/Civil-t/printf",
      paragraph:
        "Developed a customized printf function in C language using variadic arguments to enable formatted output to standard output or a specified file descriptor",
      heading: "PrintF",
      backgroundImage: `url(${syncodeImage})`,
    },
    {
      text1: "MongoDB",
      text2: "Node",
      text3: "Express",
      rasarobotLink: "https://github.com/petermirithu/Rasa_bot_backend",
      paragraph:
        "A full-stack ecommerce app that uses React, MongoDB, NodeJS, Typescript and ExpressJS,",
      heading: "E-Commerce Shop",
      backgroundImage: `url(${rasaImage})`,
    },
  ]);

  return (
    <>
      <TNav />
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
        <div
          className="container"
          style={{
            backgroundColor: "#F9F6EE",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,
              marginTop: "8%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "5px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                  width: "30%",
                  height: "110%",
                  padding: "20px",
                  position: "relative",
                  margin: "0 0.125%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "lightgrey",
                    padding: "20px",
                    borderRadius: "10px",
                    position: "absolute",
                    top: "0%",
                    left: "2%",
                    right: "2%",
                    bottom: "60%",
                    backgroundImage: cardTexts[i].backgroundImage,
                    backgroundSize: "cover",
                  }}
                ></div>
                <br />

                <h2 style={{ color: "#10425F", marginTop: "160px" }}>
                  {cardTexts[i].heading}
                </h2>
                <p style={{ marginTop: "0px" }}>{cardTexts[i].paragraph}</p>
                <div
                  className="icon-container"
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    display: "flex", // This will align the cards horizontally
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      margin: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    {cardTexts[i].text1}
                  </div>
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      margin: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    {cardTexts[i].text2}
                  </div>
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      margin: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    {cardTexts[i].text3}
                  </div>
                  <a
                    className="bi bi-github"
                    href={
                      cardTexts[i].simpleshell ||
                      cardTexts[i].syncodeLink ||
                      cardTexts[i].rasarobotLink
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#10425F" }}
                  ></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsTapiwa;
