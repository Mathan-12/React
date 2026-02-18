import { useState } from "react";
import "./MarksPage.css";

function ResultPage() {
  const [teamId, setTeamId] = useState("");
  const [teamData, setTeamData] = useState(null);

  // Sample team data with marks (later connect DB)
  const teams = [
    { 
      id: "T101", 
      name: "Alpha", 
      title: "AI Chatbot",
      r1: 50,
      r2: 55,
      r3: 60
    },
    { 
      id: "T102", 
      name: "Beta", 
      title: "E-Commerce Website",
      r1: 40,
      r2: 45,
      r3: 50
    },
    { 
      id: "T103", 
      name: "Gamma", 
      title: "Translation System",
      r1: 60,
      r2: 65,
      r3: 70
    },
  ];

  const handleSearch = () => {
    const found = teams.find(
      (team) => team.id.toLowerCase() === teamId.toLowerCase()
    );
    setTeamData(found || null);
  };

  const total = teamData
    ? teamData.r1 + teamData.r2 + teamData.r3
    : 0;

  const result = total >= 150 ? "Complete ✅" : "Not Complete ❌";

  return (
    <div className="result-container">
      <h1>Final Result</h1>

      {/* Team Search */}
      <input
        type="text"
        placeholder="Enter Team ID"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Show Team Details */}
      {teamData && (
        <div className="team-details">
          <p><strong>Team ID:</strong> {teamData.id}</p>
          <p><strong>Team Name:</strong> {teamData.name}</p>
          <p><strong>Project Title:</strong> {teamData.title}</p>

          <hr />

          <p><strong>Review 1:</strong> {teamData.r1}</p>
          <p><strong>Review 2:</strong> {teamData.r2}</p>
          <p><strong>Review 3:</strong> {teamData.r3}</p>

          <h3>Total: {total}</h3>
          <h3>Status: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default ResultPage;
