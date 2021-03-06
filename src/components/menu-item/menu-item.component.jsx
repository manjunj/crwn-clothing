import React from 'react';
import "./menu-item.styles.scss";
import {useNavigate, useLocation} from 'react-router-dom';


function MenuItem({title, imageUrl, size, linkUrl}){
    const location = useLocation();
    const navigate = useNavigate();
    return (
    <div 
    className = {"menu-item "+ size} 
    onClick={() => navigate(location.pathname+linkUrl)}
    >
        <div className='background-image' style={{ backgroundImage :"url("+ imageUrl+ ")"}} />
        <div className = 'content'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>  
            <span className = 'subtitle'>SHOP NOW</span>  
        </div>
    </div>)
}
export default MenuItem;