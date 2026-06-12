import React from 'react'
import './exploremenu.css'
import {menu_list}from '../../assets/assets'


const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='exploremenu' id="explore-menu">

      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>  choose from a diverse menu featuring a delecatable array of dishes creaffed with the finest ingredients and culinary expertise our mission is to satisfy your cravings and elevate your dining experience , one delicious meals at a time</p>
           
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className="explore-menu-list-item">
                 <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.name} />
                 <p>{item.menu_name}</p>

                </div>
                
            )
        }
    )}  
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
