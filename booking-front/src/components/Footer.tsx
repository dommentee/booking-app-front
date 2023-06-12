import React from "react";

import '../scss/components/footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="home-button">SlayItKita</div>
            <i className="fa-solid fa-location-dot"></i>
            <span className="location">Randolph Ma</span>
            <br></br>
			<span id="by">made by</span><a href="https://domacor.netlify.app" target="_blank"> Domacor Mentee </a>


        </div>
    )
}
export default Footer