import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <Quote />
      <Copyright />
    </div>
  )
}


function Quote() {
    return (
        <div className='quote'>
            "Creativity is intelligence having fun."
            <br />
            -Albert Einstein-
        </div>
    )
}

function Copyright() {
  const currentYear = new Date().getFullYear();
    return (
        <div className='copy_r'>
            <p>copyright &copy; Dhananjaya. {currentYear}  All rights reserved.</p>
        </div>
    )
}