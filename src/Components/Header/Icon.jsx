import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton,  } from '@mui/material';
import {Link } from 'react-router-dom'
function Icon() {
  return (
    <div>
         <ul className="card__list2">
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
  )
}

export default Icon