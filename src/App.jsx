import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/frontend/HomePage/HomePage'
import ProjectsSection from './components/frontend/HomePage/ProjectSection'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsSection />} />
      </Routes>
    </Router>
  )
}

export default App
