import React from "react";
import { useNavigate } from 'react-router-dom'

import '../SASS/Home.scss';

const Home = (props: any ) => {
    //navaget is used to route for different button 
  let navagate = useNavigate()
  return (
    <>
      <div className="home">
        <div className="background-pic"></div>
          <div className="overlay">
            <p>
              <span>LICENSED HAIR STYLIST</span>
              <br/>
              <a>
                Bringing you the TLC 
                that enhances your Beauty
                in Boston / Atlanta area
              </a>
            </p>
            {/* <a href='https://slayitkita.square.site/'  target='_blank' className='book-now'>Book now</a> */}
          </div>        
        </div>
        {/* <div className="banner">LICENSEd HAIR STYLIST</div> */}
        <div className="hero">
            
        </div>
      </>

  )
}

export default Home