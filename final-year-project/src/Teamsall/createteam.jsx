import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createteam.css";

function Createteam() {
  const [showForm, setShowForm] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const navigate = useNavigate();

  const handleCreate = () => {
    setShowForm(true);
  };

  const handleOk = () => {
    if (teamName && members.length > 0) {
      setShowDetails(true);
      setShowForm(false);
    } else {
      alert("Fill all fields");
    }
  };

  const handleMembersChange = (e) => {
    setMembers(e.target.value.split(","));
  };

  const addMember = () => {
    setMembers([...members, ""]);
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
            placeholder="Enter Members (comma separated)"
            onChange={handleMembersChange}
          />
          <button onClick={handleOk}>OK</button>
        </div>
      )}

      {/* Step 2 Details Section */}
      {showDetails && (
        <div className="details-box">
          <h2>Team Leader Details</h2>

          <p>
            <strong>Name:</strong> {members[0]}
          </p>
          <p>
            <strong>Department:</strong> CSE
          </p>
          <p>
            <strong>Year:</strong> 3rd Year
          </p>
          <p>
            <strong>Register No:</strong> 123456
          </p>

          <div className="bottom-section">
            <button className="add-member" onClick={addMember}>
              Add Member
            </button>
            <button className="submit-btn" onClick={() => navigate("/teams")}>
              Submit
            </button>
          </div>

          {/* Show all members */}
          <div className="members-list">
            <h3>Team Members:</h3>
            {members.map((member, index) => (
              <p key={index}>
                <strong>Member {index + 1}:</strong> {member}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Createteam;
