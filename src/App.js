import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SchoolProgram from './pages/SchoolProgram.js';
import CollegeProgram from './pages/CollegeProgram';
import Home from './pages/Home';
import Features from './pages/Features';
import CampusProgram from './pages/CampusProgram';
import SwayamBatch from './pages/SwayamBatch';
import CodersSheet from './pages/CodersSheet';
import MentorshipModule from './pages/MentorshipModule';
import MarathonClasses from './pages/MarathonClasses';
import Internship from './pages/Internship';
import Contest from './pages/Contest';
import MoonCoder from './pages/MoonCoder';
import Notes from './pages/Notes';
import Achievers from './pages/Achievers';
import Cocubes from './pages/Cocubes';
import Amcat from './pages/Amcat';
import Elitmus from './pages/Elitmus';
import AboutUs from './pages/AboutUs';
import Gform from './pages/Gform';
import CProgramming from './Programs/c-programming';
import CPlusPlusProgramming from './Programs/CPlusPlusProgramming';
import JavaProgramming from './Programs/JavaProgramming';
import PythonProgramming from './Programs/PythonProgramming';
import FullStackDevelopment from './Programs/FullStackDevelopment';
import Cybersecurity from './Programs/Cybersecurity';
import MachineLearning from './Programs/MachineLearning';
import Aptitude from './Programs/aptitude';
import Reasoning from './Programs/reasoning';
import English from './Programs/english';
import CriticalThinking from './Programs/CriticalThinking';
import GDPersonalInterview from './Programs/GDPersonalInterview';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ResumeBuilding from './pages/ResumeBuilding';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/SchoolProgram" element={<SchoolProgram />} />
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Achievers" element={<Achievers />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gform" element={<Gform />} />
          <Route path="/Terms&Conditions" element={<TermsAndConditions />} />
          <Route path="/collegePrograms" element={<CollegeProgram />} />
          <Route path="/CampusPrograms" element={<CampusProgram />} />
          <Route path="/swayam-batch" element={<SwayamBatch />} />
          <Route path="/coders-sheet" element={<CodersSheet />} />
          <Route path="/mentorship-module" element={<MentorshipModule />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/marathon-classes" element={<MarathonClasses />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/moon-coder" element={<MoonCoder />} />
          <Route path="/ResumeBuilding" element={<ResumeBuilding />} />
          <Route path="/Amcat" element={<Amcat />} />
          <Route path="/Cocubes" element={<Cocubes />} />
          <Route path="/Elitmus" element={<Elitmus />} />
          <Route path="/programs/c-programming" element={<CProgramming />} />
          <Route path="/programs/c-plus-plus-programming" element={<CPlusPlusProgramming />} />
          <Route path="/programs/java-programming" element={<JavaProgramming />} />
          <Route path="/programs/python-programming" element={<PythonProgramming />} />
          <Route path="/programs/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/programs/cybersecurity" element={<Cybersecurity />} />
          <Route path="/programs/machine-learning" element={<MachineLearning />} />
          <Route path="/programs/aptitude" element={<Aptitude />} />
          <Route path="/programs/reasoning" element={<Reasoning />} />
          <Route path="/programs/english" element={<English />} />
          <Route path="/programs/CriticalThinking" element={<CriticalThinking />} />
          <Route path="/programs/GDPersonalInterview" element={<GDPersonalInterview />} />
          <Route path="/programs/criticalthinking" element={<CriticalThinking />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/category/:category" element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
