import React, { useState } from "react";
import DNav from "./DNav";
import simpleShellImage from "./simple-shell.jpg";
import rasaImage from "./rasa.jpg";
import syncodeImage from "./syncode.jpg";

function ProjectsDarys() {
  const deleteDiv = (index) => {
    // Add this function
    const newDivs = [...divs];
    newDivs.splice(index, 1);
    setDivs(newDivs);
  };

  const [cardTexts, setCardTexts] = useState([
    {
      text1: "C Programming ",
      text2: "Shell",
      text3: "Vi",
      simpleshell: "https://github.com/godfreydekew/simple_shell",
      paragraph:
        "The ALX Simple Shell project is a foundational learning experience that equips students with essential system programming skills through the development of a simplified Unix shell.",
      heading: "Simple Shell",
      backgroundImage: `url(${simpleShellImage})`,
    },
    {
      text1: "React",
      text2: "Node ",
      text3: "CodeMirror",
      syncodeLink: "https://github.com/tapiwamla/syncode",
      paragraph:
        "Syncode is a light-weight alternative to existing coding collaboration tools like CodeSandbox which allows users to collaborate on a piece of code in real time",
      heading: "Syncode",
      backgroundImage: `url(${syncodeImage})`,
    },
    {
      text1: "Python",
      text2: "Shell",
      text3: "Django",
      rasarobotLink: "https://github.com/petermirithu/Rasa_bot_backend",
      paragraph:
        "Backend of a university chatbot whis is a one-stop shop for navigating your university experience. A personal assistant in your pocket, ready to answer your questions about academics, campus life, and everything in between.",
      heading: "Rasa Chatbot",
      backgroundImage: `url(${rasaImage})`,
    },
  ]);

  return (
    <>
      <DNav />
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

export default ProjectsDarys;
