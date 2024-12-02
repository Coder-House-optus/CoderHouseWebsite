import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeProgram from './pages/CollegeProgram';
import Home from './pages/Home';
import Features from './pages/Features';
import CampusProgram from './pages/CampusProgram';
import SwayamBatch from './pages/SwayamBatch';
import CrtOfflineBatch from './pages/CrtOfflineBatch';
import CodersSheet from './pages/CodersSheet';
import MentorshipModule from './pages/MentorshipModule';
import MarathonClasses from './pages/MarathonClasses'; // New Component
import Internship from './pages/Internship'; // New Component
import Contest from './pages/Contest'; // New Component
import MoonCoder from './pages/MoonCoder'; // New Component


import Amcat from './pages/Amcat';

import './App.css';
import ResumeBuilding from './pages/ResumeBuilding';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Existing Routes */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/collegePrograms" element={<CollegeProgram />} />
          <Route path="/CampusPrograms" element={<CampusProgram />} />
          <Route path="/swayam-batch" element={<SwayamBatch />} />
          <Route path="/crt-offline-batch" element={<CrtOfflineBatch />} />
          <Route path="/coders-sheet" element={<CodersSheet />} />
          <Route path="/mentorship-module" element={<MentorshipModule />} />

          {/* Newly Added Routes */}
          <Route path="/marathon-classes" element={<MarathonClasses />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/moon-coder" element={<MoonCoder />} />
          <Route path="/ResumeBuilding" element={<ResumeBuilding />} />


          <Route path="/Amcat" element={<Amcat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
