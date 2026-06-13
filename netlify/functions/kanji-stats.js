// Netlify Function: /api/stats

const gradeCounts = { 1: 80, 2: 160, 3: 200, 4: 202, 5: 193, 6: 191 };
const gradeServed = { 1: 20, 2: 20, 3: 20, 4: 20, 5: 20, 6: 20 };

exports.handler = async () => {
  const total = Object.values(gradeCounts).reduce((a, b) => a + b, 0);
  const served = Object.values(gradeServed).reduce((a, b) => a + b, 0);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
    body: JSON.stringify({
      totalKanji: total,
      servedKanji: served,
      byGrade: gradeCounts,
      grades: Object.keys(gradeCounts).map(Number),
    }),
  };
};
