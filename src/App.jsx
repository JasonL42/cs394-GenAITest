import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamAssignment from './TeamAssignment';

const roster = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
const timeMatrix = [
  [0, 10, 20, 30, 40, 50],
  [10, 0, 15, 25, 35, 45],
  [20, 15, 0, 5, 15, 25],
  [30, 25, 5, 0, 10, 20],
  [40, 35, 15, 10, 0, 5],
  [50, 45, 25, 20, 5, 0]
];

const App = () => {
  return (
    <div className="app-container">
      <TeamAssignment roster={roster} timeMatrix={timeMatrix} />
    </div>
  );
};

export default App;
