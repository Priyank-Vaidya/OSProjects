import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoundRobins from './components/RoundRobins'
import Output from './components/Output';

function App() {
  
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header 
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roundrobins" element={<RoundRobins />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;