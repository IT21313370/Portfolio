// Skills.js

import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJs, faPython, faPhp, faRProject, faAndroid, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faC, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';


export default function Skills() {
  return (
    <div className="skills-container">
    <h1 className='title'>SKILLS</h1>
    <br />
    <div className='skill_box_holder'>
      {/* Use the skill-box class for each box */}
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faReact} style={{ color: 'cyan' }} /><br />React</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faHtml5} style={{ color: '#FF6000' }} /><br />HTML</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faCss3Alt} style={{ color: 'blue' }} /><br />CSS</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faJs} style={{ color: 'yellow' }} /><br />Javascript</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faPython} style={{ color: 'yellow' }} /><br />Python</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faAndroid} style={{ color: '#A2FF86' }} /><br />Kotlin</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faC} style={{ color: '#11009E' }} /><br />C</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faPhp} style={{ color: '#6527BE' }} /><br />PHP</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faFigma} style={{ color: 'black' }} /><br />Figma</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faRProject} style={{ color: 'grey' }} /><br />R</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faServer} style={{ color: '#408E91' }} /><br />MySQL</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faDatabase} style={{ color: 'green' }} /><br />MongoDB</div>
    </div>

    </div>
  );
}
