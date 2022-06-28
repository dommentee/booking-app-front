import React from 'react'

import '../SASS/Hero.scss'
const Hero = (props: any) => {
    return (
        //wings/ weave install
        //crochett
        //microlinks
        //perminant makeup
        //makeup

        <>
            <div className='Hero'>
                <div className='speciality wigs'>
                    <div className='overlay'>
                        <h1>Wigs Instalations</h1>
                    </div>
                </div>
                <div className='speciality crochett'>
                    <div className='overlay'>
                        <h1>crochett Instalations</h1>
                    </div>
                </div>
                <div className='speciality microlinks'>
                    <div className='overlay'>
                        <h1>microlinks Instalations</h1>
                    </div>
                </div>
                <div className='speciality perminant'>
                    <div className='overlay'>
                        <h1>perminant makeup</h1>
                    </div>
                </div>
                {/* <div className='speciality makeup'>
                    <div className='overlay'>
                        <h1>makeup</h1>
                    </div>
                </div> */}
            </div>
        </>

    )
}
export default Hero