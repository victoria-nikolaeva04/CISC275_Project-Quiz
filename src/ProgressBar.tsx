import React from 'react';
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

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  let imageSrc: string;

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

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <img
        src={imageSrc}
        alt="Progress-cat"
      />
    </div>
  );
};

export default ProgressBar;
