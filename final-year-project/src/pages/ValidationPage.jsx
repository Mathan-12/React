import { useState } from "react";
import "./ValidationPage.css";

function ResultPage() {
  const [teamName, setTeamName] = useState("");
  const [teamData, setTeamData] = useState(null);

  // Simulated Database Data
  const teams = [
    {
      id: "T101",
      name: "Alpha",
      title: "AI Chatbot",
      r1: 50,
      r2: 55,
      r3: 60,
      synopsis: true,
      report: true,
      presentation: true,
      reviewsDone: true
    },
    {
      id: "T102",
      name: "Beta",
      title: "E-Commerce Website",
      r1: 40,
      r2: 45,
      r3: 30,
      synopsis: true,
      report: false,   // one unchecked
      presentation: true,
      reviewsDone: true
    }
  ];

  const handleSearch = () => {
    const found = teams.find(
      (team) => team.name.toLowerCase() === teamName.toLowerCase()
    );
    setTeamData(found || null);
  };

  // Calculate total
  const total = teamData
    ? teamData.r1 + teamData.r2 + teamData.r3
    : 0;

  // Check if ALL validations are true
  const allChecks = teamData
    ? teamData.synopsis &&
      teamData.report &&
      teamData.presentation &&
      teamData.reviewsDone
    : false;

  // Final Status
  const finalStatus =
    teamData && total >= 150 && allChecks
      ? "Complete ✅"
      : "Not Complete ❌";

  return (
    <div className="result-container">
      <h1>Final Evaluation</h1>

      <input
        type="text"
        placeholder="Enter Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {teamData && (
        <div className="team-details">
          <p><strong>Team ID:</strong> {teamData.id}</p>
          <p><strong>Team Name:</strong> {teamData.name}</p>
          <p><strong>Project Title:</strong> {teamData.title}</p>

          <hr />

          {/* READ ONLY MARKS */}
          <p><strong>Review 1 Marks:</strong> {teamData.r1}</p>
          <p><strong>Review 2 Marks:</strong> {teamData.r2}</p>
          <p><strong>Review 3 Marks:</strong> {teamData.r3}</p>

          <h3>Total Marks: {total}</h3>

          <hr />

          <h3>Validation Checklist</h3>

          <label>
            <input type="checkbox" checked={teamData.synopsis} readOnly />
            Synopsis uploaded?
          </label>
          <br />

          <label>
            <input type="checkbox" checked={teamData.report} readOnly />
            Report submitted?
          </label>
          <br />

          <label>
            <input type="checkbox" checked={teamData.presentation} readOnly />
            Presentation done?
          </label>
          <br />

          <label>
            <input type="checkbox" checked={teamData.reviewsDone} readOnly />
            All reviews completed?
          </label>

          <hr />

          <h2>Status: {finalStatus}</h2>
        </div>
      )}
    </div>
  );
}

export default ResultPage;
