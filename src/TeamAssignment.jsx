import React, { useState } from 'react';
import './TeamAssignment.css';

const generateTeams = (roster, matrix, numTeams) => {
  // Sort members by the least time spent together
  const sortedPairs = [];
  for (let i = 0; i < roster.length; i++) {
    for (let j = i + 1; j < roster.length; j++) {
      sortedPairs.push({ pair: [i, j], time: matrix[i][j] });
    }
  }
  sortedPairs.sort((a, b) => a.time - b.time);

  // Initialize teams
  const teams = Array.from({ length: numTeams }, () => []);
  const used = new Set();

  for (const { pair } of sortedPairs) {
    const [i, j] = pair;
    if (used.has(i) && used.has(j)) continue;

    // Add pair to the least populated team
    const team = teams.reduce((prev, curr) => (curr.length < prev.length ? curr : prev), teams[0]);
    if (!used.has(i)) {
      team.push(roster[i]);
      used.add(i);
    }
    if (!used.has(j)) {
      team.push(roster[j]);
      used.add(j);
    }

    // If the team is full, continue to the next team
    if (team.length >= Math.ceil(roster.length / numTeams)) {
      continue;
    }
  }

  // Distribute remaining members
  for (let i = 0; i < roster.length; i++) {
    if (!used.has(i)) {
      const team = teams.reduce((prev, curr) => (curr.length < prev.length ? curr : prev), teams[0]);
      team.push(roster[i]);
      used.add(i);
    }
  }

  return teams;
};

const TeamAssignment = ({ roster, timeMatrix }) => {
  const [teams, setTeams] = useState([]);
  const [numTeams, setNumTeams] = useState(2);

  const handleAssignTeams = () => {
    const newTeams = generateTeams(roster, timeMatrix, numTeams);
    setTeams(newTeams);
  };

  return (
    <div className="team-assignment">
      <h1>Team Assignment</h1>
      <div className="roster">
        <h2>Roster</h2>
        <ul>
          {roster.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
      <div className="team-selection">
        <label htmlFor="num-teams">Number of teams: </label>
        <select
          id="num-teams"
          value={numTeams}
          onChange={(e) => setNumTeams(parseInt(e.target.value, 10))}
        >
          {Array.from({ length: Math.floor(roster.length / 2) - 1 }, (_, i) => i + 2).map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      <button onClick={handleAssignTeams}>Assign Teams</button>
      <div className="teams">
        <h2>Teams</h2>
        {teams.map((team, index) => (
          <div key={index} className="team">
            <h3>Team {index + 1}</h3>
            <ul>
              {team.map((member, memberIndex) => (
                <li key={memberIndex}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAssignment;
