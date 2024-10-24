import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeProgram from './pages/CollegeProgram';
import Home from './pages/Home';
import Features from './pages/Features';
import CampusProgram from './pages/CampusProgram';  // Ensure the import path is correct

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

        </Routes>
      </Router>
    </div>
  );
}

export default App;
