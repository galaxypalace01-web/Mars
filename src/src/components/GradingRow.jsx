import React, { useState } from 'react';
import { calculateGrade } from '../utils/grading';

export default function GradingRow({ studentName, subject }) {
  const [score, setScore] = useState('');
  const { grade, comment } = calculateGrade(score);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 60px 1fr', gap: '10px', padding: '10px 0', borderBottom: '1px solid #eee' }}>
      <div style={{ fontSize: '14px' }}>{studentName}</div>
      <input 
        type="number" 
        value={score} 
        placeholder="Mark"
        onChange={(e) => setScore(e.target.value)}
        style={{ width: '100%', padding: '5px' }}
      />
      <div style={{ fontWeight: 'bold', textAlign: 'center', color: grade === 'F' ? 'red' : 'black' }}>
        {grade}
      </div>
      <div style={{ fontSize: '12px', color: '#666' }}>{comment}</div>
    </div>
  );
               }
