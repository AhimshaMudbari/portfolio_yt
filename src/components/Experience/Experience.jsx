import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <div className="e-blur"></div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">20+</div>
        <span>Completed</span>
        <span>Projects</span>
      </div>{' '}
      <div className="achievement">
        <div className="circle">2+</div>
        <span>Worked</span>
        <span>Companies</span>
      </div>
    </div>
  );
};

export default Experience;
