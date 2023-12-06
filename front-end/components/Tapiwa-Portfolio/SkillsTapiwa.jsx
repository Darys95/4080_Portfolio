import React from "react";
import TNav from "./TNav";
import taps from "./taps.jpeg";

function SkillTapiwa() {
  return (
    <>
      <TNav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 60px)",
        }}
      >
        <div
          style={{
            margin: "30px",
            marginTop: "120px",
            padding: "20px",
            //border: "1px solid #ccc",
            borderRadius: "5px",
            width: "calc(80vw - 80px)",
            height: "calc(80vh - 80px)",
            display: "flex",
            flexDirection: "row", // Changed to row
            justifyContent: "center", // Changed to center
            alignItems: "center", // Added this
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "400px",
              //border: "1px solid #ccc",
              borderRadius: "5px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 6px #00000029", // Add shadow
                  transition: "0.3s", // Smooth transition for hover effect

                  //border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h6>Python</h6>
              </div>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 6px #00000029", // Add shadow
                  transition: "0.3s", // Smooth transition for hover effect

                  //border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h6>React</h6>
              </div>
            </div>
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                boxShadow: "0px 3px 6px #00000029", // Add shadow
                transition: "0.3s", // Smooth transition for hover effect

                //border: "1px solid #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h6>MongoDb</h6>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 6px #00000029", // Add shadow
                  transition: "0.3s", // Smooth transition for hover effect

                  //border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h6>Javascript</h6>
              </div>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 6px #00000029", // Add shadow
                  transition: "0.3s", // Smooth transition for hover effect

                  //border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h6>M.Learning</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                boxShadow: "0px 3px 6px #00000029", // Add shadow
                transition: "0.3s", // Smooth transition for hover effect
                transform: "scale(1.1)", // Increase size on hover
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={taps}
                alt="Profile"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 6px #00000029", // Add shadow
                  transition: "0.3s", // Smooth transition for hover effect
                }}
              />
            </div>
            <h1>Skills</h1>
          </div>
          <div
            style={{
              width: "400px",
              height: "400px",
              //border: "1px solid #ccc",
              borderRadius: "5px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 6px #00000029", // Add shadow
                  transition: "0.3s", // Smooth transition for hover effect

                  //border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h6>DevOps</h6>
              </div>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 6px #00000029", // Add shadow
                  transition: "0.3s", // Smooth transition for hover effect

                  //border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h6>React</h6>
              </div>
            </div>
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                boxShadow: "0px 3px 6px #00000029", // Add shadow
                transition: "0.3s", // Smooth transition for hover effect

                //border: "1px solid #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h6>MySQL</h6>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 6px #00000029", // Add shadow
                  transition: "0.3s", // Smooth transition for hover effect

                  //border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h6>Node</h6>
              </div>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 6px #00000029", // Add shadow
                  transition: "0.3s", // Smooth transition for hover effect

                  //border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h6>Docker</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillTapiwa;
