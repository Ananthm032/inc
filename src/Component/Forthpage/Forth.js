import React from 'react'
import "./Forth.css"
import { useNav } from "../../Css/CustomHook/Customhook"
function Forth() {
  const fourthRef = useNav('Console')
  return (
    <div className='forth' ref={fourthRef} id='FourthContainer'>
                <div className='forth-top'>
            <h1>Our Sponcers</h1>
       
        <p>
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            </p>
            </div>
        <div className='forth-bottom'>
       <img src="https://www.coinbase.com/assets/press/coinbase-logos/coinbase.png" width="120px" height="100px"/>
        <img src="https://seeklogo.com/images/P/polygon-matic-logo-54F492826D-seeklogo.com.png" width="120px" height="80px"></img>
       <img src="https://logos-download.com/wp-content/uploads/2018/05/Ripple_logo_blue-700x201-1.png" width="120px" height="80px"/>
        </div>
    </div>
  )
}

export default Forth