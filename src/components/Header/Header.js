import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    const {user,logout} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory Here</NavLink>
                {user?.displayName&&<span style={{color:'#fff',padding:'0 10px'}}>Hello {user.displayName}  </span>}
                {   user.email ? 
                    <button onClick={logout}>Logout</button>
                    :
                    <NavLink to="/login">Login</NavLink>
                }
            </nav>
            
        </div>
    );
};

export default Header;