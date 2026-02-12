import { useNavigate } from "react-router-dom";

function Dashboard({ name }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="dashboard-box">
        <h1>Welcome {name} 🎉</h1>
        <h1>Project Management System</h1>

        <div className="module-container">
          <div className="module-box" onClick={() => navigate("/teams")}>
            <h2>Teams</h2>
          </div>
          <div className="module-box" onClick={() => navigate("/reviews")}>
            <h2>Reviews</h2>
          </div>
          <div className="module-box" onClick={() => navigate("/marks")}>
            <h2>Marks</h2>
          </div>
          <div className="module-box" onClick={() => navigate("/validation")}>
            <h2>Validation Status</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
