import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect  } from 'react';


//components 
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';

//style
import './SASS/App.scss';
import BookingRules from './components/BookingRules';


const App = () => {
  let [showNav, setShowNAv] = useState(false)

  const toggleNav = () => {
    if (showNav === false) {
      setShowNAv(true)
    } if (showNav === true) {
      setShowNAv(false)
    }
    
  }

  return (
    
    <div className="container">
      <Router>
        <div className="header">
          <div className="search-form-warp">
            <Link to="/"><div className="home-button">SlayItKita</div></Link>
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

        </div>
        {
          showNav ? (
            <div className="mobile-nav">
              <a className="about-link" href="#">Services</a>
              <a className="portfolio-link" href="#">About</a>
              <a className="portfolio-link" href="#">Contact</a>
              <a href='https://slayitkita.square.site/'  target='_blank' className='book-now'>Book now</a>
            </div>

          ):<div className="hidden"></div>
        }
        <Routes>
          <Route path="/" element={
            <Home/>
          }/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      <BookingRules/>
      <Footer />
    </div>
  )

}

export default App;
