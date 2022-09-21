import React from 'react'
import "./First.css"
import Img1 from "../../Images/logo of inocyx.png"
import Img2 from "../../Images/image 8.png"
function First() {
  return (
    <div className='image-portion'>
     <div className="bg-img">
        <div className='ag'>
      <img src={Img1} width="50px" height="50px"/>
     <span>Inocyx</span>
     </div>
     <div className='bg'>
        <h1>The Ultimate Metaverse</h1>
     </div>
     <div className='cg'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eu turpis </p>
       
     </div>
     <div className='dg'>
     <p> molestie, dictum est a, mattis tellus</p>
     </div>
     </div>
    </div>
  )
}

export default First