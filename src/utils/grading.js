export const calculateGrade = (score) => {
  if (score === null || score === '' || isNaN(score)) return { grade: '-', comment: '' };
  const s = parseFloat(score);
  if (s >= 80) return { grade: 'A', comment: 'Excellent' };
  if (s >= 70) return { grade: 'B', comment: 'Very Good' };
  if (s >= 60) return { grade: 'C', comment: 'Good Effort' };
  if (s >= 50) return { grade: 'D', comment: 'Fair' };
  return { grade: 'F', comment: 'Try Harder' };
};
