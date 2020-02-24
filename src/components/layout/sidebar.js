import React from 'react';
import './CSS/sidebar.css';

function Sidebar() {
	return (
	    <div id="gridItem2" className="sidebar">
	      <span className="sideBarText">.find-me</span>
	      <ul className="sideBarLinks">
	        <li className="sideBarLinksLi"><a href="https://www.linkedin.com/in/joseph-harskamp/">linkedIn</a></li>
	        <li className="sideBarLinksLi"><a href="mailto:josephharskampdealeron@gmail.com">email </a></li>
	        <li className="sideBarLinksLi"><a href="https://github.com/jeh26033"> github</a> </li>
	      </ul>
	    </div>
	)
}


export default Sidebar;