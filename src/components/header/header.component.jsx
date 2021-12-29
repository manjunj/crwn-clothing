import React from "react";
import './header.styles.scss';
import { ReactComponent as Logo } from './crown.svg';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser,hidden})=>(
    <div className="header">
        <div className="logo-container"><Logo /> </div>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            {currentUser!==null?
            <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>:
            <Link className="option" to="/signin">Sign in</Link>}
            {hidden?<CartDropDown/>:null}
            <CartIcon/>
        </div>
    </div>
)

const mapStatetoProps = ({user:{currentUser},cart:{hidden}}) =>({
    currentUser:currentUser,
    hidden :hidden
})

export default connect(mapStatetoProps)(Header);