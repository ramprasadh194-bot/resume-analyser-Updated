import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnalysisProvider } from './context/AnalysisContext';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import UploadPage from './pages/UploadPage';
import AnalyzingPage from './pages/AnalyzingPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <Router>
      <AnalysisProvider>
        <div className="app-container">
          <ParticleBackground />
          <Header />
          <Routes>
            <Route path="/" element={<UploadPage />} />
            <Route path="/analyzing" element={<AnalyzingPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
      </AnalysisProvider>
    </Router>
  );
}

export default App;
