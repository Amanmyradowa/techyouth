import React from 'react';
import Back from '../images/back4.png';
import Opshy from '../images/open.JPG';

const About = () => {
  return (
    <div className='container'>
      <div className="about">
        <div className="about_left">
          <div className="about_title">About <span>Us</span></div>
          <div className="text">
            A program for youth <span>TechYouth Bootcamp</span> was launched in Turkmenistan, within the framework of which free courses in the field of digital education were organized in the following areas:
          </div>
          <div className="list">
            <li>Website development;</li>
            <li>Creation of mobile applications;</li>
            <li>Graphic and UI/UX design;</li>
            <li>Maintenance and administration of IT systems.</li>
          </div>
          <div className="open_img">
            <img className='video' src={Opshy} alt="" />
          </div>
          <div className="text">
            The organizers of the USAID training project together with the Sanly Bilim company invited the youth of Turkmenistan <span>aged 18 to 25</span> to take part in the program.
          </div>
          <div className="text">
            The study period is from <span>December 2022</span> to <span>June 2023.</span>
          </div>
        </div>
        <div className="about_right">
          <img src={Back} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About