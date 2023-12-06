import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/collapse";
import "./Nav.css";
import { Link } from "react-router-dom";

function DNav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Darys
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0  ">
              {" "}
              <li class="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/projectsdarys" className="nav-link">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/skillsdarys" className="nav-link">
                  Skills
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/educationdarys" className="nav-link">
                  Education
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="https://drive.google.com/file/d/1hVHhKANHgRQWWAGTez8z-FstNC7RVMqY/view?usp=sharing"
                  className="nav-link"
                >
                  Resume
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/workdarys" className="nav-link">
                  Experience
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/githubdarys" className="nav-link">
                  Github
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contactdarys" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>

            <a class="nav-link" href="#">
              About
            </a>

            <a class="nav-link" href="#">
              Portfolio
            </a>

            <a class="nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DNav;
