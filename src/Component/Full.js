import React from 'react'
import First from "../Component/FirstPage/First"
import Second from "../Component/Secondpage/Second"
import Third from "../Component/Thirdpage/Third"
import Forth from "../Component/Forthpage/Forth"
import "./Full.css"
import Fifith from './Fifthpage/Fifith'
function Full() {
  return (
    <div className='Full'>
        
        <First/>
        <Second/>
        <Third/>
        <Forth/>
       <Fifith/>
    </div>
   
  )
}

export default Full