import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/frontend/HomePage/HomePage";
import ProjectsSection from "./components/frontend/HomePage/ProjectSection";
import BackgroundVideo from "./components/hooks/BackgroundVideo";
import ThemeToggle from "./components/hooks/ThemeToggle";

const App = () => {

  const [overlayColor, setOverlayColor] = useState("rgba(255,255,255,0.2)"); 

  return (
    <Router>
 

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsSection />} />
      </Routes>
    </Router>
  );
};

export default App;
