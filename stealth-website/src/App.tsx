import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import OurWork from './pages/OurWork'
import Services from './pages/Services'
import Ventures from './pages/Ventures'
import LetsTalk from './pages/LetsTalk'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/lets-talk" element={<LetsTalk />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
