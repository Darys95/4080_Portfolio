import { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Tapiwa from "./components/Portfolio-Tapiwa/PTapiwa";
import Darys from "./components/Portfolio-Darys/PDarys";
import ContactDarys from "./components/Portfolio-Darys/ContactDarys";
import ProjectsDarys from "./components/Portfolio-Darys/ProjectsDarys";
import GithubDarys from "./components/Portfolio-Darys/GithubAc";
import SkillsDarys from "./components/Portfolio-Darys/SkillsDarys";
import EducationDarys from "./components/Portfolio-Darys/EducationDarys";
import ContactTapiwa from "./components/Portfolio-Tapiwa/ContactTapiwa";
import ProjectsTapiwa from "./components/Portfolio-Tapiwa/ProjectsTapiwa";
import EducationTapiwa from "./components/Portfolio-Tapiwa/EducationTapiwa";
import SkillsTapiwa from "./components/Portfolio-Tapiwa/ProjectsTapiwa";
import SkillTapiwa from "./components/Portfolio-Tapiwa/SkillsTapiwa";
import TWorkEx from "./components/Portfolio-Tapiwa/TWorkEx";
import ExperienceDarys from "./components/Portfolio-Darys/ExperienceDarys";
import Login from "./components/Login";
import GithubTapiwa from "./components/Portfolio-Tapiwa/GithubTapiwa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/tapiwa" element={<Tapiwa />}></Route>
          <Route path="/darys" element={<Darys />}></Route>

          <Route path="/contactdarys" element={<ContactDarys />}></Route>
          <Route path="/contacttaps" element={<ContactTapiwa />}></Route>

          <Route path="/projectsdarys" element={<ProjectsDarys />}></Route>
          <Route path="/projectstaps" element={<ProjectsTapiwa />}></Route>

          <Route path="/githubdarys" element={<GithubDarys />}></Route>
          <Route path="/githubtapiwa" element={<GithubTapiwa />}></Route>

          <Route path="/skillsdarys" element={<SkillsDarys />}></Route>
          <Route path="/skilltaps" element={<SkillTapiwa />}></Route>

          <Route path="/worktaps" element={<TWorkEx />}></Route>
          <Route path="/workdarys" element={<ExperienceDarys />}></Route>

          <Route path="/educationdarys" element={<EducationDarys />}></Route>
          <Route path="/edutaps" element={<EducationTapiwa />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

