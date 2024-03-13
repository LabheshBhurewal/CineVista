import React from 'react'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const featured = () => {
  return (
    <div className='featured'>
     {/* {type && (
      <div className="category">

      </div>
     )} */}
        <img src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
    
    <div className="info">
        <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"/>
        <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam nisi illo fuga rem magnam veritatis autem placeat doloremque, deserunt libero voluptatibus unde? Ipsa quas praesentium fuga aperiam sapiente laudantium.

        </div>
       <div className="buttons">
         <button className='play'>
            <PlayArrowIcon/>play
         </button>
         <button className='more'>
            <InfoOutlinedIcon/>info
         </button>
              
    </div>
    </div>
    
    </div>
  )
}

export default featured