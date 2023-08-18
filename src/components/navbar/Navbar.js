import React, { useState} from 'react';
import Logo from '../images/logoheader.png';
import LogoTitle from '../images/logotitle.png';
import {Link} from "react-router-dom";
import {FaHeart, FaSignOutAlt, FaTimes} from 'react-icons/fa';
import {FaBagShopping, FaBars} from 'react-icons/fa6';
import './Navbar.css';
import './NavbarRes.css';
import '../styles.css';

export default function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };


    return<header>
        <input type="checkbox" id="menubar" />
        <label htmlFor="menubar" onClick={handleClick}>
        {clicked ? <FaTimes size={24} /> : <FaBars size={24} />}</label>

        <div id="logo">
            <Link to="/"><img src={Logo} alt="Eyetistic"/>
            <span><img src={LogoTitle} alt="Eyetistic" /></span></Link>
        </div>

        <nav className="navbar">
            <ul>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/blogs">BLOGS</Link></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>

            <div id="nav-right">
                <Link to="/favourite"><FaHeart size={23} 
                    onMouseOver={({target})=>target.style.color="#9ed832"}
                    onMouseOut={({target})=>target.style.color="#d5d9f8"}/></Link>

                <Link to="/cart"><FaBagShopping size={23} 
                    onMouseOver={({target})=>target.style.color="#9ed832"}
                    onMouseOut={({target})=>target.style.color="#d5d9f8"}/></Link>
                    
                <Link to="/logout"><FaSignOutAlt size={23} 
                    onMouseOver={({target})=>target.style.color="#9ed832"}
                    onMouseOut={({target})=>target.style.color="#d5d9f8"}/></Link>
            </div>

        </nav>
    </header>
}
