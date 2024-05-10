  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import './basicQuestion.css';

  const Result: React.FC = () => {
    const location = useLocation();
    const { result } = location.state;

    // Inject the HTML response into the component
    const htmlContent = { __html: result };

    return (
      <div>
        <h1 className="questionnaire-heading">Your Quiz Result</h1>
        <div
          style={{
            fontSize: '24px',
            color: 'black',
            backgroundColor: '#F09738',
            font: '-moz-initial',
            height: '75%',
            padding: '40px', // Added padding for better readability
            margin: '200px',
            borderRadius: '20px'
            
          }}
          dangerouslySetInnerHTML={htmlContent}
        ></div>
      </div>
    );
  };

  export default Result;
