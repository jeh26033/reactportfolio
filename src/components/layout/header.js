import React from 'react';
import './CSS/header.css';
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
			<div className="gridHeader" >
				<header >
					<ul className="gridUl">

						<li className="navigation">
							<OldSchoolMenuLink 
								label="home" 
								activeOnlyWhenExact={true} 
								to="/">
							</OldSchoolMenuLink>
						</li>

						<li className="navigation">
							<OldSchoolMenuLink 
								label="about" 
								to="/about">
							</OldSchoolMenuLink>
						</li>

						<li className="navigation">
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


