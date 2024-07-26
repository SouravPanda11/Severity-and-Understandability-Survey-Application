import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import InstructionPage from './pages/InstructionPage';
import MainPage from './pages/MainPage';
import ThankYouPage from './pages/ThankYouPage';
import InformationPage from './pages/InformationPage';
import './global.css'; // Ensure this is imported

const App = () => {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const mainContentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={appStyle}>
      <Router>
        <Header />
        <div style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/instruction" element={<InstructionPage />} />
            <Route path="/information" element={<InformationPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
