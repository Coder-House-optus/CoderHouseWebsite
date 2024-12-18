import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeProgram from './pages/CollegeProgram';
import Home from './pages/Home';
import Features from './pages/Features';
import CampusProgram from './pages/CampusProgram';
import SwayamBatch from './pages/SwayamBatch';
// import CrtOfflineBatch from './pages/CrtOfflineBatch';
import CodersSheet from './pages/CodersSheet';
import MentorshipModule from './pages/MentorshipModule';
import MarathonClasses from './pages/MarathonClasses'; // New Component
import Internship from './pages/Internship'; // New Component
import Contest from './pages/Contest'; // New Component
import MoonCoder from './pages/MoonCoder'; // New Component
import Notes from './pages/Notes';
import Achievers from './pages/Achievers';
import Cocubes from './pages/Cocubes'; // Adjust the path if needed
import Amcat from './pages/Amcat';
import Elitmus from './pages/Elitmus';
import AboutUs from './pages/AboutUs';

import Gform from './pages/Gform'; // Import the Gform component


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
          <Route path="/Notes" element={<Notes/>} />
          <Route path="/Achievers" element={<Achievers/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gform" element={<Gform />} /> {/* Route to Gform */}

          
          <Route path="/collegePrograms" element={<CollegeProgram />} />
          <Route path="/CampusPrograms" element={<CampusProgram />} />
          <Route path="/swayam-batch" element={<SwayamBatch />} />
          {/* <Route path="/crt-offline-batch" element={<CrtOfflineBatch />} /> */}
          <Route path="/coders-sheet" element={<CodersSheet />} />
          <Route path="/mentorship-module" element={<MentorshipModule />} />

          {/* Newly Added Routes */}
          <Route path="/marathon-classes" element={<MarathonClasses />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/moon-coder" element={<MoonCoder />} />
          <Route path="/ResumeBuilding" element={<ResumeBuilding />} />


          <Route path="/Amcat" element={<Amcat />} />
          <Route path="/Cocubes" element={<Cocubes/>} />
          <Route path="/Elitmus" element={<Elitmus/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
