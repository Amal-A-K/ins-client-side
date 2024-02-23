import React from 'react'
import face from '../../assets/man-user-circle-icon.svg'
import { Link } from 'react-router-dom';
import './header.css';
// import Dropdownex from './dropdown';

export const Header = () => {
    
    return (

        <div className='head'>
            <div className='navlink'>
                <Link to={'/Home'}>Home</Link>
                <Link to={'/Profile'}>Profile</Link>
                {/* <a href='/Home'>Home</a> */}
                
                {/* <a href='/Profile'>Profile</a> */}
            </div>
            <div className='img1'>
            <img src={face} alt='icon'></img>
                {/* <Dropdownex/> */}
            </div>
        </div>

    )
}
