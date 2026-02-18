import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import TeamsPage from "./pages/Teamspage";
import ReviewsPage from "./pages/ReviewsPage";
import MarksPage from "./pages/MarksPage";
import ValidationPage from "./pages/ValidationPage";

import Review1Page from "./pages/Reviewsall/firstreview";
import Secondreview1 from "./pages/Reviewsall/Secondreview";
import Thridreview from "./pages/Reviewsall/thridreview";
import Finalreview from "./pages/Reviewsall/finalreview";

import Createteam from "./Teamsall/createteam";
import Deleteteam from "./Teamsall/deleteteam";
import Assignguide from "./Teamsall/Assignguide";

import "./app.css";



function PrivateRoute({ element, isLoggedIn }) {
  return isLoggedIn ? element : <Navigate to="/" />;
}

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
      <Route path="/teams2" element={<Createteam />} />
      <Route path="/teams3" element={<Deleteteam />} />
      <Route path="/teams4" element={<Assignguide />} />

      {/* Login route */}
      <Route
        path="/"
        element={
          !isLoggedIn ? (
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
          ) : (
            <Dashboard name={name} />
          )
        }
      />

      {/* Protected routes */}
      <Route
        path="/teams"
        element={<PrivateRoute isLoggedIn={isLoggedIn} element={<TeamsPage />} />}
      />
      <Route
        path="/marks"
        element={<PrivateRoute isLoggedIn={isLoggedIn} element={<MarksPage />} />}
      />
      <Route
        path="/validation"
        element={<PrivateRoute isLoggedIn={isLoggedIn} element={<ValidationPage />} />}
      />
    </Routes>
  );
}

export default App;
