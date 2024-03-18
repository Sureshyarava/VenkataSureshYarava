import React from 'react';
import Lottie from 'react-lottie';
import HomeImage from '../Json Files/Images.json';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: HomeImage, 
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function Animation() {
  return (
    <div className='homepagebackground d-flex align-items-center justify-content-center'>
      <div className="animation-container">
        <div className="imagedeveloper"> 
          <Lottie
            options={defaultOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default Animation;
