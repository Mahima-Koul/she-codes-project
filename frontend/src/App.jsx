import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Schemes from "./pages/Schemes";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes */}
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}

        {/* Schemes Page */}
        <Route path="/schemes" element={<Schemes />} />

        {/* Fallback Route */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4">
              <h1 className="text-3xl font-bold text-slate-900">
                404 - Page Not Found
              </h1>
              <p className="text-slate-600 mt-2">
                The page you are looking for does not exist.
              </p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}