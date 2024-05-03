import React, { useState, useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './ProgressBar.css';
import catSleep from './images/CISC-progress-cat-sleep.png';
import catWakeUp from './images/CISC-progress-cat-wakeUp.png';
import catYawn from './images/CISC-progress-cat-yawn.png';
import catWalk from './images/CISC-progress-cat-walking.gif';
import catFight from './images/CISC-progress-cat-fight.gif';
import catEat from './images/CISC-progress-cat-eat.gif';


interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({progress}) => {
  const [currentProgress, setCurrentProgress] = useState(progress);
  let imageSrc: string;

  useEffect(() => {
    setCurrentProgress(progress);
  }, [progress]);

  if (progress === 0) {
    imageSrc = catSleep;
  } else if (progress >= 1 && progress <= 13) {
    imageSrc = catWakeUp;
  } else if (progress >= 14 && progress <= 28) {
    imageSrc = catYawn;
  } else if (progress >= 29 && progress <= 83) {
    imageSrc = catWalk;
  } else if (progress >= 84 && progress <= 95) {
    imageSrc = catFight;
  } else if (progress >= 96 && progress <= 100) {
    imageSrc = catEat;
  } else {
    imageSrc = catEat; // Default image if progress is out of range
  }

  /*
  const calculateFrontPosition = () => {
    const containerWidth = document.querySelector('.cat-progress-container')?.clientWidth || 0;
    const progressBarWidth = (progress / 100) * containerWidth;
    return progressBarWidth;
  };
 */

  return (
    <div className="progress-container">
        <div className="progress-cat">
            <div className="progress-bar-cat" 
                role="progressbar" 
                aria-valuenow= {progress}
                aria-valuemin= {0} 
                aria-valuemax= {100} 
                style={{ width: `${progress}%` }}
            >
                <span className="sr-only">{progress}%</span>

                <img
                    src={imageSrc}
                    alt="Progress-cat"
                    className="progress-asset-cat"
                ></img>
            </div>
        </div>
    </div>
  );
};

export default ProgressBar;
            
