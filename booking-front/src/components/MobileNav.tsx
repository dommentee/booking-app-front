import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const MobileNav = (props: any) => {
    return (
        <>
            <Link to="/housekeeping"><div className="nav-button" onClick={props.toggleNav}>House Rules</div></Link>
            <a href='https://slayitkita.square.site/'  target='_blank' className='book-now' onClick={props.toggleNav}>Book now</a>
            <Link to="/signup"><div className="session-button" id="sign-up" onClick={props.toggleNav}>signup</div></Link>
            <Link to="/login"><div className="session-button" id="login" onClick={props.toggleNav}>login</div></Link>
        </>
    )
}

export default MobileNav