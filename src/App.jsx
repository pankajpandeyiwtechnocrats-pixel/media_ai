import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import SaveTheDate from './components/SaveTheDate';
import EngagementCeremony from './components/EngagementCeremony';


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        {/* Navbar stays at the top for all pages */}
        <Navbar /> 
        
        <main>
          <Routes>
            {/* Home Page shows only Hero */}
            <Route path="/" element={<Hero />} />
            
            {/* Contact Page shows only Contact Form */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/save-the-date" element={<SaveTheDate />} />
            <Route path="/engagement-ceremony" element={<EngagementCeremony />} />
            
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;