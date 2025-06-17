import React, { useState, useEffect } from 'react';
import './App.css';

const backendURL = 'https://live-backend-ndud.onrender.com';

function App() {
  const [moodInput, setMoodInput] = useState('');
  const [submittedMood, setSubmittedMood] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendURL}/api/mood`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood: moodInput })
      });
      const data = await response.json();
      setSubmittedMood(data.message);
      setMoodInput('');
    } catch (error) {
      console.error('Error submitting mood:', error);
    }
  };

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(`${backendURL}/api/recommendations`);
        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="App">
      <h1>Live/Love Energy Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="How are you feeling?"
          value={moodInput}
          onChange={(e) => setMoodInput(e.target.value)}
        />
        <button type="submit">Submit Mood</button>
      </form>

      {submittedMood && <p>{submittedMood}</p>}

      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((rec) => (
          <li key={rec.id}>{rec.activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
