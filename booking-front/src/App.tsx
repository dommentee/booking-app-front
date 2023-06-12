import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect  } from 'react';


//components 
import Home from './pages/Home'
import Hero from './components/Hero'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

//style
import './scss/app.scss';
import BookingRules from './pages/BookingRules';


const App = () => {
  //state of mobile nav
  let [showNav, setShowNAv] = useState(false)
  //toggle state of nav
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
    <div className="container">
      {/* kept the header in the app component to keep the model mobile nav relative to the container so it can float under header */}
      <div className="header sticky">
        <Link to="/"><div className="home-button" onClick={noNav}></div></Link>
        <div className='desktop-nav'>
          <Link to="/housekeeping"><div className="nav-button">House Rules</div></Link>
          <a href='https://slayitkita.square.site/'  target='_blank' className='book-now'>Book now</a>
          <Link to="/signup"><div className="session-button" id="sign-up">signup</div></Link>
          <Link to="/login"><div className="session-button" id="login">login</div></Link>
        </div>

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
            {toggleNav}
            <MobileNav/>
          </div>

        ):<div className="hidden">
            {toggleNav}
            <MobileNav/>
        </div>
      }

      <Routes>
        <Route path="/" element={
          <Home/>
        }/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/housekeeping" element={<BookingRules/>}/>
      </Routes>
      {/* <div className='closing-banner'>
        <h4>
          Thankyou for being
          <br/>
          Slayed By Kita
        </h4>
        <a href='https://slayitkita.square.site/'  target='_blank' className='book-now'>Book Boston</a>
        <a href='https://www.styleseat.com/m/v/slayitkita?proId=1931865'  target='_blank' className='book-now'>Book Atlanta</a>

      </div> */}
      <Footer />
    </div>
  )

}

export default App;
