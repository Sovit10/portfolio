import React from 'react';
import './Hero.css';
import picofme from '../../assets/picofme.png';

const Hero = () => {
  return (
    <div id='home'className='hero'>
      <img src={picofme} alt="My Profile" />
      <h1> <span>I'm Sovit Singh</span>,frontend Developer based in India</h1>
      <p>I’m a 21-year-old engineering student at AKGEC, passionate about technology, web development, and problem-solving, while valuing family and personal growth..</p>
      <div className='hero-action'>
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
