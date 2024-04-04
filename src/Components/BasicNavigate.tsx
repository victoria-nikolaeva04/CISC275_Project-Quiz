import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function ClearButton(): JSX.Element{
    return<div>
        <Button onClick ={() => console.log("I am logged")}>Clear</Button>
    </div>; 
}