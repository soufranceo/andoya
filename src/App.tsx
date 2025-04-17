import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Guide from './pages/Guide';
import Contact from './pages/Contact';

function App() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar language={language} setLanguage={setLanguage} />
        <main className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/rooms" element={<Rooms language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/guide" element={<Guide language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;