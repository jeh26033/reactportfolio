import React from 'react';
import './CSS/sidebar.css';

function Sidebar() {
	return (
	    <div id="gridItem2" className="sidebar mobile">
	      <span className="sideBarText">.find-me</span>
	      <ul className="sideBarLinks">
	        <li className="sideBarLinksLi">
	        	<a href="https://www.linkedin.com/in/joseph-harskamp/">
	        		<img className="icon-Linkedin icon" src="/linkedinicon.png"/>
	        	</a>
	        </li>
	        <li className="sideBarLinksLi">
	        	<a href="mailto:josephharskampdealeron@gmail.com">
	        		<img className="icon-Linkedin icon" src="/emailicon.png"/>
	        	</a>
	        </li>
	        <li className="sideBarLinksLi">
	        	<a href="https://github.com/jeh26033">
	        		<img className="icon-Github icon" src="/githubicon.png"/>
	        	</a>
	        </li>
	      </ul>
	    </div>
	)
}


export default Sidebar;