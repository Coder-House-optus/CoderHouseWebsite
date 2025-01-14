import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const SchoolProgram = lazy(() => import('./pages/SchoolProgram.js'));
const CollegeProgram = lazy(() => import('./pages/CollegeProgram'));
const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const CampusProgram = lazy(() => import('./pages/CampusProgram'));
const SwayamBatch = lazy(() => import('./pages/SwayamBatch'));
const CodersSheet = lazy(() => import('./pages/CodersSheet'));
const MentorshipModule = lazy(() => import('./pages/MentorshipModule'));
const MarathonClasses = lazy(() => import('./pages/MarathonClasses'));
const Internship = lazy(() => import('./pages/Internship'));
const Contest = lazy(() => import('./pages/Contest'));
const MoonCoder = lazy(() => import('./pages/MoonCoder'));
const Notes = lazy(() => import('./pages/Notes'));
const Achievers = lazy(() => import('./pages/Achievers'));
const Cocubes = lazy(() => import('./pages/Cocubes'));
const Amcat = lazy(() => import('./pages/Amcat'));
const Elitmus = lazy(() => import('./pages/Elitmus'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Gform = lazy(() => import('./pages/Gform'));
const CProgramming = lazy(() => import('./Programs/c-programming'));
const CPlusPlusProgramming = lazy(() => import('./Programs/CPlusPlusProgramming'));
const JavaProgramming = lazy(() => import('./Programs/JavaProgramming'));
const PythonProgramming = lazy(() => import('./Programs/PythonProgramming'));
const FullStackDevelopment = lazy(() => import('./Programs/FullStackDevelopment'));
const Cybersecurity = lazy(() => import('./Programs/Cybersecurity'));
const MachineLearning = lazy(() => import('./Programs/MachineLearning'));
const Aptitude = lazy(() => import('./Programs/aptitude'));
const Reasoning = lazy(() => import('./Programs/reasoning'));
const English = lazy(() => import('./Programs/english'));
const CriticalThinking = lazy(() => import('./Programs/CriticalThinking'));
const GDPersonalInterview = lazy(() => import('./Programs/GDPersonalInterview'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ResumeBuilding = lazy(() => import('./pages/ResumeBuilding'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
