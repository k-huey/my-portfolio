import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <img src="https://i.imgur.com/FfpUt1U.png?1" alt="Profile" className="profile-img" />
            <p>
            I'm a seasoned professional with a diverse background in marketing, account management, sales, and full-stack development. My experience spans various industries, 
            including insurance, marketing, and technology, and has demonstrated a consistent ability to drive business growth, enhance client relations, and implement 
            innovative solutions. I'm open to new opportunities where I can bring my unique blend of technical and commercial skills to any role.
            </p>
            <a href="http://linkedin.com/in/kylehuey/" rel="noreferrer" target="_blank" className='download-button'>
                LinkedIn Profile
            </a>
            <div className='divider'>
            </div>
            <a href="https://drive.google.com/file/d/1juX7MAjSLBtt8xQt22gdDg9DlagI7Daq/view?usp=sharing" rel="noreferrer" target="_blank" download className="download-button">
                Download Resume
            </a>
        </section>
    );
};

export default About;
