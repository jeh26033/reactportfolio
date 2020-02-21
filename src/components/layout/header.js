import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import About from '../pages/about.js';
import Work from '../pages/work.js';
import Intro from './intro.js'

export default function Header() {
	return (
		<Router>
			<div className="gridHeader" style={gridHeader}>
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
						<Intro />
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
	fontSize:'1.45em',
	padding:'0px .5em'
}

const gridHeader = {
	zIndex:'5',
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






