
import MainPage from './pages/MainPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './pages/ProjectDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/projects/:projectName" element={<ProjectDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
