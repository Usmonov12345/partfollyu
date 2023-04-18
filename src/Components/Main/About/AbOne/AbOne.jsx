import React from 'react'
import {Link} from 'react-router-dom'
import './AbOne.scss'
function AbOne() {
  return (
    <div className='AbOne'>
        <div className="container">
            <div className="card">
                <ul className="card__list">
                    <li className="card__item2">
                        <h1 className='card__item2__title1'>
                            Tohir Usmonov
                        </h1>
                        <h2 className='card__item2__title2'>
                            Front end developer
                        </h2>
                        
                        <div className="card__item2__box">
                          <Link to='mailto:usmonovtohit04@gmail.com' className='card__item2__link'>
                                <i class="fa-solid fa-envelope card__item2__box__icon"></i> usmonovtohit04@gmail.com
                           </Link>
                            <Link to='tel:+998884134344' className='card__item2__link'>
                               <i className='fa fa-phone card__item2__box__icon2'></i> +998-88-413-43-44   
                           </Link>
                            <Link to='https://www.google.com/maps/place/San%CA%BCat+Saroyi/@40.3798329,71.7492619,13z/data=!4m15!1m8!3m7!1s0x38bb83431937abc5:0xcfa4d876b34e7bbc!2sFergana,+Uzbekistan!3b1!8m2!3d40.3733802!4d71.7978333!16zL20vMDQ0aGIy!3m5!1s0x38bb84850825fca1:0x4ab914dbb2ea497c!8m2!3d40.3755945!4d71.800774!16s%2Fg%2F11c52_lyp2' className='card__item2__link' target='0p[las'>
                              <i class="fa-solid fa-location-dot card__item2__box__icon"></i>  Uzbekistan Farg'ona
                           </Link>
                        </div>
                         
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AbOne