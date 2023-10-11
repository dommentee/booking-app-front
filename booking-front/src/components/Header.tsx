import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState, useEffect  } from 'react';

import MobileNav from './MobileNav';
import '../scss/components/header.scss';


const Header = (props: any) => {

  //state of mobile nav
  let [showNav, setShowNAv] = useState(false)

  //toggle state of MobileNav
  const toggleNav = () => {
    if (showNav === false) {
      setShowNAv(true)
    } if (showNav === true) {
        setShowNAv(false)
      }
  }

  //closing nav when link is clicked
  const noNav = () => {
    if(showNav === true) {
      setShowNAv(false)
    }else {
      return
    }
  }

  return (
    <>
    {/* sticky nav */}
    <div className="header sticky">
      <Link to="/"><div className="home-button" onClick={noNav}></div></Link>
      <div className='desktop-nav'>
        <Link to="/housekeeping"><div className="nav-button">House Rules</div></Link>
        <a href='https://slayitkita.square.site/'  target='_blank' className='book-now'>Book now</a>
        <Link to="/signup"><div className="session-button" id="sign-up">signup</div></Link>
        <Link to="/login"><div className="session-button" id="login">login</div></Link>
      </div>

      {/* toggle nav with menue */}
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
    </div>

    {
      showNav ? (
        <div className="mobile-nav">
          <MobileNav noNav={noNav}/>
        </div>
      ):<div className="hidden">
        <MobileNav/>
      </div>
    }

    </>
  )

}
export default Header