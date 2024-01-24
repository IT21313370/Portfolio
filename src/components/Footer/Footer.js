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
    return (
        <div className='copy_r'>
            <p>copyright &copy; 2023 All rights reserved.</p>
        </div>
    )
}