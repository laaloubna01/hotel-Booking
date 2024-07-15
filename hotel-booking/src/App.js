// src/App.js

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Reservation from './pages/Reservation';
import Navbar from './componant/Navbar'; // Importez le composant Navbar

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Ajoutez le composant Navbar ici */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reservation/:id" element={<Reservation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
