import React from "react";
import catSleep from './images/CISC-progress-cat-sleep.png';
import catWakeUp from './images/CISC-progress-cat-wakeUp.png';
import catYawn from './images/CISC-progress-cat-yawn.png';
import catWalk from './images/CISC-progress-cat-walking.gif';
import catFight from './images/CISC-progress-cat-fight.gif';
import catEat from './images/CISC-progress-cat-eat.gif';
import mouseEat from './images/CISC-progress-mouse-eat.gif';

import './ProgressBar.css';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    let imageSrc: string;

    if (progress === 0) {
        imageSrc = catSleep;
    } else if (progress < 33) {
        imageSrc = catWakeUp;
    } else if (progress >= 33 && progress < 66) {
        imageSrc = catYawn;
    } else if (progress >= 66 && progress < 80) {
        imageSrc = catWalk;
    } else if (progress >= 80 && progress < 90) {
        imageSrc = catFight;
    } else {
        imageSrc = catEat;
    }
  
    return (
    <div>
        <div className="progress">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
            >
            {progress}%
        </div>

        <span className="sr-only"></span>
            <img
            src= {imageSrc}
            alt="Progress-cat"
            className="cat-progress"
            />
        </div>
    </div>
  );
};

export default ProgressBar;
