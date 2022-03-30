import React from "react";
import { useNavigate } from 'react-router-dom'

import '../SASS/Home.scss';

const Home = (props: any ) => {
    //navaget is used to route for different button 

let navagate = useNavigate()
  return (
      <div className="home">
        <div className="background-pic"></div>
        <div className="overlay">
            

        </div>
      </div>

  )
}

export default Home