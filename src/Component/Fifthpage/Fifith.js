import React from 'react'
import "./Fifth.css"
import Img8 from "../../Images/image 5.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNav } from "../../Css/CustomHook/Customhook"
function Fifith() {
  const fifthRef = useNav('Fifth')
  return (
    <div className='fifth' ref={fifthRef} id='FifthContainer'>
      <div className='fi-top'>
      <div class="grid-container1">
      <div class="box1">
     
      <div className='fi-1'>
<div className="fi-img">
<img src={Img8} />
<span>INOCYX</span>
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

</div>
      
      <div class="box2">
      <div className='fi-2'>
 <span>SITEMAP</span>
<p>Discover</p>
<p>Collections</p>
<p>Airdrops</p>
<p>Marketplace</p>
 </div>

      </div>
      <div class="box3">
      <div className='fi-3'>
 <span>METAVERSE</span>
<p>Maps</p>
<p>Games</p>

 </div>

      </div>
      <div class="box4">
      <div className='fi-4'>
 <span>META</span>
<p>Maps</p>
<p>Games</p>
<p>Games</p>
 </div>

      </div>
      
    </div>
    </div>
      <div className='fi-bottom'>
      <p>NFT Marketplace . 2022 @Copyrights. All rights are reserved</p>

      </div>
</div>
  )
}

export default Fifith
