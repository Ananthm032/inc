import React from 'react'
import "./Fifth.css"
import Img7 from "../../Images/logo of inocyx.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
function Fifith() {
  return (
    <div className='fifth'>
      <div className='fifth-top'>
        <div className='fi-section'>
 <div className='fi-1'>
<div className="fi-img">
<img src={Img7} width="50px" height="50px"/>
<span>Inocyx</span>
</div>
<div className='fi-p'>
<p>Choose a wallet to buy and sell NFT in this NFT Marketplace</p>
</div>
<div className='fi-icon'>
<FacebookIcon/>
<InstagramIcon/>
<LinkedInIcon/>
<TwitterIcon/>
</div>
 </div>
 <div className='map'>
 <div className='fi-2'>
 <span>SITEMAP</span>
<p>Discover</p>
<p>Collections</p>
<p>Airdrops</p>
<p>Marketplace</p>
 </div>
 <div className='fi-3'>
 <span>METAVERSE</span>
<p>Maps</p>
<p>Games</p>

 </div>
 <div className='fi-4'>
 <span>META</span>
<p>Maps</p>
<p>Games</p>
<p>Games</p>
 </div>
       </div>
   </div>
   </div>
   <div className='fifth-bottom'>
<p>NFT Marketplace . 2022 @Copyrights. All rights are reserved</p>
   </div>
    </div>
  )
}

export default Fifith