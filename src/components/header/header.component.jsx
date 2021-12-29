import React from "react";
import './header.styles.scss';
import { ReactComponent as Logo } from './crown.svg';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header = ({currentUser})=>(
    <div className="header">
        <div className="logo-container"><Logo /> </div>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            {currentUser!==null?
            <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>:
            <Link className="option" to="/signin">Sign in</Link>}
        </div>
    </div>
)

const mapStatetoProps = state =>({
    currentUser:state.user.currentUser
})
export default connect(mapStatetoProps)(Header);