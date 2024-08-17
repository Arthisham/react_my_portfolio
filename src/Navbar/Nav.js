import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css'


const Nav = () => {
  return (
    <nav>
        <div className='head'>
            <Link to='/'>Selling...</Link>
        </div>
        <div className='list'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/product'>Product</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/testinomials'>Testinomials</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav