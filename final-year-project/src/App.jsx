import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Successfully Logged In!");
    setIsLoggedIn(true);
  };

  // ---------------- DASHBOARD ----------------//
  if (isLoggedIn) {
    return (
      <div className="container">
        <div className="dashboard-box">
          <h1>Welcome {name} 🎉</h1>
          <h1>Project Management System</h1>

          <div className="module-container">
            <div className="module-box">
              <h2> Teams</h2>
            </div>

            <div className="module-box">
              <h2> Reviews</h2>
            </div>

            <div className="module-box">
              <h2> Marks</h2>
            </div>

            <div className="module-box">
              <h2> Validation Status</h2>
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

          <input
            type="text"
            placeholder="Enter Department"
            required
          />

          <input
            type="text"
            placeholder="Enter College"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
