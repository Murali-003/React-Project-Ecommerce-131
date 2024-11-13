import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Applogin from './components/Login';
import AppHomepage from './components/Homepage';
import AppSignup from './components/signup';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applogin />} />
        <Route path='/signup' element={<AppSignup />} />
        <Route path='/home' element={<AppHomepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
