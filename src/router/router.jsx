import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/Loginpage";
import ReservationPage from "../pages/ReservationPage"

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Loginpage" element={<LoginPage />} />
      <Route path="/ReservationPage" element={<ReservationPage/>} />
    </Routes>
  </Router>
);

export default router;
