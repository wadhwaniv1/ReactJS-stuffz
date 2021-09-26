import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './MenuCard'
import NavBar from './NavBar'

//create a set of unique categories
const uniqueList = [
    //spread operator 
    ...new Set(
        Menu.map((currElem) => {
            return currElem.category;
        })
    ),
    "All"
]

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList]= useState(uniqueList);

    const filterItem = (category) =>{

        if(category === "All"){
            setMenuData(Menu);
            return;
        } 

        const updatedList = Menu.filter((currElem) => {
            return currElem.category === category;
        })
        setMenuData(updatedList);
    }

    return (
        <>
            <NavBar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
