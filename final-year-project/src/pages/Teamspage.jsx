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
        <div className="team-box">Delete Team</div>
        <div className="team-box">Assign Guide</div>
        <div className="team-box">Assign Project Title</div>
      </div>

      <p className="teams-description">Manage and view project teams here.</p>
    </div>
  );
}

export default TeamsPage;
