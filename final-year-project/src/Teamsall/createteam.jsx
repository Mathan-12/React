import { useState } from "react";
import "./createteam.css";

function Createteam() {
  const [step, setStep] = useState(1);
  const [teamName, setTeamName] = useState("");
  const [memberCount, setMemberCount] = useState("");

  const [leader, setLeader] = useState({
    name: "",
    dept: "",
    year: "",
    regNo: "",
    project: "",
  });

  const [members, setMembers] = useState([]);

  const handleOk = () => {
    if (teamName && memberCount > 0) {
      setStep(2);
    } else {
      alert("Fill Team Name and Member Count");
    }
  };

  const handleAddMember = () => {
    if (members.length < memberCount - 1) {
      setMembers([
        ...members,
        { name: "", dept: "", year: "", regNo: "" },
      ]);
    }
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleSubmit = () => {
    alert("Successfully Submitted ✅");
  };

  return (
    <div className="teams-container">
      <h1 className="center-title">Create Team</h1>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="form-box">
          <input
            type="text"
            placeholder="Enter Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Member Count"
            value={memberCount}
            onChange={(e) => setMemberCount(e.target.value)}
          />

          <button className="ok-btn" onClick={handleOk}>
            OK
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="details-box">
          <h2>Team Leader Details</h2>

          <input
            type="text"
            placeholder="Leader Name"
            onChange={(e) =>
              setLeader({ ...leader, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Department"
            onChange={(e) =>
              setLeader({ ...leader, dept: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Year"
            onChange={(e) =>
              setLeader({ ...leader, year: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Register Number"
            onChange={(e) =>
              setLeader({ ...leader, regNo: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Project Title"
            onChange={(e) =>
              setLeader({ ...leader, project: e.target.value })
            }
          />

          {/* MEMBERS SECTION */}
          {members.map((member, index) => (
            <div key={index} className="member-box">
              <h3>Member {index + 1}</h3>

              <input
                type="text"
                placeholder="Member Name"
                onChange={(e) =>
                  handleMemberChange(index, "name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Department"
                onChange={(e) =>
                  handleMemberChange(index, "dept", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Year"
                onChange={(e) =>
                  handleMemberChange(index, "year", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Register Number"
                onChange={(e) =>
                  handleMemberChange(index, "regNo", e.target.value)
                }
              />
            </div>
          ))}

          {/* ADD MEMBER BUTTON */}
          {members.length < memberCount - 1 && (
            <button className="add-member" onClick={handleAddMember}>
              Add Member
            </button>
          )}

          {/* SUBMIT BUTTON */}
          {members.length === memberCount - 1 && (
            <div className="bottom-section">
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Createteam;
