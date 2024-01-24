import './home.css'
import profile from  '../Images/bg_rmv_prof04.png'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Home() {
    const [text] = useTypewriter({
        words: ['Software Engineer', "Data Analyst", "ML Engineer", "Data Scientist", "Web Developer", "Creative Designer"],
        loop: 0,
    });

    return(
        <div className='home'>
            
            
            <p className='objective'>
            <h1>Hi, I'm <br /></h1><h1 className='name'>DHANANJAYA DISSANAYAKE<br /><br />
            <h2><span className='text_generate'>
                {text}<Cursor/>
            </span>
            <span>
                
            </span>
            <br /></h2>
            </h1>
            Experienced in software engineering, machine learning, data analysis, and data science. Skilled in extracting valuable insights from complex datasets and implementing data-driven strategies for optimizing operational efficiency and decision-making. Passionate about exploring patterns and trends in data to deliver actionable recommendations and foster innovation. Seeking rewarding opportunities in a forward-thinking organization.
            </p>
            <div className='picture'>
                <img alt='profile' src={profile}/>
            </div>
        </div>
    )
}