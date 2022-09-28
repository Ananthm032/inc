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
            <li><a class="active" href="#hero">MarketPlace</a></li>
            <li><a href="#second">WhitePaper</a></li>
            <li><a href="#third">Maps</a></li>
            <li><a href="#fourth">RoadMap</a></li>
            <li><a href="#fifth">Exchange</a></li>
         </ul>
      </nav>
      
   </body>
    </div>
  )
}

export default Corder
