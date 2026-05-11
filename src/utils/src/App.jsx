import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { calculateGrade } from './utils/grading';
import { Cloud, CloudOff } from 'lucide-react';

function App() {
  const [online, setOnline] = useState(navigator.onLine);
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    window.addEventListener('online', () => setOnline(true));
    window.addEventListener('offline', () => setOnline(false));
  }, []);

  return (
    <div className="app-container">
      <nav style={{ padding: '15px', background: '#4f46e5', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <strong>Mars Elementary</strong>
        {online ? <Cloud color="white" /> : <CloudOff color="#ff4d4d" />}
      </nav>
      
      <main style={{ padding: '20px' }}>
        <h3>Teacher Mark Entry</h3>
        <p>You are currently {online ? 'Online (Syncing Active)' : 'Offline (Saving Locally)'}</p>
        
        {/* Table structure for marks goes here */}
        <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
          <p>Please log in to see student list.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
