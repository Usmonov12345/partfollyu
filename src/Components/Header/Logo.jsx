import React from 'react'
import {Link } from 'react-router-dom'
import img from '../../Img/logo4.svg'

function Logo() {
  return (
    <div>
          <Link to="/">
                    <img src={img} alt=""   className='Header__logo'/>
        </Link>
    </div>
  )
}

export default Logo