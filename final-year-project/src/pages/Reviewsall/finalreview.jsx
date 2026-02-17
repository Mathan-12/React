import { useState } from "react";
import "./firstreview.css";

function finalreview() {
  const [teamId, setTeamId] = useState("");
  const [teamData, setTeamData] = useState(null);

  // Sample Data (Later connect DB)
  const teams = [
    {
      id: "T101",
      name: "Alpha",
      title: "AI Chatbot",
      date: "20-02-2026",
      time: "10:00 AM",
      venue: "Seminar Hall 1"
    },
    {
      id: "T102",
      name: "Beta",
      title: "E-Commerce Website",
      date: "21-02-2026",
      time: "11:30 AM",
      venue: "Lab 3"
    }
  ];

  const handleSearch = () => {
    const found = teams.find(
      (team) => team.id.toLowerCase() === teamId.toLowerCase()
    );
    setTeamData(found || null);
  };

  return (
    <div className="review1-container">
      <h1>Review 1</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Team ID"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {teamData && (
        <div className="team-details">
          <p><strong>Team ID:</strong> {teamData.id}</p>
          <p><strong>Team Name:</strong> {teamData.name}</p>
          <p><strong>Project Title:</strong> {teamData.title}</p>
          <p><strong>Review Date:</strong> {teamData.date}</p>
          <p><strong>Time:</strong> {teamData.time}</p>
          <p><strong>Venue:</strong> {teamData.venue}</p>
        </div>
      )}
    </div>
  );
}

export default finalreview;
