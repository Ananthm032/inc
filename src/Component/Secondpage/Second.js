import React from 'react'
import "./Second.css"
import {Box, Button} from "@mui/material"
import Img4 from "../../Images/Rectangle 137.png"
import Img5 from "../../Images/Rectangle 138.png"
import Img6 from "../../Images/Rectangle 139.png"
import { blue } from '@mui/material/colors'
function Second() {
  return (
    <div className='second'>
      <div className='second-top'>
        <div>
            <h1>Inocyx Ecosystem</h1>
        </div>
         <div><p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eu turpis
            </p></div>
         <div>
            <p>molestie, dictum est a, mattis tellus</p>
         </div>
      </div>
      <div className='second-card'>
       <Box className="card1">
        <Box className="card-1" >
<span>MarketPlace</span>
<p>MoreDetails</p>
</Box>
</Box>
<Box className="card2">
<Box className="card-2" >
<span>MarketPlace</span>
<p>MoreDetails</p>
</Box>
</Box>
<Box className="card3">
<Box className="card-3" >
<span>MarketPlace</span>
<p>MoreDetails</p>
</Box>
</Box>
      </div>
    </div>
  )
}

export default Second