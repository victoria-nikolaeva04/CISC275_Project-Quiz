import React, { useState } from "react";
import './App.css';
import { Button, Container, Row , Col, Form} from "react-bootstrap";
import './App.css'; // need to make a sep file for this


export function ChangeDetailedQuestion(): JSX.Element {
    //const [detailedQuestion, changePrompt] = useState<string>("");
    const [question, setQuestion] = useState<string>("First question");

    function changeQuestion(questionNum: number): void {
        if(questionNum === 1){
            setQuestion("Question 1");
        } else if(questionNum === 2){
            setQuestion("Question 2");
        } else if(questionNum === 3){
            setQuestion("Question 3");
        } else if(questionNum === 4){
            setQuestion("Question 4");
        } else if(questionNum === 5){
            setQuestion("Question 5");
        } else if(questionNum === 6){
            setQuestion("Question 6");
        } else if(questionNum === 7){
            setQuestion("Question 7");
        } else if(questionNum === 8){
            setQuestion("Question 8");
        }
    }
    return (
        <div style={{ width: '100%' }}>
        <span>
        <div className="Question-row">
        <Container>
          <Row className="Horizontal-questions">
          <Col className="Question-1" xs={2}>
              <Button onClick={() => changeQuestion(1)}>1</Button>
            </Col>
            <Col className="Question-2" xs={2}>
              <Button onClick={() => changeQuestion(2)}>2</Button>
            </Col>
            <Col className="Question-3" xs={2}>
              <Button onClick={() => changeQuestion(3)}>3</Button>
            </Col>
            <Col className="Question-4" xs={2}>
              <Button onClick={() => changeQuestion(4)}>4</Button>
            </Col>
            <Col className="Question-5" xs={2}>
              <Button onClick={() => changeQuestion(5)}>5</Button>
            </Col>
            <Col className="Question-6" xs={2}>
              <Button onClick={() => changeQuestion(6)}>6</Button>
            </Col>
            <Col className="Question-7" xs={2}>
              <Button onClick={() => changeQuestion(7)}>7</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="Question-textbox">
        <p>{question}</p>
      </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Container style={{ width: '75%', justifyContent: 'center' }} >
                <Row className="First-answer-row" style={{ display: 'flex', justifyContent: 'center', height: '10vw' }}>
                        <Form.Check
                            type="radio"
                            name="emotions"
                            //onChange={updateEmotion}
                            id="emotion-check-happy"
                            label="Answer Choice 1"
                            value="happy"
                            inline
                            //checked={emotion === "happy"}
                        />
                        <Form.Check
                            type="radio"
                            name="emotions"
                            //onChange={updateEmotion}
                            id="emotion-check-sad"
                            label="Answer Choice 2"
                            value="sad"
                            inline
                            //checked={emotion === "sad"}
                        />
                    </Row>

                    <Row className="First-answer-row" style={{ display: 'flex', justifyContent: 'center', height: '10vw' }}>
                        <Form.Check
                            type="radio"
                            name="emotions"
                            //onChange={updateEmotion}
                            id="emotion-check-happy"
                            label="Answer Choice 3"
                            value="happy"
                            inline
                            //checked={emotion === "happy"}
                        />
                        <Form.Check
                            type="radio"
                            name="emotions"
                            //onChange={updateEmotion}
                            id="emotion-check-sad"
                            label="Answer Choice 4"
                            value="sad"
                            inline
                            //checked={emotion === "sad"}
                        />
                    </Row>
                    </Container>       
            </div>
        </span>
        </div>
    );
}
