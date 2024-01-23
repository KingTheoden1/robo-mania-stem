import React from 'react';
import './programs.css';

const Programs = () => {
  return (
    <div className="programs">
      <ProgramItem title="Coding Clubs" description="Engage in exciting coding challenges and learn programming in a fun, collaborative environment." />
      <ProgramItem title="Robotics Clubs" description="Explore the fascinating world of robotics and develop hands-on skills in building and programming robots." />
      <ProgramItem title="Robotics Kit" description="Get your own robotics kit and start building innovative projects from the comfort of your home." />
      <ProgramItem title="Summer Camps" description="Join our summer camps for an immersive learning experience in STEM, coding, and robotics." />
    </div>
  );
};

const ProgramItem = ({ title, description }) => {
  return (
    <div className="program-item">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Add CTA button or link if needed */}
    </div>
  );
};

export default Programs;