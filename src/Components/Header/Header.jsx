import React from 'react'
import img from '../../Img/logo3.svg'
import './Header.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import {Link ,NavLink} from 'react-router-dom'
import { IconButton } from '@mui/material';
function Header() {
  return (
    <div className='Header'>
        <div className="container">
            <div className="card">
                <Link to="/">
                    <img src={img} alt=""   className='card__logo'/>
                </Link>
                <ul className="card__list">
                    <li className="card__item">
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
                
                 <ul className="card__list2">
                    <li className="card__item2">
                        <Link to='https://github.com/Usmonov12345?tab=repositories' target='oo'>
                             <IconButton className='card__item2__btn' >
                            <i className='card__item2__face'> <GitHubIcon/></i >
                            </IconButton>
                        </Link>
                       
                    </li>
                     <li className="card__item2">
                        <Link to='https://www.instagram.com/usmonov_0_4/' target='oo'>
                             <IconButton className='card__item2__btn' >
                                <i className='card__item2__insta'><InstagramIcon/></i>
                            </IconButton>
                        </Link>
                       
                    </li>
                     <li className="card__item2">
                        <Link to='https://t.me/TOXIR_USMONOV' target='oo'>
                             <IconButton className='card__item2__btn' target='oo' >
                                <i className='card__item2__tg'><TelegramIcon/></i>
                            </IconButton>
                        </Link>
                     
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
