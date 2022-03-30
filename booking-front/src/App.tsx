import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


//components 
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';

//style
import './SASS/App.scss';


const App = () => {
  return (
    <div className="container">
      <Router>
        <div className="header">
          <div className="search-form-warp">
            <Link to="/"><div className="home-button">SlayItKita</div></Link>
          </div>
            <div className='user-wrap'>

              <a href='https://slayitkita.square.site/'className='book-now'>Book now</a>
              {/* <Link to="/signup"><div className="session-button" id="sign-up">signup</div></Link> */}
              {/* <Link to="/login"><div className="session-button" id="login">login</div></Link> */}
            </div>
        </div>
        <Routes>
          <Route path="/" element={
            <Home/>
          }/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  )

}

export default App;
