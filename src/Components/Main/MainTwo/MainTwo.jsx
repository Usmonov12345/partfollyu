import React from 'react'
import './MainTwo.scss'
import {Button,IconButton} from '@mui/material'
import {Link} from 'react-router-dom'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function MainTwo() {
  return (
    <div className='MainTwo'>
        <div className="container">
            <div className="box">
                <div className="box__left">
                    <span className='box__left__span'>Xizmat</span>
                    <h2 className='box__left__title'>Men taklif qiladigan xizmatlar ! ! !</h2>
                    <div className="box__left__card">
                    
                    <span className="box__left__card__span">
                    
                    </span>
                    <p className="box__left__card__text">
Web sayt Biz eng websayt dasturlash tillaridan sizga kerakli bo'lgan har qanday murakkablikdagi websaytni yaratib beradi va sizning idealingiz tez amalga oshirishga yordam beradi.
                    </p>
                    </div>
                    <Link to='/box' >
                    <Button  className='box__left__card__btn'>
                        Service
                    </Button>
                    </Link>
                    
                </div>
                
                
                
                
                
                
                
                <div className="box__right">
                    
                    <ul className="box__right__list">
                        <li className="box__right__item">
                                <Card  className='box__right__item__card'>
                                  <CardActionArea>
                                                <i class="fa-brands fa-html5 box__right__item__icon"></i>
                                        <CardContent>
                                              <Typography variant="body2" color="text.secondary">
                                                    <p className="box__right__item__text">
                                                        HTML
                                                    </p>
                                              </Typography>
                                        </CardContent>
                                  </CardActionArea>
                            </Card>
                        </li>
                            <li className="box__right__item">
                                <Card className='box__right__item__card'>
                                  <CardActionArea>
                                            <i class="fa-brands fa-css3-alt box__right__item__icon"></i>

                                        <CardContent>
                                              <Typography variant="body2" color="text.secondary">
                                                    <p className="box__right__item__text">
                                                        Css
                                                    </p>
                                              </Typography>
                                        </CardContent>
                                  </CardActionArea>
                            </Card>
                        </li>  
                        
                        
                        
                        
                        <li className="box__right__item">
                                <Card  className='box__right__item__card'>
                                  <CardActionArea>
                                            <i class="fa-brands fa-bootstrap box__right__item__icon"></i>

                                        <CardContent>
                                              <Typography variant="body2" color="text.secondary">
                                                    <p className="box__right__item__text">
                                                        Bootstrap

                                                    </p>
                                              </Typography>
                                        </CardContent>
                                  </CardActionArea>
                            </Card>
                        </li>    <li className="box__right__item">
                                <Card  className='box__right__item__card'>
                                  <CardActionArea>
                                            <i class="fa-brands fa-js box__right__item__icon"></i>

                                        <CardContent>
                                              <Typography variant="body2" color="text.secondary">
                                                    <p className="box__right__item__text">
                                                        Javascript
                                                    </p>
                                              </Typography>
                                        </CardContent>
                                  </CardActionArea>
                            </Card>
                        </li> 
                        
                        
                        
                        
                        
                        
                        <li className="box__right__item">
                                <Card  className='box__right__item__card'>
                                  <CardActionArea>
                                            <i class="fa-brands fa-react box__right__item__icon"></i>
                                        <CardContent>
                                              <Typography variant="body2" color="text.secondary">
                                                    <p className="box__right__item__text">
                                                    React
                                                    </p>
                                              </Typography>
                                        </CardContent>
                                  </CardActionArea>
                            </Card>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainTwo