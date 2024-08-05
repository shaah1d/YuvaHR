import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate('/');
  }
return (
  <div className='box1'>
    <img src="/cropped.png" alt="YuvaHR Logo" onClick={handleChange}/>
    <div className='navbar-elements'>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active-link' : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'active-link' : undefined)}
      >
        Contact
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'active-link' : undefined)}
      >
        About
      </NavLink>
    </div>
   <div style={{ width: '20px'}}></div>
   </div>
);
}


