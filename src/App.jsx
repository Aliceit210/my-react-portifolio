import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import { useState } from 'react'; // Import useState hook
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <header className="bg-pink-400 w-full fixed z-10 top-0">
        <nav className="bg-gradient-to-r from-black via-purple-500 to-black text-white flex justify-between items-center p-4">
          <div className="flex items-center">
            <div className="font-bold text-3xl text-blue-500 cursor-pointer"> @Alice.</div>
          </div>
          <ul className={`lg:flex items-center gap-5 ${showMenu ? 'hidden' : 'block'}`}> {/* Conditional rendering based on showMenu state */}
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About me</Link></li>
            <li><Link to="/skills" className="nav-link">Skills</Link></li>
            <li><Link to="/projects" className="nav-link">Projects</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
          <IoMdMenu className="text-white block lg:hidden" onClick={toggleMenu} /> {/* Toggle menu on click */}
        </nav>
      </header>
      <main className="mt-20 lg:mt-24">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
