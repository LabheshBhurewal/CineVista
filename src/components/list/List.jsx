import React from 'react'
import './list.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ListItem from "../listItem/ListItem"
const List = () => {
  return (
    <div className='list'>
        <span className='listTitle'>Continue to Watch.</span>
        <div className="wrapper">
           <ArrowBackIosOutlinedIcon className='sliderArrow left'/>
            <div className="container">
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
               <ListItem/>
            </div>
            <ArrowForwardIosIcon className='sliderArrow right'/>
           
        </div>
    </div>
  )
}

export default List