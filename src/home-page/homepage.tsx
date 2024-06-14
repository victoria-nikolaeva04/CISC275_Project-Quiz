import easy_cat  from "../images/Lying_down_Calico_Cat_with_Red_Collar.webp";
import hard_cat from "../images/calico_cat_sitting.webp";
import './homepage.css';
import { Link } from 'react-router-dom';
import DoorSound from '../sounds/Minecraft Door (Open and Close) - Sound Effect (HD).mp3';
const playClickSound = () => {
  const audio = new Audio(DoorSound);
  audio.play();
};

const Homepage: React.FC = () => {
  return (
    <><div id="home-page">
      <body>
        <div className="homepage-body">

          {/*The Basic Questions Box*/}
          <div className="homepage-quiz-section">
          <h3 className='heading'>THE EASY ROUTE  <br></br>  (=˃ᆺ˂=)</h3>
            <div className="homepage-box">

            <p style={{textAlign: 'center'}}>
              This is the basic version of our career quiz. It consists of simple multiple choice questions.
              The purpose of this quiz is to have more generic questions with limited answer
              choices that will still provide accurate career results. The questions can be answered relatively quickly.
              This quiz is a good fit for those that are curious what careers might suit them that don't have as much time to invest, or
              for those who want to try out the site!
            </p>

            <img
                  src={easy_cat}
                  alt="Easy Pic"
                  className ="image-easy"
            />
            </div>
            
            <Link to = "/BasicQuestion">
              <button className="homepage-buttons" onClick={playClickSound}>Take Basic Questions</button>
            </Link>
          </div>
          
          {/*The Detailed Questions Box*/}
          <div className="homepage-quiz-section">
            <h3 className='heading'>THE JOURNEY <br></br> (=✪ᆽ✪=)</h3>
              <div className="homepage-box">
                <p style={{textAlign: 'center'}}>
                  The Journey is meant to be a more thought-provoking type of quiz. This quiz is designed to have
                  more complex, scenario-based questions that require deep reflection into your own soul. 
                  We recommend this quiz if you have more time to invest. The questions on this quiz
                  focus more on your personality and how you handle situations, rather than 'would-you-rather's to
                  really encourage a deeper connection with the results. You are in it for the long run.
                </p>
                
                <img
                    src={hard_cat}
                    alt="Hard Pic"
                    className ="image-hard"
                />
              </div>
              <Link to = "/DetailedQuestion">
                <button className="homepage-buttons" onClick={playClickSound}>Take Detailed Questions</button>
              </Link>
        </div>

        {/*Cat Paw Print Animation and associated CSS is taken from https://codepen.io/kylojen/pen/VxXXNm*/}
        <div className="paw-group">
              <div className="paw-print-1">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>
                
              <div className="paw-print-2">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>    
                
              <div className="paw-print-3">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>    
                
              <div className="paw-print-4">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>

              <div className="paw-print-5">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>

              <div className="paw-print-6">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>

              <div className="paw-print-7">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>

              <div className="paw-print-8">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>

              <div className="paw-print-9">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div> 

              <div className="paw-print-10">
                <div className="pad large"></div>
                <div className="pad small-1"></div>
                <div className="pad small-2"></div>
                <div className="pad small-3"></div>
                <div className="pad small-4"></div>
              </div>              
        </div>
        </div>
      </body>
    </div></>
  );
}
export default Homepage;
