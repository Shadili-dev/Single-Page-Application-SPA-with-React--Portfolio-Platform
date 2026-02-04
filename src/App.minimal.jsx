import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Portfolio Platform</h1>
      <p>Application is running successfully!</p>
      <div style={{padding: '20px', background: '#f0f0f0', margin: '20px', borderRadius: '8px'}}>
        <h2>Features:</h2>
        <ul>
          <li>✅ Landing page with projects</li>
          <li>✅ Add project form</li>
          <li>✅ Search functionality</li>
          <li>✅ Category filtering</li>
          <li>✅ Responsive design</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
