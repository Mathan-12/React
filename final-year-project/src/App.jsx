import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import TeamsPage from "./pages/Teamspage";
import ReviewsPage from "./pages/ReviewsPage";
import MarksPage from "./pages/MarksPage";
import ValidationPage from "./pages/ValidationPage";

import Review1Page from "./pages/Reviewsall/firstreview";
import Secondreview1 from "./pages/Reviewsall/Secondreview";
import Thridreview from "./pages/Reviewsall/thridreview";
import Finalreview from "./pages/Reviewsall/finalreview";

import createteam from "./Teamsall/createteam";

import "./app.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Successfully Logged In!");
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/review1" element={<Review1Page />} />
      <Route path="/review2" element={<Secondreview1 />} />
      <Route path="/review3" element={<Thridreview />} />
      <Route path="/review4" element={<Finalreview />} />
      <Route path="/teams2" element={<createteam /> } />

      {/* Login route */}
      {!isLoggedIn ? (
        <Route
          path="/"
          element={
            <div className="container">
              <div className="login-box">
                <h1>Project Management System</h1>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input type="text" placeholder="Enter Department" required />
                  <input type="text" placeholder="Enter College" required />
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          }
        />
      ) : (
        <>
          <Route path="/" element={<Dashboard name={name} />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/marks" element={<MarksPage />} />
          <Route path="/validation" element={<ValidationPage />} />
        </>
      )}
    </Routes>
  );
}

export default App;
