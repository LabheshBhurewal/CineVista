import React, { useState } from 'react'
import './listItem.scss'
import PlayArrow from '@mui/icons-material/PlayArrow'
import { Add, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'



const ListItem = ({index}) => {

  const [IsHovered,setIsHovered]=useState(false)
  const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
  return (
    <div className="listItem"
    style={{left: IsHovered && index * 225 - 50 + index * 2.5}}
     onMouseEnter={()=>setIsHovered(true)}
     onMouseLeave={()=>setIsHovered(false)}
    >
      <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
      
      />
      {IsHovered && (
        <>  
   <video src={trailer} autoPlay={true} loop />
          <div className="infoItem">  
        <div className="icons">
         <PlayArrow className="icon"/>
         <Add className="icon"/>
         <ThumbUpAltOutlined className="icon"/>
         <ThumbDownAltOutlined className="icon"/>
        </div>

        <div className="infoItemTop">
          <span> 1hr 14min</span>
          <span className='limit'>+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maxime magni
           sed impedit, fuga itaque repellendus unde, cum quia rem, reprehenderit 
           atque nulla libero iste quis expedita ab nostrum. Cupiditate.
        </div>
        <span className='genre'>Action</span>
      </div>
      </>
        )}
    </div>
  );
}

export default ListItem