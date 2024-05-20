import React from 'react';
import './App.css';
import TeamAssignment from './TeamAssignment';

// Generate a balanced and randomized time matrix
const generateRandomTimeMatrix = (size) => {
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      const randomTime = Math.floor(Math.random() * 50) + 1;
      matrix[i][j] = randomTime;
      matrix[j][i] = randomTime;
    }
  }
  console.log(matrix);
  return matrix;
};

const roster = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hank', 'Ivy'];
const timeMatrix = generateRandomTimeMatrix(roster.length);

const App = () => (
  <div className="app-container">
    <TeamAssignment roster={roster} timeMatrix={timeMatrix} />
  </div>
);

export default App;
