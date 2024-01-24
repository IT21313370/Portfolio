import React from 'react'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import gogoApp from '../Images/logoimg.png'
import Encore from '../Images/Encore.png'
import Sathsara from '../Images/sathsara.png'
import eventi from '../Images/eventi.png'
import mybizapp from '../Images/mybizapp.png'

export default function Projects() {
  return (
    <div className='projects'>
      <h1 className='title'>PROJECTS</h1>
      <div className='display_area'>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/GoGoAppVdo.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>GoGoApp</h2>
                <h3 style={{ color: '#42c2ff' }}>Mobile Application</h3>
                <a href="https://github.com/IT21313370/Y2S2-GoGoApp-MAD-Project.git">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>GoGo mobile application connects people serching for jobs and vacancies, it is an on demand service application.</p>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Figma</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Kotlin</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Firebase</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Renderforest</li>
                </ul>
                <br />
                <img alt='gogo_icon' src={gogoApp} />

            </div>
        </div>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/ITP_PROJECT_CustomerWebApp.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>Encore</h2>
                <h3 style={{ color: '#EB6440' }}>Thrifting Management System</h3>
                <a href="https://github.com/SLIITITP/y2_s2_wd_it_01-itp_wd_b01_g05_ThriftingManagementSystem.git">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>Encore is a thrifting management system which provide customers and facillitate the internal staff with a well built inetrnal application which manages the customer interactions. In this project I present the customer web app.</p>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />MongoDB</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />ExpressJs</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />ReactJs</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />NodeJs</li>
                </ul>
                <br />
                <img alt='gogo_icon' src={Encore} />

            </div>
        </div>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/webpageY1S2.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>SATHSARA</h2>
                <h3 style={{ color: '#6D67E4' }}>Online Musical instrument Shop</h3>
                <a href="#this_project_has_no_git_link">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>SATHSARA is an online musical instrument shop which sells various kind of accessories related to music. Customer can browse for any type of instruments and buy. Also it is available for sellers to sell their products.</p>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />HTML</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />CSS</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Javascript</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />XAMPP</li>
                </ul>
                <br />
                <img style={{ height: '60px', width: '150px' }}  alt='gogo_icon' src={Sathsara} />

            </div>
        </div>
      </div>
      <br />
      <div className='display_area'>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/loadingScreen01.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>Eventi</h2>
                <h3 style={{ color: '#1B9C85' }}>Event Management System</h3>
                <a href="#this_project_has_no_git_link">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>Eventi event management system help the users with indoor and outdoor, day and night any event. It provide facility to the customer lpan thier own event with the given packages.</p>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Java</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />HTML</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />CSS</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Javascript</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Servlet</li>
                </ul>
                <br />
                <img alt='gogo_icon' src={eventi} />

            </div>
        </div>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/loadingScreen01.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>MyBiz</h2>
                <h3 style={{ color: '#9BABB8' }}>Business Management System</h3>
                <a href="#link_will_be_uploaded_soon">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>MyBiz is a business management system which allows staff to take control of the transaction and store.</p>
                <hr />
                <ul>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />MySQL</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />MongoDB</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />ExpressJs</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />ReactJs</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />NodeJs</li>
                </ul>
                <br />
                <img alt='gogo_icon' src={mybizapp} />

            </div>
        </div>
        <div className='project_card'>
            <video className='video' controls muted autoPlay loop>
                <source src={require("../Videos/loadingScreen01.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='ptitle'>
                
                <h2>Data Science - ML Project</h2>
                <h3 style={{ color: '#B70404' }}>California House Price Prediction</h3>
                <a href="#link_will_be_uploaded_soon">
                  <FontAwesomeIcon className='githubLink' icon={faGithub} color='#4d4d4e' />
                </a>
                <p>California House price prediction module is a Data Science project for analysin data and visualizing them and provide the facility to predict the house prices.</p>
                <hr />
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Python</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />ReactJs</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />HTML</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />CSS</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Javascript</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />Jupyter</li>
                    <li><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />MongoDB</li>
                </ul>
                <br />
                {/* <img style={{ height: '60px', width: '150px' }}  alt='gogo_icon' src='' /> */}

            </div>
        </div>
      </div>
    </div>
  )
}
