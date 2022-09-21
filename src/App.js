import React from 'react'
import First from './Component/FirstPage/First'
import Corder from './Css/Corder'
import "./App.css"
import Second from './Component/Secondpage/Second'
import Third from './Component/Thirdpage/Third'
import Forth from './Component/Forthpage/Forth'
import Fifith from './Component/Fifthpage/Fifith'


function App() {
  

  return (
    <div className='App'>
     <Corder/>
     <First/>
     <Second/>
     <Third/>
     <Forth/>
     <Fifith/>
    </div>
  )
}

export default App