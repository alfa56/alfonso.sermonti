import React, { useState } from "react";
import * as Icon from "react-feather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages_cv/About";
import BlogDetails from "./pages_cv/BlogDetails";
import Blogs from "./pages_cv/Blogs";
import Contact from "./pages_cv/Contact";
import Home from "./pages_cv/Home";
import Notfound from "./pages_cv/Notfound";
import Portfolios from "./pages_cv/Portfolios";
import Resumes from "./pages_cv/Resumes";
import International from "./pages_cv/International";
import Teacher from "./pages_cv/Teacher";

function App() {
  const [lightMode, setLightMode] = useState(false); // Made it true if you want to load your site light mode primary

  lightMode
    ? document.body.classList.add("light")
    : document.body.classList.remove("light");

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add("light");
    } else {
      setLightMode(false);
      document.body.classList.remove("light");
    }
  };

  return (
    <BrowserRouter>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      <Routes>
        <Route path="/" index element={<Home lightMode={lightMode} />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resumes />} />
        <Route path="international" element={<International />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
