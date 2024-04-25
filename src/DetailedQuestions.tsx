import React, { useState } from "react";
import './DetailedQuestions.css';
import paw_button  from "./images/cat-paw-button.png";


import { Button, Container, Row , Col, Form } from "react-bootstrap";

export function DetailedQuestions(): JSX.Element {
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({}); // Dictionary implementation in state, question -> selected answer

    const questions = [
        {
            question: "Imagine you are assigned to a project team in which you will be creating a marketing campaign for a new product launch. Which aspect of the project would you most enjoy focusing on?",
            possibleAnswers: ['Crafting a compelling message and storytelling to communicate the product\'s unique value, helping it resonate and connect with the target audience, such as in a commercial.', 
            'Collaborating with creative teams to design visually appealing graphics, videos, and other multimedia content that capture attention and drive engagement.', 
            'Providing strategic direction and guidance to team members, ensuring alignment with overall campaign objectives and messaging consistency across different channels.', 
            'Conducting market research and consumer behavior analysis to identify key insights and opportunities, informing campaign strategies and tactics for maximum impact.']
        },
        {
            question: "Describe the overarching goals, values, and aspirations that resonate with you. Consider the impact you aim to make and the principles that guide your actions and decisions.",
            possibleAnswers: ['I aspire to be a leader in my field, innovating and driving positive change, inspiring others to make a difference in the world.', 'I am driven by a desire to make an impact on society, addressing social and environmental challenges and creating sustainable future for all.', 
            'I am committed to personal and professional growth, continuously challenging myself to learn, striving for excellence and continuous improvement.', 'I prioritize work-life balance and well-being, valuing fulfillment, happiness, and harmony in all aspects of my life. My life does not have to revolve around my career.']
        },
        {
            question: "Meow",
            possibleAnswers: ['Answer 1 for question 3', 'Answer 2 for question 3', 'Answer 3 for question 3', 'Answer 3 for question 2']
        },
        {
            question: "Woof",
            possibleAnswers: ['Answer 1 for question 3', 'Answer 2 for question 3', 'Answer 3 for question 3', 'Answer 3 for question 2']
        },
        {
            question: "Yasss",
            possibleAnswers: ['Answer 1 for question 3', 'Answer 2 for question 3', 'Answer 3 for question 3', 'Answer 3 for question 2']
        },
        {
            question: "Errrr",
            possibleAnswers: ['Answer 1 for question 3', 'Answer 2 for question 3', 'Answer 3 for question 3', 'Answer 3 for question 2']
        },
        {
            question: "K",
            possibleAnswers: ['Answer 1 for question 3', 'Answer 2 for question 3', 'Answer 3 for question 3', 'Answer 3 for question 2']
        }
    ];

    const handleAnswerSelection = (answer: string) => { // Saves answer selection
        setSelectedAnswers({ ...selectedAnswers, [`Question${questionIndex + 1}`]: answer });
    };

    return (
        <div style={{ width: '100%' }}>

<img className="Cat-header" alt="Cat header"></img>




        <div>
            <Container className="Question-row">
                <Row className="Horizontal-questions">
                    {questions.map((_, index) => (
                        <Col
                            style={{ display: 'flex', justifyContent: 'center' }}
                            className={`Question-${index + 1}`}
                            xs={2}
                            key={index}
                        >
                            <Button
                                onClick={() => setQuestionIndex(index)}
                                style={{
                                    backgroundImage: `url(${paw_button})`, 
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '75px',
                                    height: '75px',
                                    borderColor: '#FFA3B1',
                                    backgroundColor: '#FFA3B1',
                                    fontSize: '24px',
                                    color: 'black',
                                }}
                            >
                                {index + 1}
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>





     

            <div className="Question-textbox">
                <p className="Question-textbox-text">{questions[questionIndex].question}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Container className = "Answer-row" style={{ width: '75%', justifyContent: 'center', display: 'flex'}}>
    <Row style={{ display: 'flex', height: 'auto', width: '100%' }}>
        {questions[questionIndex].possibleAnswers.slice(0, 2).map((possibleAnswer, j) => (
<Col key={j} style={{ width: '50%'}}>
<Form.Check
    type="radio"
    name="selectedAnswer"
    id={`answer-${j+2}`}
    label={<span style={{ display: 'inline-block', textAlign: 'center', padding: '10px', backgroundColor: selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer ? '#f5afaf' : 'transparent' }}>{possibleAnswer}</span>}
    className="custom-radio"
    onChange={() => handleAnswerSelection(possibleAnswer)}
    checked={selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer}
/>


            </Col>
        ))}
    </Row>
</Container>



            </div>


            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Container className = "Answer-row" style={{ width: '75%', justifyContent: 'center', display: 'flex'}}>
    <Row style={{ display: 'flex', height: 'auto', width: '100%' }}>
        {questions[questionIndex].possibleAnswers.slice(2, 4).map((possibleAnswer, j) => (
            <Col key={j} style={{ width: '50%', marginLeft: "1px", marginRight: "1px" }}>
                <Form.Check
                    type="radio"
                    name="selectedAnswer"
                    id={`answer-${j}`}
                    label={<span style={{ display: 'inline-block', textAlign: 'center', padding: '10px', backgroundColor: selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer ? '#f5afaf' : 'transparent' }}>{possibleAnswer}</span>}
                    className="custom-radio"
                    onChange={() => handleAnswerSelection(possibleAnswer)}
                    checked={selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer}
                />
            </Col>
        ))}
    </Row>
</Container>



            </div>
        </div>

        
        
    );
}

export default DetailedQuestions;
