import React,{useState} from 'react'
import "./Corder.css"
import Img from "../Images/logo of inocyx.png"
function Corder() {

  return (
    <div>
 <body>
      <nav>
         <div class="logo">
           <img src={Img}></img>
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li><a href="#First">MarketPlace</a></li>
            <li><a href="#Second">WhitePaper</a></li>
            <li><a href="#Third">Maps</a></li>
            <li><a href="#Fourth">RoadMap</a></li>
            <li><a href="#Fifth">Exchange</a></li>
         </ul>
      </nav>
      
   </body>
    </div>
  )
}

export default Corder