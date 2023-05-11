import React,{useState} from 'react';
import { BsHouseDoor,BsController,BsCollectionPlay,BsCodeSlash,BsCloudDrizzle,BsCupHot,BsDisplay,BsEmojiSmile,BsEvFront,BsGeoAlt,BsGift,BsHandbag,BsInstagram,BsMagic,BsCamera} from "react-icons/bs";

const Sidebar = ({selectedCategory,setselectedCategory}) => {
  
    const categoriesArray=["Home","Computer","Music","Movies","Travel","Food","Drinks","Dogs","BMW"];
    
    const categoriesArr=[
      {icon:<BsHouseDoor/>,name:'Home'},
      {icon:<BsController/>,name:'Gaming'},
      {icon:<BsCollectionPlay/>,name:'Movies'},
      {icon:<BsCodeSlash/>,name:'Reactjs'},
      {icon:<BsCloudDrizzle/>,name:'Weather'},
      {icon:<BsCupHot/>,name:'Coffee'},
      {icon:<BsDisplay/>,name:'NamasteJs'},
      {icon:<BsEmojiSmile/>,name:'Festivals'},
      {icon:<BsEvFront/>,name:'Tesla'},
      {icon:<BsGeoAlt/>,name:'Tourism'},
      {icon:<BsGift/>,name:'Gifts'},
      {icon:<BsHandbag/>,name:'Shopping'},
      {icon:<BsInstagram/>,name:'InstaReels'},
      {icon:<BsMagic/>,name:'Magic'},
      {icon:<BsCamera/>,name:'Camera'},
      {icon:<BsGeoAlt/>,name:'Switzerland'},
      {icon:<BsGeoAlt/>,name:'GoogleOffice'},
      {icon:<BsGeoAlt/>,name:'LoveProposal'},
    ]

  return (
    <div className="sidebar">
    {categoriesArr.map((eachcatg)=>(
        <p style={{background: eachcatg.name===selectedCategory && 'red',color: selectedCategory===eachcatg.name && 'white'}} onClick={()=>{setselectedCategory(eachcatg.name)}}>
          <span className='sidebar-icon' >{eachcatg.icon}</span><span className='sidebar-name'>{eachcatg.name}</span>
        </p>
    ))}
    </div>  
  )
}

export default Sidebar