import React from 'react'
import Fifith from './Fifthpage/Fifith'
import First from './FirstPage/First'
import Forth from './Forthpage/Forth'
import Second from './Secondpage/Second'
import Third from './Thirdpage/Third'
import "./Full.css"
function Full() {
  return (
    <div className='App'>
      <First/>
      <Second/>
      <Third/>
      <Forth/>
      <Fifith/>
    </div>
  )
}

export default Full