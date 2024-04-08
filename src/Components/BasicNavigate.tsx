import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function ClearButton(): JSX.Element{
    const [buttonClick, setClick]= useState<boolean>(false);

    const handleEditModeChange = () => {
        setClick(!buttonClick);
    }
    return<div>
        <h3>Basic Questions</h3>
        <Form.Check>
        </Form.Check>
        <Button onClick ={() => console.log("I am logged")}>Basic Questions</Button>
    </div>; 
}