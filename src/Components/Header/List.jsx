import React from 'react'
import { NavLink } from 'react-router-dom'
function List() {
  return (
    <div>
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
    </div>
  )
}

export default List