import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [prompt, changePrompt] = useState<string>("");

    function changeQuestion(questionNumber: number){
        if(questionNumber === 1){
            
        } else if (questionNumber === 2){

        } else if (questionNumber === 3){

        } else if (questionNumber === 4){

        } else if (questionNumber === 5){

        } else if (questionNumber === 6){

        } else {

        }
    }
    return (
        <span>
            <div>
                <h3>Counter</h3>
            </div>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            to {value}.
        </span>
    );
}
