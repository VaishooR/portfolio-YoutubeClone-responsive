import React,{useState} from 'react';
import { BsHouseDoor,BsController,BsCollectionPlay,BsCodeSlash,BsCloudDrizzle,BsCupHot,BsDisplay,BsEmojiSmile,BsEvFront,BsGeoAlt,BsGift,BsHandbag,BsInstagram,BsMagic,BsCamera} from "react-icons/bs";

const SidebarTwo = () => {
    const categoriesArray=["Home","Computer","Music","Movies","Travel","Food","Drinks","Dogs","BMW"];
    const categoriesArr=[
      {icon:<BsHouseDoor/>,name:'Home'},
      {icon:<BsController/>,name:'Gaming'},
      {icon:<BsCollectionPlay/>,name:'Movies'},
      {icon:<BsCodeSlash/>,name:'Reactjs'},
      {icon:<BsCloudDrizzle/>,name:'Weather'},
      {icon:<BsCupHot/>,name:'Coffee'},
      {icon:<BsCupHot/>,name:'Lovetoday'},
      {icon:<BsDisplay/>,name:'NamasteJs'},
      {icon:<BsEmojiSmile/>,name:'Festivals'},
      {icon:<BsEvFront/>,name:'Cars'},
      {icon:<BsGeoAlt/>,name:'Tourism'},
      {icon:<BsGift/>,name:'Gifts'},
      {icon:<BsHandbag/>,name:'Shopping'},
      {icon:<BsInstagram/>,name:'InstaReels'},
      {icon:<BsMagic/>,name:'Magic'},
      {icon:<BsCamera/>,name:'Camera'}
    ]
  return (
    <div className="sidebar">
    {categoriesArr.map((eachcatg)=>(
        <p>
          <span style={{marginRight:'25px'}}>{eachcatg.icon}</span><span >{eachcatg.name}</span>
        </p>
    ))}
    </div>
  )
}

export default SidebarTwo


