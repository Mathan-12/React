import { useState } from "react";
import "./MarksPage.css";

function ResultPage() {
  const [teamName, setTeamName] = useState("");
  const [teamData, setTeamData] = useState(null);

  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [r3, setR3] = useState("");

  // Sample team data (later you can connect database)
  const teams = [
    { id: "T101", name: "Alpha", title: "AI Chatbot" },
    { id: "T102", name: "Beta", title: "E-Commerce Website" },
    { id: "T103", name: "Gamma", title: "Translation System" },
  ];

  const handleSearch = () => {
    const found = teams.find(
      (team) => team.name.toLowerCase() === teamName.toLowerCase()
    );
    setTeamData(found || null);
  };

  const total =
    (Number(r1) || 0) +
    (Number(r2) || 0) +
    (Number(r3) || 0);

  const result = total >= 150 ? "Complete ✅" : "Not Complete ❌";

  return (
    <div className="result-container">
      <h1>Marks Entry</h1>

      {/* Team Search */}
      <input
        type="text"
        placeholder="Enter Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Show Team Details */}
      {teamData && (
        <div className="team-details">
          <p><strong>Team ID:</strong> {teamData.id}</p>
          <p><strong>Team Name:</strong> {teamData.name}</p>
          <p><strong>Project Title:</strong> {teamData.title}</p>

          <hr />

          <input
            type="number"
            placeholder="Review 1 Marks"
            value={r1}
            onChange={(e) => setR1(e.target.value)}
          />

          <input
            type="number"
            placeholder="Review 2 Marks"
            value={r2}
            onChange={(e) => setR2(e.target.value)}
          />

          <input
            type="number"
            placeholder="Review 3 Marks"
            value={r3}
            onChange={(e) => setR3(e.target.value)}
          />

          <h3>Total: {total}</h3>
          <h3>Status: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default ResultPage;
