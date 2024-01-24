import React from 'react'
import './services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact, faAndroid, faFigma } from '@fortawesome/free-brands-svg-icons';


export default function Services() {
  return (
    <div className='services'>
      <h1 className='title'>SERVICES</h1>
      <div className='service_boxes'>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faReact} style={{ color: 'cyan' }} /><br />Web Apps</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faJava} style={{ color: '#f86000' }} /><br />Web Apps</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faAndroid} style={{ color: '#A2FF86' }} /><br />Mobile Apps</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faFigma} style={{ color: 'yellow' }} /><br />UI Designing</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faVideoCamera} style={{ color: 'purple' }} /><br />Video Editing</div>
      <div className="skill-box"><FontAwesomeIcon className='ficon' icon={faChalkboardTeacher} style={{ color: 'white' }} /><br />Online Tutoring</div>
      </div>
    </div>
  )
}
