import React from 'react'
import img from '../../../Img/homeImj.png'
import {Link} from 'react-router-dom'
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button,IconButton } from '@mui/material';
import './MainHero.scss'
function MainHero() {
  return (
    <div className='MainHero'>
        <div className="container">
             <div className="card">
              <ul className='card__list'>
                <li className='card__item'>
                  <span className='card__item__span'>salom!!!</span>
                  <h1 className='card__item__title'>Men TOHIR </h1>
                  <h1 className='card__item__title'>USMONOV </h1>
                  <div className="card__item__box">
                    <spam className="card__item__box__span">
                    </spam>
                    <p className='card__item__box__text'>Men O'zbekistondan <br />
                     Frontend Web Dasturchiman </p>
                  </div>
                 
                  
                  <div className="card__item__okkol">
                   <Link to='/' className='card__item__link1'>
                          <Button size="small" className='card__item__btn1'>
                          Bog'lanmoq <TelegramIcon/>
                          </Button>
                  </Link>
                  <Link to='/' className='card__item__link2'>
                          <Button size="small" className='card__item__btn2'>
                          portfolio <ArrowOutwardIcon/>
                          </Button>
                  </Link>
                  </div>
                  
                  
                  
                 <div className="card__item__loppo">
                    <div className="card__item__loppo__left">
                      <h4 className='card__item__loppo__left__title'>mening</h4>
                    </div>
                    <div className="card__item__loppo__right">
                      <Link to='https://t.me/TOXIR_USMONOV' target='oo22'  className='card__item__loppo__right__link'>
                      <IconButton  className='card__item__loppo__right__icon' size="small">
                        <TelegramIcon/>
                      </IconButton>
                      </Link>
                      <Link to='https://www.instagram.com/usmonov_0_4' target='oo23' className='card__item__loppo__right__link'>
                      <IconButton  className='card__item__loppo__right__icon' size="small">
                        <InstagramIcon/>
                      </IconButton>
                      </Link>
                      <Link to='https://github.com/Usmonov12345?tab=repositories' target='oo24' className='card__item__loppo__right__link'>
                      <IconButton  className='card__item__loppo__right__icon' size="small">
                        <GitHubIcon/>
                      </IconButton>
                      </Link>
                    </div>
                 </div>
                 
                 
                 
                 
                 
                 
                 
                 
                 
                  
                </li>
                 <li className='card__item2'>
                  <img src={img} alt="" className='card__item2__img' />
                </li>
              </ul>
              
            </div>
        </div>
    </div>
  )
}

export default MainHero