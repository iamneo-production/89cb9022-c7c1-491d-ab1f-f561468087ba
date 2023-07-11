import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./Login";
import Register from "./Register";
import Home from "./home";
import Navbar from "./navbar";
import Landingpage from "./Landing";
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
       <Route path="/landing" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </>
  

  );
}

export default App;