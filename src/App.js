import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeProgram from './pages/CollegeProgram';
import Home from './pages/Home';
import Features from './pages/Features';
import CampusProgram from './pages/CampusProgram';
import SwayamBatch from './pages/SwayamBatch';
import CrtOfflineBatch from './pages/CrtOfflineBatch';
import CodersSheet from './pages/CodersSheet';
import MentorshipModule from './pages/MentorshipModule';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/collegePrograms" element={<CollegeProgram />} />
          <Route path="/CampusPrograms" element={<CampusProgram />} />
          <Route path="/swayam-batch" element={<SwayamBatch />} />
          <Route path="/crt-offline-batch" element={<CrtOfflineBatch />} />
          <Route path="/coders-sheet" element={<CodersSheet />} />
          <Route path="/mentorship-module" element={<MentorshipModule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
