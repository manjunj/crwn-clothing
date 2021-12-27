import React from "react";
import './header.styles.scss';
import { ReactComponent as Logo } from './crown.svg';
import { Link } from 'react-router-dom';

const Header = ()=>(
    <div className="header">
        <div className="logo-container"><Logo /> </div>
        <div className="options"> 
            <div className="option">
                <Link to="/shop">Shop</Link>
            </div>
            <div className="option">
                <Link to="/">Home</Link>
            </div>
        </div>
    </div>
)
export default Header;