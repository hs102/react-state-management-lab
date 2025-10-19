// src/App.jsx


import { useState } from 'react';

const initialFighters = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
];

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(initialFighters);
  const [error, setError] = useState('');

  // Calculate total strength and agility
  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);

  // Add fighter to team
  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      setError('Not enough money');
      console.log('Not enough money');
      return;
    }
    setTeam([...team, fighter]);
    setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id));
    setMoney(money - fighter.price);
    setError('');
  };

  // Remove fighter from team
  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter(f => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
    setError('');
  };

  return (
    <div className="app-container">
      <h1>React State Management Lab: Zombie Apocalypse Team</h1>
      <div className="money">Money: ${money}</div>
      {error && <div style={{ color: 'red', marginBottom: '1em' }}>{error}</div>}
      <h2>Available Fighters</h2>
      <ul className="fighters-list">
        {zombieFighters.map(fighter => (
          <li key={fighter.id} className="fighter-card">
            <img src={fighter.img} alt={fighter.name} width={80} height={80} />
            <div><strong>{fighter.name}</strong></div>
            <div>Price: ${fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      {team.length === 0 ? (
        <div>Pick some team members!</div>
      ) : (
        <ul className="team-list">
          {team.map(fighter => (
            <li key={fighter.id} className="fighter-card">
              <img src={fighter.img} alt={fighter.name} width={80} height={80} />
              <div><strong>{fighter.name}</strong></div>
              <div>Price: ${fighter.price}</div>
              <div>Strength: {fighter.strength}</div>
              <div>Agility: {fighter.agility}</div>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="team-stats">
        <div>Total Strength: {totalStrength}</div>
        <div>Total Agility: {totalAgility}</div>
      </div>
    </div>
  );
}

export default App;
