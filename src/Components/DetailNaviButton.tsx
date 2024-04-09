import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function DetailedButton(): JSX.Element{
    const [buttonClick, setClick]= useState<boolean>(false);

    const handleEditModeChange = () => {
        setClick(!buttonClick);
    }
    return<div>
        <Button onClick ={() => console.log("I am logged")}>Detailed Questions</Button>
    </div>; 
}