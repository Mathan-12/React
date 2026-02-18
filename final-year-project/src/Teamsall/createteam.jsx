import { useState } from "react";
import "./createteam.css";

function createteam() {
  const [showForm, setShowForm] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handleCreate = () => {
    setShowForm(true);
  };

  const handleOk = () => {
    if (teamName && members) {
      setShowDetails(true);
      setShowForm(false);
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div className="teams-container">
      <h1 className="center-title">Teams</h1>

      {!showForm && !showDetails && (
        <button className="create-btn" onClick={handleCreate}>
          Create Team
        </button>
      )}

      {/* Step 1 Form */}
      {showForm && (
        <div className="form-box">
          <input
            type="text"
            placeholder="Enter Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
          <button onClick={handleOk}>OK</button>
        </div>
      )}

      {/* Step 2 Details Section */}
      {showDetails && (
        <div className="details-box">
          <h2>Team Leader Details</h2>

          <p><strong>Name:</strong> {members.split(",")[0]}</p>
          <p><strong>Department:</strong> CSE</p>
          <p><strong>Year:</strong> 3rd Year</p>
          <p><strong>Register No:</strong> 123456</p>

          <div className="bottom-section">
            <button className="add-member">Add Member</button>
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default createteam;
