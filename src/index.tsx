import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CollapsibleNavbar from './navbar'
import Questionnaire from './basicQuestion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and other necessary components

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
  <React.StrictMode>
    <Routes>
          <Route path="/basicQuestion" element={<Questionnaire />} />
          <Route path="/App" element={<App/>} />
          {/* Add more routes as needed */}
          </Routes>
  </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a brick
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
