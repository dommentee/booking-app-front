import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

//components 
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="container">
      <Router>
        <div className="header">
          <div className="search-form-warp">
           <Link to="/"><div className="home-button">SLayITKita</div></Link>
            {/* <form onSubmit={handleSearch} className="seach-form">
              <input 
                type="input" onChange={(e: any) => setSearchInput(e.target.value)} 
                className="searh-input"
                placeholder="search procedure"
                value={searchInput}
                />
              <input type="submit" value="search" className="submit-search" />
            </form> */}
          </div>
          {/* <div className="user-wrap">
            {
              user ? (
                <>                
                  <Link to="/profile"><div className="session-button" id="login">profile</div></Link>
                  <Link to="/"><div className="session-button" id="logout" onClick={logout}>logout</div></Link>
                </>
              ): (
                <>
                 <Link to="/signup"><div className="session-button" id="sign-up">signup</div></Link>
                  <Link to="/login"><div className="session-button" id="login">login</div></Link>
                </>
              )
            }
          </div> */}
        </div>
        {/* {
          searchResults ? (
            <div className="results">
              <h3>Search Results for {searchInput}</h3>
              <div className="chartwrap">
              </div> 
              <div className="result-stats">
              <h4>recommended hospitals/clinics</h4>
            </div>
            </div>
          ): <></>
        } */}
        <Routes>
          <Route path="/" element={
            <Home/>
          }/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/profile" element={<Profile
           
           />}/>
          <Route path="*" element={<ErrorPage />} />  */}
        </Routes>
      </Router>
      <Footer />
    </div>
  )

}

export default App;
