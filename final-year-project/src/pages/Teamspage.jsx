import { useNavigate } from "react-router-dom";
import "./TeamPage.css";

function TeamsPage() {
  const navigate = useNavigate();

  return (
    <div className="teams-container">
      <h1 className="teams-title">Teams</h1>
      <div className="team-box-container">
        <div className="team-box" onClick={() => navigate("/teams2")}>
          Create Team
        </div>
        <div className="team-box" onClick={() => navigate("/teams3")}>
          Delete Team
        </div>
        <div className="team-box" onClick={() => navigate("/teams4")}>
          Assign Guide
        </div>
        
      </div>

      <p className="teams-description">Manage and view project teams here.</p>
    </div>
  );
}

export default TeamsPage;
