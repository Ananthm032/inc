import React from 'react'
import "./Third.css"
import Img5 from "../../Images/Q3.png"
import Img6 from "../../Images/Q1.png"
import Img7 from "../../Images/Q2.png"
function Third() {
  return (
    <div className='third' id="Third">
     <div className='third-top'>
     <div>
            <h1>Roadmap</h1>
        </div>
         <div><p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eu turpis molestie, dictum est a, mattis tellus
            </p></div>
         
 
     </div>
     <div className='third-bottom'>
     <div class="grid-container">
  <div class="grid-item1">
  <div className='left2'>
<img src={Img6}/>
</div>

  </div>
  <div class="grid-item2">
  <div className='left1'>
            <span>2021 - Q1</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
         <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
         <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
  </div>
  <div class="grid-item3">
  <div className='left1'>
            <span>2021 - Q1</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
         <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
         <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            </div>  
  <div class="grid-item4"><div className='left2'>
<img src={Img7}/>
</div></div>
  <div class="grid-item5"> <div className='left2'>
<img src={Img5}/>
</div></div>
  <div class="grid-item6"> <div className='left1'>
            <span>2021 - Q1</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
         <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
         <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div></div>  
 
</div>
           </div>
       </div>
     
  )
}

export default Third