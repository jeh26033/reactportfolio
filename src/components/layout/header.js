import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (

		<header >
			<ul>
				<li><Link style={linkStyle} to="/">Home</Link></li>
				<li><Link style={linkStyle} to="/about">About</Link></li>
				<li><Link style={linkStyle} to="/work"> Work </Link></li>
			</ul>
		</header>
	)
}


const linkStyle = {
	color:'#fff',
	textDecoration:'none',
	fontFamily:'sans-serif',
	fontSize: '3em'

}

export default Header;