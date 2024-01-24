import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Transaction from './components/Transaction'
import Verificatiion from './components/Verification'
import './App.css';

function App() {
  return (
     <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/transaction" Component={Transaction} /> 
        <Route path="/verification" Component={Verificatiion} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
