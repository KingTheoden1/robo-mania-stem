import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import highlight from '../../assets/highlight.gif';

const Header = () => {
  return (
    <div className='robomania__header section__padding' id='home'>
      <div className="robomania__header-content">
        <h1 className="gradient__text">Welcome to RoboMania STEM</h1>
        <p>Where young minds ignite their passion for STEM through the exciting world of robotics and coding! Dive into a journey of discovery and innovation, as we offer hands-on experiences that transform curiosity into real-world skills, nurturing creativity, critical thinking, and a lifelong love for learning in the dynamic fields of science and technology.</p>
        
        <div className="robomania__header-content__input">
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>About Us</button>
        </div>
        <div className="robomania__header-content__people">
          <img src={people} alt='people'/>
          <p>1,600 people requested access in the last 24 hours</p>
        </div>

      </div>
        <div className="robomania__header-image">
        <img src={highlight} alt="highlight" />
      </div>
    </div>
  )
}

export default Header