import React, { useState } from 'react';
import './basicQuestion.css';

//List of question and answers
const questions = [
  {
    question: 'Question 1: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
  {
    question: 'Question 2: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
  {
    question: 'Question 3: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
  {
    question: 'Question 4: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
  {
    question: 'Question 5: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
  {
    question: 'Question 6: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
  {
    question: 'Question 7: If you have a year paid-time off and the company gives you money to pursue every interest you want, what would you choose to do with that time?',
    answers: ['Learn pottery', 'Learn programming', 'Travel', 'Go to workshops and make more connections', 'I do not know yet, will go with the flow', 'Learn several sports']
  },
];

const Questionnaire: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(''));
  // Function to handle selecting an answer
    const handleAnswerSelection = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = questions[questionIndex].answers[answerIndex];
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <div className="questionnaire-container">
    <h1 className="questionnaire-heading">Questionnaire</h1>
    {questions.map((question, questionIndex) => (
      <div key={questionIndex} className="question">
        <h3 className="question-text">{question.question}</h3>
        <div className="answer-options">
          {question.answers.map((answer, answerIndex) => (
            <label key={answerIndex} className="answer-option">
              <input
                type="radio"
                name={`question-${questionIndex}`}
                value={answer}
                checked={selectedAnswers[questionIndex] === answer}
                onChange={() => handleAnswerSelection(questionIndex, answerIndex)}
                className="radio-input"
              />
              {answer}
            </label>
          ))}
        </div>
      </div>
    ))}
    <button onClick={() => console.log(selectedAnswers)} className="submit-button">Submit</button>
  </div>
);
};

export default Questionnaire;
