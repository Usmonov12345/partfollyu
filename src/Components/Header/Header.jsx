import React from 'react'
import './Header.scss'
import List from './List';
import Icon from './Icon';
import Logo from './Logo';
import Btn from './Btn';
function Header() {

    
  return (
    <div className='Header'>
        <div className="container">
            <div className="card">
                    <Logo/>
                    <List/>
                       <div className="box">
                     <Btn className='goog'/>
                   </div>
            </div>
        </div> 
    </div>
  )
}

export default Header
