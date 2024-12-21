import React from 'react'
import "../styles/Footer.css";
import "../styles/Pre-Defined-Fonts.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='droom-logo-footer'></div>
      <div className='calendar-icon'></div>
      <p className='Inter-Regular-18px calendar-text'>10 October 2024, Gurugram Haryana</p>
      <div className='email-icon'></div>
      <p className='Inter-Regular-18px email-text'>E-mail: pr@droom.in</p>
      <h5 className='Inter-Regular-16px-white download-text'>Download the App</h5>
      <h5 className='Inter-Regular-16px-white watch-text'>Watch TVC</h5>
      <h5 className='Inter-Regular-16px-white follow-text'>FOLLOW & SHARE ON</h5>
      <a className='apple-icon' href='https://apps.apple.com/us/app/droom-buy-used-cars-bikes/id975174518?ls=1' target='_blank'></a>
      <a className='playstore-icon' href='https://play.google.com/store/apps/details?id=in.droom&pli=1' target='_blank'></a>
      <a className='youtube-icon' href='https://www.youtube.com/c/letsdroom' target='_blank'></a>
      <a className='insta-icon' href='https://www.instagram.com/letsdroom/' target='_blank'></a>
      <a className='fb-icon' href='https://www.facebook.com/droom.in' target='_blank'></a>
      <a className='x-icon' href='https://x.com/letsdroom' target='_blank'></a>
      <a className='linkedin-icon' href='https://www.linkedin.com/company/droom-in/' target='_blank'></a>
      <a className='pinterest-icon' href='https://www.pinterest.com/droom_in/' target='_blank'></a>
      <div className='Inter-Regular-16px-grey rights'>All rights reserved</div>
    </div>
  )
}

export default Footer
