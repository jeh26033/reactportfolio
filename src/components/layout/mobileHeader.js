import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";

import About from '../pages/about.js';
import Work from '../pages/work.js';

import MobileIntro from './mobileIntro.js'
import MobileMenu from './mobileHeaderExpander.js'
	


export default function MobileHeader() {
	return (
		<Router>
			<div id="mobileMenu" className="gridHeaderMobile" style={gridHeader}>
				<header >
					<ul style={gridUl}>
						
						<li style={linkStyle} className="navigation">
							<OldSchoolMenuLink 
								label="home" 
								activeOnlyWhenExact={true} 
								to="/">
							</OldSchoolMenuLink>
						</li>

						<li style={linkStyle} className="navigation">
							<OldSchoolMenuLink 
								label="about" 
								to="/about">
							</OldSchoolMenuLink>
						</li>

						<li style={linkStyle} className="navigation">
							<OldSchoolMenuLink 
								label="work"
								to="/work">
							</OldSchoolMenuLink>
						</li>
					</ul>
				</header>
			</div>
				<Route exact path="/" render={props => (               
					<MobileIntro />
	              )} />
	            <Route path="/about" component={About} />
	            <Route path="/work" component={Work} />

		</Router>
	)
}
// Thanks https://reacttraining.com/react-router/web/example/custom-link
function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && " ."}
      <NavLink to={to}>{label}</NavLink>
    </div>
  );
}

const linkStyle = {
	color:'#fff',
	fontFamily:'sans-serif',
	fontSize:'1em',
	padding:'0px .7em'
}

const gridHeader = {
	width:'100%',
	borderTop:'1px solid white',
	color:'#fff',
	zIndex:'1000',
	backgroundColor:'#1b1e21'

}

const gridUl = {
	display:'inline-flex',
	listStyleType:'none',
	textAlign:'left',
	fontSize:'1.5em',
	paddingLeft:'0px',
}







