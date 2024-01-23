import React from 'react';
import { codingclubs, roboticsclub, roboticskit, summercamps } from './imports';
import './programs.css';

const Programs = () => {
  return (
    <div className="programs">
      <ProgramItem title="Coding Clubs" description="Engage in exciting coding challenges and learn programming in a fun, collaborative environment." image={codingclubs} link="/coding-clubs" />
      <ProgramItem title="Robotics Clubs" description="Explore the fascinating world of robotics and develop hands-on skills in building and programming robots." image={roboticsclub} link="/coding-clubs" />
      <ProgramItem title="Robotics Kit" description="Get your own robotics kit and start building innovative projects from the comfort of your home." image={roboticskit} link="/coding-clubs" />
      <ProgramItem title="Summer Camps" description="Join our summer camps for an immersive learning experience in STEM, coding, and robotics." image={summercamps} link="/coding-clubs" />
    </div>
  );
};

const ProgramItem = ({ title, description, image, link, alternate }) => {
    return (
        <div className={`program-item ${alternate ? 'alternate' : ''}`}>
        {alternate ? <img src={image} alt={title} /> : null}
        <div>
          <h3 className='gradient__text'>{title}</h3>
          <p>{description}</p>
          <button onClick={() => window.location.href = link}>Learn More</button>
        </div>
        {!alternate ? <img src={image} alt={title} /> : null}
      </div>  
    );
};

export default Programs;