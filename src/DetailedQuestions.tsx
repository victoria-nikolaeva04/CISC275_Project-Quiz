import React, { useState } from "react";
import './DetailedQuestions.css';
import { Button, Container, Row , Col, Form } from "react-bootstrap";

export function DetailedQuestions(): JSX.Element {
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({}); // Dictionary implementation in state, question -> selected answer

    const questions = [
        {
            question: "Imagine you are assigned to a project team in which you will be creating a marketing campaign for a new product launch. Which aspect of the project would you most enjoy focusing on?",
            possibleAnswers: ['Crafting a compelling message and storytelling to communicate the product\'s unique value, helping it resonate with the target audience.', 
            'Collaborating with creative teams to design visually appealing graphics, videos, and other multimedia content that capture attention and drive engagement.', 
            'Providing strategic direction and guidance to team members, ensuring alignment with overall campaign objectives and messaging consistency across different channels.', 
            'Conducting market research and consumer behavior analysis to identify key insights and opportunities, informing campaign strategies and tactics for maximum impact.']
        },
        {
            question: "Describe the overarching goals, values, and aspirations that resonate with you. Consider the impact you aim to make and the principles that guide your actions and decisions.",
            possibleAnswers: ['Answer 1 for question 2', 'Answer 2 for question 2', 'Answer 3 for question 2', 'Answer 3 for question 2']
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

    const handleAnswerSelection = (answer: string) => { // Saves answer selections
        setSelectedAnswers({ ...selectedAnswers, [`Question${questionIndex + 1}`]: answer });
    };

    return (
        <div style={{ width: '100%' }}>
            <div className="Question-row">
                <Container>
                    <Row className="Horizontal-questions">
                        {questions.map((_, index) => (
                            <Col className={`Question-${index + 1}`} xs={2} key={index}>
                                <Button onClick={() => setQuestionIndex(index)}>{index + 1}</Button>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <div className="Question-textbox">
                <p className="Question-textbox-text">{questions[questionIndex].question}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Container style={{ width: '75%', justifyContent: 'center' }}>
                    {questions[questionIndex].possibleAnswers.map((possibleAnswer, j) => (
                        <Row key={j} style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', height: 'auto' }}>
                            <Form.Check
                                type="radio"
                                name="selectedAnswer"
                                id={`answer-${j}`}
                                label={<span style={{ display: 'inline-block', textAlign: 'center', padding: '10px' }}>{possibleAnswer}</span>}
                                inline
                                className="custom-radio"
                                onChange={() => handleAnswerSelection(possibleAnswer)}
                                checked={selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer}
                            />
                        </Row>
                    ))}
                </Container>
            </div>
        </div>
    );
}

export default DetailedQuestions;
