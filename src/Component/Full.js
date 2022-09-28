import React from 'react'
import First from "./FirstPage/First"
import Second from "./Secondpage/Second"
import Third from "./Thirdpage/Third"
import Forth from "./Forthpage/Forth"
import Fifith from './Fifthpage/Fifith'
import "./Full.css"
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