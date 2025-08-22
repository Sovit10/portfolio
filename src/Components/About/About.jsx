import "./About.css";
import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import profilePicture from '../../assets/Profile-picture.png'; // Import the image

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profilePicture} alt="Profile" className="profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm currently learning front-end development and enjoy building interactive, user-friendly websites. I'm passionate about expanding my skills and exploring new technologies.</p>
            <p>I also have a basic understanding of Python and am always eager to learn more and grow as a developer.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML</p><hr style={{ width: "35%" }} /></div>
             <div className="about-skill"><p>CSS</p><hr style={{ width: "20%" }} /></div>
              <div className="about-skill"><p>React JS</p><hr style={{ width: "23%" }} /></div>
               <div className="about-skill"><p>Javascript</p><hr style={{ width: "30%" }} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
