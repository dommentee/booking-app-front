import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState, useEffect  } from 'react';

import '../SASS/Header.scss'

const Header = () => {

    let [showNav, setShowNAv] = useState(false)

    const toggleNav = () => {
      if (showNav === false) {
        setShowNAv(true)
      } if (showNav === true) {
        setShowNAv(false)
      }
      
    }
    const noNav = () => {
      if(showNav === true) {
        setShowNAv(false)
      }else {
        return
      }
    }
    return (
        <div className="header sticky">
        <div className="search-form-warp">
            <Link to="/"><div className="home-button"  onClick={noNav}>S.I.K</div></Link>
        </div>
        <div className='desktop-nav'>
            <Link to="/housekeeping"><div className="nav-button">House Rules</div></Link>
            <a href='https://slayitkita.square.site/'  target='_blank' className='book-now'>Book now</a>
            <Link to="/signup"><div className="session-button" id="sign-up">signup</div></Link>
            <Link to="/login"><div className="session-button" id="login">login</div></Link>
        </div>

      {/* <div className='user-wrap'>
        <a href='https://slayitkita.square.site/'className='book-now'>Book now</a>
        <Link to="/signup"><div className="session-button" id="sign-up">signup</div></Link>
        <Link to="/login"><div className="session-button" id="login">login</div></Link>
      </div> */}
      {
        showNav ? (
          <div className="hamburger-menu" onClick={toggleNav}>
          <div className="bar" id="barone" ></div>
          <div className="bar" id="bartwo"></div>
          <div className="bar" id="barthree"></div>
        </div>
        ):<div className="hamburger-menu" onClick={toggleNav}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        }

        { 
          showNav ? (
            <div className="mobile-nav">
               <Link to="/housekeeping"><div className="nav-button" onClick={toggleNav}>House Rules</div></Link>
              <a href='https://slayitkita.square.site/'  target='_blank' className='book-now' onClick={toggleNav}>Book now</a>
              <Link to="/signup"><div className="session-button" id="sign-up" onClick={toggleNav}>signup</div></Link>
              <Link to="/login"><div className="session-button" id="login" onClick={toggleNav}>login</div></Link>
            </div>

          ):<div className="hidden"></div>
        }

    </div>

    )
}
export default Header