import React from 'react';
import { useNavigate } from 'react-router-dom';

const Results = ({ quizData, name }) => {
  const { answers, questions } = quizData;
  const navigate = useNavigate();

  // Compute overall score
  let totalCorrect = 0;
  const stats = {};

  questions.forEach((q, idx) => {
    const userA = answers[idx];
    const isCorrect = userA === q.answer;
    const type = q.type;
    if (!stats[type]) stats[type] = { total: 0, correct: 0 };
    stats[type].total += 1;
    if (isCorrect) {
      stats[type].correct += 1;
      totalCorrect += 1;
    }
  });

  const totalQuestions = questions.length;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
      <h2 className="text-xl mb-2">Well done, {name}!</h2>
      <p className="text-lg font-semibold mb-6">
        Score: {totalCorrect} / {totalQuestions}
      </p>

      <div className="max-w-md w-full">
        {Object.entries(stats).map(([type, { total, correct }]) => (
          <div key={type} className="flex justify-between mb-2 p-2 border rounded bg-white">
            <span className="font-medium">{type}</span>
            <span>
              {correct} / {total} correct
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Results;
