import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import TeamsPage from "./pages/Teamspage";
import ReviewsPage from "./pages/ReviewsPage";
import MarksPage from "./pages/MarksPage";
import ValidationPage from "./pages/ValidationPage";
import "./app.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Successfully Logged In!");
    setIsLoggedIn(true);
  };

<<<<<<< HEAD
  return (
    <Routes>
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
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/marks" element={<MarksPage />} />
          <Route path="/validation" element={<ValidationPage />} />
        </>
      )}
    </Routes>
=======
  // ---------------- DASHBOARD ----------------//
  if (isLoggedIn) {
    return (
      <div className="container">
        <div className="dashboard-box">
          <h1>Welcome {name} 🎉</h1>
          <h2>Project Management System</h2>

          <div className="module-container">
            <div className="module-box">
              <h2>Teams</h2>
            </div>

            <div className="module-box">
              <h2>Reviews</h2>
            </div>

            <div className="module-box">
              <h2>Marks</h2>
            </div>

            <div className="module-box">
              <h2>Validation Status</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- LOGIN PAGE ----------------//
  return (
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
>>>>>>> 855f23ffe184117b7eff0588cb68bc433fd7e4f4
  );
}
export default App;
