import React, { useState, useEffect } from 'react';

function App() {
  const [energy, setEnergy] = useState('Loading...');
  const [mood, setMood] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Simulate fetching energy data or calculating cosmic vibes
    setTimeout(() => {
      setEnergy('High Vibrations 🌟');
      setMessage('You are safe. You are loved. Be you, you’ll be fine.');
    }, 1000);
  }, []);

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for sharing your mood: ${mood}. Sending good vibes your way! 💖`);
    setMood('');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1>Live / Love Energy Dashboard</h1>
      <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>{energy}</p>
      <blockquote style={{ fontStyle: 'italic', color: '#555' }}>{message}</blockquote>

      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <label>
          How are you feeling right now?
          <br />
          <input
            type="text"
            value={mood}
            onChange={handleMoodChange}
            placeholder="Type your mood here"
            style={{ padding: '0.5rem', marginTop: '0.5rem', width: '80%', maxWidth: '300px' }}
            required
          />
        </label>
        <br />
        <button
          type="submit"
          style={{
            marginTop: '1rem',
            padding: '0.7rem 1.5rem',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Send Vibes
        </button>
      </form>
    </div>
  );
}

export default App;
