import React from 'react'

import '../SASS/BookingRules.scss'
const BookingRules = () => {
    return (
        <div className='rules-wrap'>
            <p>
                HELLO AND THANK YOU FOR BOOKING WITH <a href='https://slayitkita.square.site/'  target='_blank'>SLAYED BY KITA</a>.
                PLEASE READ ALL THE RULES BELOW BEORE BOOKING YOUR APPOINMENT.
                THANK YOU!
            </p>
            <div className='rule'>
                <h3>PAYMENTS</h3>
                <p>
                    I  DO NOT ACCEPT CASH APP.
                    CASH OR ZELLE ONLY.
                    Deposits are Non-Refundalbe AND Non-Transferable
                    Please stop at the bank before comming you can not 
                    go to the bank after!
                </p>
            </div>
            <div className='rule'>
                <h3>SALON RULES</h3>
                <p>
                    
                </p>

            </div>
            <div className='rule'>
                <h3>PRE-CARE</h3>
            </div>
            <div className='rule'>
                <h3>TIME MANAGEMENT</h3>
            </div>
            <div className='rule'>
                <h3>MICROLINKS</h3>
            </div>
        </div>
    )
}
export default BookingRules