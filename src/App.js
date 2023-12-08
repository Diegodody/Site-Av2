// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cadastro from './componets/Cadastro';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
function App() {
  return (
        <Router>
        <div className="App">
      <Navbar />
        <h1>Notícias do Mundo</h1>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
