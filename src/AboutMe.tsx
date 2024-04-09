import React, { useState } from 'react';
import temp_image from "./images/temp_image.png";
import './AboutMe.css';
import { Button, Form } from 'react-bootstrap';

//import Questionnaire from './basicQuestion';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function AboutMe() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <><div className="AboutMe">
      <header className="App-header">
        <div className="image">
          <img
              src={temp_image}
              alt="logo"
              id="logo-pic"
          />
        </div>
        <div className="text">
          <h1>Career Quest</h1> 
          <nav>
            <button className='nav-btn'>Home</button>
            <button className='nav-btn'>Basic Quiz</button>
            <button className='nav-btn'>Detailed Quiz</button>
            <button className='nav-btn'>About</button>
            
          </nav>
        </div>
      </header>

      <hr></hr>

      <body>
        <div className="homepage_body">
          <div className="homepage_quiz_section">
            <div className="homepage_box">
            <img
                  src={temp_image}
                  alt="Easy Pic"
                  className ="image-structure"
              />

              <h3>EASY PEASY LEMON SQUEEZY</h3>
              <p>This is the basic version of the quiz</p>
            </div>
            <Button className="homepage_buttons">Take Basic Questions</Button>
          </div>

          <div className="homepage_quiz_section">
            <div className="homepage_box">
            <img
                  src={temp_image}
                  alt="Hard Pic"
                  className ="image-structure"
              />

              <h3>HAR HAR HAR HAR HAR HARD</h3>
              <p>This is the detailed version of the quiz</p>
            </div>
            <Button className="homepage_buttons">Take Detailed Questions</Button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
      </body>

      <footer>
        <div className="footer_decorative">
          <div id="logo-text-footer">
              <img
                src={temp_image}
                alt="Hard Pic"
                className ="footer-logo"
              />
               <p className="team-name-footer">@SWE TEAM</p>
          </div>
          <a href='https://github.com/VikiNiki123/starter_helpi' className="contact-info-footer">GITHUB</a>
        </div>
        

        <hr></hr>
        <div className="API_footer">
          <Form>
            <Form.Label>API Key: </Form.Label>
            <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </Form>
        </div>

      </footer>
        {/*
           <Link to="/basic-quiz"><Button>Basic Quiz</Button></Link>
           <Routes><Route path="/basic-quiz" element={<Questionnaire />} /></Routes>
        */}
        <br></br>
    </div></>
  );
}
export default AboutMe;
