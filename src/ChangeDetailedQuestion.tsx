import React, { useState } from "react";
import { Button, Container, Row , Col, Form} from "react-bootstrap";
import './App.css'; // need to make a sep file for this


export function ChangeDetailedQuestion(): JSX.Element {
    //const [detailedQuestion, changePrompt] = useState<string>("");

    
    return (
        <span>
            <div className="Question-row">
                <Container>
                <Row className="Horizontal-questions">
                <Col className="Question-1" xs={2}>
                    <Button>1</Button>
                    </Col>
                    <Col className="Question-2" xs={2}>
                    <Button>2</Button>
                    </Col>
                    <Col className="Question-3" xs={2}>
                    <Button>3</Button>
                    </Col>
                    <Col className="Question-4" xs={2}>
                    <Button>4</Button>
                    </Col>
                    <Col className="Question-5" xs={2}>
                    <Button>5</Button>
                    </Col>
                    <Col className="Question-6" xs={2}>
                    <Button>6</Button>
                    </Col>
                    <Col className="Question-7" xs={2}>
                    <Button>7</Button>
                    </Col>
                </Row>
                </Container>
            </div>

            <div className="Question-textbox">
                <p>Enter question text here</p>
            </div>

            <div className="Answer-choices">
                    <Container className="Extend-width">
                    <Row className="Answer-row">
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
                    </Container>       
            </div>
        </span>
    );
}
