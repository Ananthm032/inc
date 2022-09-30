import React from 'react';
import NavLink from "../Navbar/NavLin";
import './Nav.css';
import {navLinks} from "../Navbar/Navlink"
import Img7 from "../../Images/image 5.png"
const Nav = () => {
	return (
		
		<nav className='nav'>
			<div className='div'>
				<div className='div1'>
			<img src={Img7} width="50px" height="50px"></img></div>
			<div className='div2'>
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
			</div>
			</div>
		</nav>
		
	);
};

export default Nav;