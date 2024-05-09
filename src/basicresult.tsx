import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation
import 'bootstrap/dist/css/bootstrap.css';
import './basicresult.css';

function BasicResult() {
  const location = useLocation(); // Get the location object
  const result = location.state?.result; // Retrieve the result from the location state

  return (
    <div>
      <Container className="job-and-salary-area">
          <Card className="job">
            <Card.Body>
              <Card.Title id ="title">Result analysis</Card.Title>
              <Card.Text>
                {/* Display the result received from the Questionnaire */}
                <p className='result-text'>{result}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          </Container>
    </div>
  );
}

export default BasicResult;
