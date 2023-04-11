import React from 'react'
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import {Link , NavLink } from 'react-router-dom'
import { useState } from 'react';
import Logo from './Logo';
import List from './List';
import Icon from './Icon';
function Btn() {

        const [btnState, setBtnState] = useState(false)
    
         let bist = () => {
            setBtnState(  btnState => !btnState)
         }
         
         let toggleClassChek =  btnState ? 'bult' : null;
  return (
    <div>
        <IconButton aria-label="fingerprint" color="black" className='card__bur' onClick={() => bist()}>
                        <i class="fa fa-list-ul card__burger"></i>  
        </IconButton>
                    <div className={`col ${toggleClassChek}`}>
                        <IconButton aria-label="fingerprint" color="black" className='card__bur' onClick={() => bist()}>
                            <i class="fa-solid fa-x"></i>
                        </IconButton>
                        <hr />
                        
                         <ul className="card__lis4">
                    <li className="card__item4">
                        <NavLink to="/" className="card__item__link">
                            Home
                        </NavLink>
                    </li>
                     <li className="card__item">
                        <NavLink to='/About' className="card__item__link">
                            About
                        </NavLink>
                    </li>
                     <li className="card__item">
                        <NavLink to='/Box' className="card__item__link">
                            Box
                        </NavLink>
                    </li>
                </ul>
                        
                  <ul className="card__list3">
                    <li className="card__item2">
                        <Link to='https://github.com/Usmonov12345?tab=repositories' target='o1'>
                             <IconButton className='card__item2__btn' >
                            <i className='card__item2__face'> <GitHubIcon/></i >
                            </IconButton>
                        </Link>
                       
                    </li>
                     <li className="card__item2">
                        <Link to='https://www.instagram.com/usmonov_0_4/' target='o2'>
                             <IconButton className='card__item2__btn' >
                                <i className='card__item2__insta'><InstagramIcon/></i>
                            </IconButton>
                        </Link>
                       
                    </li>
                     <li className="card__item2">
                        <Link to='https://t.me/TOXIR_USMONOV' target='oo'>
                             <IconButton className='card__item2__btn' target='o3' >
                                <i className='card__item2__tg'><TelegramIcon/></i>
                            </IconButton>
                        </Link>
                     
                    </li>
                </ul>
                        
                        
                    </div>
        
    </div>
  )
}

export default Btn