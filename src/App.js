import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white',
        padding: '40px',
        border: '2px solid #e94560',
        borderRadius: '20px',
        boxShadow: '0 0 30px rgba(233, 69, 96, 0.4)'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: '#e94560' }}>
          Dhairya Rana
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#a8b2d8' }}>
          Course: DevOps / CICD Pipelines
        </p>
        <p style={{ fontSize: '1rem', color: '#64ffda', marginTop: '20px' }}>
          Deployed with Jenkins & Netlify
        </p>
      </div>
    </div>
  );
}

export default App;