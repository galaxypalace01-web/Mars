import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else alert('Logged in successfully!');
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2>Mars Elementary</h2>
      <p>Teacher Portal</p>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="email" placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input 
          type="password" placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '12px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '5px' }}>
          Login
        </button>
      </form>
    </div>
  );
    }
