import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import initializeFirebase from './Firebase/initialize';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

initializeFirebase();

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;