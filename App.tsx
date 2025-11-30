import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Publisher } from './pages/Publisher';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

// Placeholder for Login/Register pages if needed separately, 
// for now reusing Home layout or simple placeholders
const Login = () => <div className="h-[60vh] flex items-center justify-center text-white">صفحة تسجيل الدخول (تجريبية)</div>;
const Register = () => <div className="h-[60vh] flex items-center justify-center text-white">صفحة الاشتراك (تجريبية)</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publisher" element={<Publisher />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;