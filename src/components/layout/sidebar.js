import React from 'react';

function Sidebar() {
	return (

	    <div style={sideBar} id="gridItem2" className="sidebar">
	      <span style={sideBarText} className="sideBarText">.find-me</span>
	      <ul style={sideBarLinks}className="sideBarLinks">
	        <li style={sideBarLinksLi}>linkedIn </li>
	        <li style={sideBarLinksLi}>email </li>
	        <li style={sideBarLinksLi}>github </li>
	      </ul>
	    </div>
	)
}


const sideBarText = {
	transform:'rotate(90deg)',
	color:'#fff',
	transformOrigin:'20% 40%',
	fontWeight:'bold',
	fontSize:'3em',
	position:'absolute',
	paddingTop:'.5em',
	width:'4em'
}

const sideBarLinks = {
	position:'absolute',
	listStyleType:'none',
	display:'inline-flex',
	transform:'rotate(90deg)',
	color:'#fff',
	transformOrigin:'20% 40%',
	top:'22%',
	width:'5em',
	fontWeight:'bold',
	fontSize:'1.7em',
	paddingTop:'.8em'
}

const sideBarLinksLi = {
	display: 'inline-flex',
	padding:'0px .5em'
}

const sideBar = {
	gridArea: '1 / 1 / span 10 / span 1',
	borderRight: '1px solid white',
	position: 'relative'
}


export default Sidebar;