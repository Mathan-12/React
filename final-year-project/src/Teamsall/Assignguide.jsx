import { useState } from "react";
import "./assignguide.css";

function Assignguide() {
  const [teamId, setTeamId] = useState("");
  const [teamData, setTeamData] = useState(null);
  const [mentor, setMentor] = useState("");

  // Dummy stored team
  const storedTeam = {
    id: "TEAM-1234",
    teamName: "Avengers",
    leader: {
      name: "John",
      dept: "CSE",
      year: "3",
      regNo: "CSE001",
      project: "AI Project",
    },
  };

  const handleSearch = () => {
    if (teamId === storedTeam.id) {
      setTeamData(storedTeam);
    } else {
      alert("Team Not Found ❌");
      setTeamData(null);
    }
  };

  const handleSubmit = () => {
    if (mentor) {
      alert("Successfully Assigned ✅");
      setMentor("");
    } else {
      alert("Please Select Mentor");
    }
  };

  return (
    <div className="assign-container">
      <h1 className="assign-title">Assign Guide</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Team ID"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {teamData && (
        <div className="team-details">
          <h2>Team Details</h2>
          <p><strong>Team ID:</strong> {teamData.id}</p>
          <p><strong>Team Name:</strong> {teamData.teamName}</p>
          <p><strong>Leader:</strong> {teamData.leader.name}</p>
          <p><strong>Department:</strong> {teamData.leader.dept}</p>
          <p><strong>Project:</strong> {teamData.leader.project}</p>

          <div className="mentor-section">
            <label>Select Mentor</label>
            <select
              value={mentor}
              onChange={(e) => setMentor(e.target.value)}
            >
              <option value="">-- Select Mentor --</option>
              <option value="Velkumar">Velkumar</option>
              <option value="Abirami">Abirami</option>
              <option value="Archana">Archana</option>
            </select>
          </div>

          <div className="submit-section">
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Assignguide;
