import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/Loginpage";

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Loginpage" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default router;
