import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { HashRouter as Router, Route, Link } from 'react-router-dom'

export function DetailedButton(): JSX.Element{

    function ButtonLink({ to, children }) {
        return <Link to={to}><button>{children}</button></Link>;
        // to prop = the link destination
        // children prop = button text
      }

      return (
        <Router> {}
          <div>
            <ButtonLink to="/detail-questions">Detail Questions</ButtonLink>
          </div>
        </Router>
      );
}