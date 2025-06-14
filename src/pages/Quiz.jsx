import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import questions from '../assets/data/questions';
import Results from './Results'; // Ensure you’ve created this component

const Quiz = () => {
  const location = useLocation();
  const name = location.state?.name;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[current] = option;
    setAnswers(updatedAnswers);
  };

  const handlePrevious = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handleClear = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[current] = null;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return <Results quizData={{ questions, answers }} name={name} />;
  }

  const currentQuestion = questions[current];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">MCQ Quiz</h1>

      <div className="w-[400px] bg-white p-4 border-2 border-black rounded shadow-lg flex flex-col items-center">
        <h2 className="mb-4 font-semibold">{current + 1}. {currentQuestion.question}</h2>

        <div className="flex flex-col w-full">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`py-2 px-4 mb-2 border rounded ${
                answers[current] === option
                  ? 'bg-green-300 border-green-500'
                  : 'bg-white border-2 hover:bg-yellow-200'
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-between w-full">
          <button
            onClick={handlePrevious}
            className=" px-4 bg-white border-2 border-black text-black hover:px-4 py-1 rounded hover:scale-105"
            disabled={current === 0}
          >
            Previous
          </button>

          <button
            onClick={handleClear}
            className="bg-white px-4 py-1 rounded border-2 hover:scale-105"
          >
            Clear
          </button>

          {current < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className=" px-4 bg-white border-2 border-black text-black hover:px-4 py-1 rounded hover:scale-105"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-1 rounded border hover:scale-105"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
