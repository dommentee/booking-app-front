import React from "react";
import { useNavigate } from 'react-router-dom'

import '../scss/pages/home.scss';

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
              <br/> 
              <p className="inner-p">
                Bringing your hair some TLC 
                in the <br/> Boston / Atlanta area
              </p>
            </p>
            {/* <a href='https://slayitkita.square.site/'  target='_blank' className='book-now'>Book now</a> */}
          </div>        
        </div>
        {/* <div className="banner">LICENSEd HAIR STYLIST</div> */}
      </>

  )
}

export default Home