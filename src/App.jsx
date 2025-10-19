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
    <div className="app-container" style={{ background: '#222', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Zombie Fighters</h1>
      <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Money: {money}</div>
      <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Team Strength: {totalStrength}</div>
      <div style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Team Agility: {totalAgility}</div>
      <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Team</h2>
      {team.length === 0 ? (
        <div style={{ marginBottom: '2rem' }}>Pick some team members</div>
      ) : (
        <ul className="team-list" style={{ marginBottom: '2rem' }}>
          {team.map(fighter => (
            <li key={fighter.id} className="fighter-card">
              <img src={fighter.img} alt={fighter.name} width={150} height={150} style={{ objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem' }} />
              <div style={{ fontWeight: 'bold' }}>{fighter.name}</div>
              <div>Price: {fighter.price}</div>
              <div>Strength: {fighter.strength}</div>
              <div>Agility: {fighter.agility}</div>
              <button onClick={() => handleRemoveFighter(fighter)} style={{ marginTop: '0.5rem', background: '#222', color: '#fff', border: '1px solid #fff', borderRadius: '4px', padding: '0.3rem 1.2rem', cursor: 'pointer' }}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Fighters</h2>
      {error && <div style={{ color: 'red', marginBottom: '1em' }}>{error}</div>}
      <ul className="fighters-list">
        {zombieFighters.map(fighter => (
          <li key={fighter.id} className="fighter-card">
            <img src={fighter.img} alt={fighter.name} width={150} height={150} style={{ objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem' }} />
            <div style={{ fontWeight: 'bold' }}>{fighter.name}</div>
            <div>Price: {fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button onClick={() => handleAddFighter(fighter)} style={{ marginTop: '0.5rem', background: '#222', color: '#fff', border: '1px solid #fff', borderRadius: '4px', padding: '0.3rem 1.2rem', cursor: 'pointer' }}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
