import React from 'react'
import "./Second.css"
import {Box, Button} from "@mui/material"

function Second() {
  return (
    <div className='second' id='second'>
      
      <div className='second-top'>
        <div className='top1'>
            <h1>Inocyx Ecosystem</h1>
        </div>
         <div className='top2'>
          <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eu turpis molestie, dictum est a, mattis tellus
            </p>
            </div>
      </div>
      <div className='second-card'>
       <Box className="card1">
        <Box className="card-1" >
<span>Marketplace</span>
<p>MoreDetails</p>
</Box>
</Box>
<Box className="card2">
<Box className="card-2" >
<span>Exchange</span>
<p>MoreDetails</p>
</Box>
</Box>
<Box className="card3">
<Box className="card-3" >
<span>Metaverse Maps</span>
<p>MoreDetails</p>
</Box>
</Box>
      </div>
    </div>

  )
}

export default Second