import { NavLink } from 'react-router-dom';
import n from'./Navbar.module.css';
import './Active.css'
import React  from 'react';

const Navbar = () => {
   return (
   <nav className = {n.nav}>
    <div className ={n.navbar_item} class ='navlink'>
      <NavLink to= "/profile" >Profile</NavLink>
    </div>
    <div className ={n.navbar_item} class ='navlink'>
      <NavLink to= "/messages" >Messages</NavLink>
    </div>
       <div className={n.navbar_item} className='navlink'>
           <NavLink to="/users">Users</NavLink>
       </div>
    <div className ={n.navbar_item} class ='navlink'>
      <NavLink to= "/feed">Feed</NavLink>
    </div>
    <div className ={n.navbar_item} class ='navlink'>
      <NavLink to= "/music">Music</NavLink>
    </div>
    <div className ={n.navbar_item} class ='navlink'>
      <NavLink to= "/settings">Settings</NavLink>
    </div>
    {/* <div className ={n.navbar_item}>
      <a >Profile</a> 
    </div>*/}
  </nav>)
};

export default Navbar;