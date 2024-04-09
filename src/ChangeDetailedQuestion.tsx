import React, { useState } from "react";
import './App.css';
import { Button, Container, Row , Col, Form} from "react-bootstrap";
import './App.css'; // need to make a sep file for this


export function ChangeDetailedQuestion(): JSX.Element {
    //const [detailedQuestion, changePrompt] = useState<string>("");

    
    return (
        <span>
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
            </div>
        </span>
    );
}
