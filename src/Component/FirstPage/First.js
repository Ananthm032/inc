import React from 'react'
import "./First.css"
import Img1 from "../../Images/logo of inocyx.png"

function First() {
  
  return (
    
    
     
    <div className='image-portion' id='hero'>

     <div className="bg-img">
        <div className='ag'>
          <div className='ag1'>
      <img src={Img1} />
     <span>INOCYX</span>
     </div>
     </div>
     <div className='bg1'>
     <div className='bg'>
     <h1>The Ultimate Metaversity</h1>
     </div>
     <div className='cg'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eu turpis molestie, dictum est a, mattis tellus</p>
     </div>
  
     </div>
     </div>
    </div>
    
   
  )
}

export default First