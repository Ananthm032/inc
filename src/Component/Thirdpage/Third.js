import React from 'react'
import "./Third.css"
import Img5 from "../../Images/Q3.png"
function Third() {
  return (
    <div className='third'>
     <div className='third-top'>
     <div>
            <h1>Roadmap</h1>
        </div>
         <div><p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eu turpis
            </p></div>
         <div>
            <p>molestie, dictum est a, mattis tellus</p>
         </div>
 
     </div>
     <div className='third-bottom'>
          <div className='road'>
            <div className='left1'>
            <span>2021 - Q1</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
         <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
         <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className='left2'>
<img src={Img5}/>
</div>

           </div>
           <div className='road1'>
            <div className='left11'>
            <span>2021 - Q1</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
         <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
         <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className='left22'>
<img src={Img5} />
</div>

           </div>
           <div className='road'>
            <div className='left1'>
            <span>2021 - Q1</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
         <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
         <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className='left2'>
<img src={Img5} width="250px" height="150px"/>
</div>

           </div>
       </div>
     </div>
  )
}

export default Third