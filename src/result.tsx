import React from 'react';
import { useLocation } from 'react-router-dom';
import './basicQuestion.css';

const Result: React.FC = () => {
  const location = useLocation();
  const { result} = location.state;

  // Format the result into paragraphs for better readability
  const formattedResult = result.split('\n').map(
  (
    line: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined,
    index: React.Key | null | undefined
  ) => {
    if (line == null) {
      return null; 
    }
    const cleanLine = line.toString().replace(/\*/g, ''); // Remove asterisks from the line
    return <p key={index}>{cleanLine}</p>;
  }
);
  return (
    <div>
          <h1 className="questionnaire-heading ">Your Quiz Result</h1>
          <div style={{
            fontSize: '18px',
            color: 'white',
            backgroundColor: '#F09738',
            font:'-moz-initial',
            height: '75%',
          }}>
            {formattedResult}
          </div>
    </div>
  );
};

export default Result;
