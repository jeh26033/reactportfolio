import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
	return (
		<div style={gridHeader}>
			<header >
				<ul style={gridUl}>
					<li><Link style={linkStyle} to="/">.home</Link></li>
					<li><Link style={linkStyle} to="/about">about</Link></li>
					<li><Link style={linkStyle} to="/work">work </Link></li>
				</ul>
			</header>
		</div>
	)
}


const linkStyle = {
	color:'#fff',
	textDecoration:'none',
	fontFamily:'sans-serif',
	fontSize:'1.45em',

	padding:'0px .5em'
}

const gridHeader = {
	gridArea:'10 / 1 / span 1 / span 20',
	borderTop:'1px solid white',
	color:'#fff',
	paddingLeft:'82px'
	
}

const gridUl = {
		display: 'inline-flex',
	listStyleType:'none',
	textAlign:'center',
	fontSize:'2em'
}

export default Header;