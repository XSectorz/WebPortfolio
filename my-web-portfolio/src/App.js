
import MainPage from './pages/MainPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './pages/ProjectDetailsPage';
import NotFound from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/projects/:projectName" element={<ProjectDetails/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
