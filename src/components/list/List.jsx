import React, { useState } from 'react'
import './list.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ListItem from "../listItem/ListItem"
import { useRef } from 'react';
const List = () => {

  const[IsMoved,setIsMoved]=useState(false)
 const [ slideNumber, setSlideNumber]=useState(0)

  const listRef = useRef()

  const handleClick = (direction) =>{

    let distance = listRef.current.getBoundingClientRect().x -50
    if(direction === "left"  && slideNumber > 0){
      setIsMoved(true)
      setSlideNumber(slideNumber - 1);
       listRef.current.style.transform =`translateX(${230 + distance}px)`
    }
    if(direction === "right" && slideNumber < 5){
      setSlideNumber(slideNumber + 1);
       listRef.current.style.transform =`translateX(${-230 + distance}px)`
    }
    // console.log(distance)
  }
  return (
    <div className='list'>
        <span className='listTitle'>Continue to Watch.</span>
        <div className="wrapper">
           <ArrowBackIosOutlinedIcon className="sliderArrow left" 
           onClick={()=>handleClick("left")}
           style={{display: !IsMoved && "none"}}/>
            <div className="container" ref={listRef}>
               <ListItem index={0}/>
               <ListItem index={1}/>
               <ListItem index={2}/>
               <ListItem index={3}/>
               <ListItem index={4}/>
               <ListItem index={5}/>
               <ListItem index={6}/>
               <ListItem index={7}/>
               <ListItem index={8}/>
               <ListItem index={9}/>
               
            </div>
            <ArrowForwardIosIcon className="sliderArrow right" onClick={()=>handleClick("right")}/>
           
        </div>
    </div>
  )
}

export default List