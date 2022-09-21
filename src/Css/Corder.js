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
            <li><a class="active" href="#">MarketPlace</a></li>
            <li><a href="#">WhitePaper</a></li>
            <li><a href="#">Maps</a></li>
            <li><a href="#">RoadMap</a></li>
            <li><a href="#">Exchange</a></li>
         </ul>
      </nav>
      
   </body>
    </div>
  )
}

export default Corder