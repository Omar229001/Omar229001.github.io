/**
 * App.js — Oumorou ZIBO Portfolio
 * Single-page layout: toutes les sections en scroll continu
 */
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import InfraDashboard from './components/InfraDashboard';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <InfraDashboard />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
