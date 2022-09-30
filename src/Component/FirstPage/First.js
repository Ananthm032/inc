import React, { useEffect } from 'react'
import "./First.css"
import Img1 from "../../Images/logo of inocyx.png"
import { useNav } from "../../Css/CustomHook/Customhook"
import AOS from 'aos'
import "aos/dist/aos.css"
function First() {
  const firstRef = useNav('Metaverse')
  useEffect(()=>{
    AOS.init({duration:3000})
  },[])
  return (
    
    
     
    <div className='image-portion' ref={firstRef}  id='FirstContainer'  data-aos="fade-zoom-in" data-aos-duration="3000">
     <div className="bg-img" >
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