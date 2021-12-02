import React from "react";
import './App.css';


import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { Home } from './componentes/Pege/Home/Home';
import { Administrador } from './componentes/Pege/Administrador/Administrador';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/administrador" element={<Administrador />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
