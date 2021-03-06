import React, { Component } from 'react';
import Tabs from '../tabs/tabs.js'
import { CSSTransitionGroup } from 'react-transition-group' // ES6

export default function Work() {
	return (
		<React.Fragment >

		   <Tabs>

				<div label="BuddyBot" position='1'>
					<span>
			    		<h3><a className="hightlighted" href="https://github.com/jeh26033/Buddy-Bot"> BuddyBot the Discord Robot</a> </h3>
				       	<p>What started as a joke project with some Discord friends, Buddy soon turned into much more for me. Buddy is the culmination of about 8 months of sporadic work and learning, and in the end, could:
				       	</p>
				       	<ul>
				       		<li>Keep track of 'Starred' messages </li>
				       		<li>Tabulate user scores based on a voting system</li>
				       		<li>Auto Moderate discussion</li>
				       		<li>Access Dota API's to gather statistics from our games</li>
				       		<li>Parse wiki's for Esports information</li>
				       		<li>Assign roles based on reactions to messages</li>
				       	</ul>
				    </span>
				</div>

				<div  label="Pug Site" position='2'>
					<span>
						<h3><a className="hightlighted" href="https://glacial-basin-65532.herokuapp.com/"> Prototype Ruby on Rails site for local pug breeder</a></h3>
						<p>This was meant to be a site for a local dog breeder that I knew. While we didn't end up moving forward with the site in the end, it was a great learning experience about handling clients, using rails, and putting together a cohesive design. This was one of the first full sites had I built using a framework, and I think the progress from then to know is evident. </p>
					</span>
				</div>
				
				<div  label="Pages" position='3'>
					<h3 className="hightlighted">A collection of pages created at DealerOn</h3>
					<ul>
						<li>
							<a href="https://dealer15807.dealeron.com/"> Grid Homepage Prototype</a>
						</li>
						<li>
							<a href="https://www.sheehylexusofannapolis.com/yakima-accessories.html">
							Sheehy Lexus of Annapolis - Yakima yakima-accessories</a>
						</li> 
						<li>
							<a href="https://www.sheehylexusofannapolis.com/structure-my-deal.html"> 
							Sheehy Lexus of Annapolis - Structure My DealerOn</a>
						</li> 
						<li>
							<a href="https://www.infinitihoffman.com/QX50-Competitive-Compare.html">INFINIT of Hoffman Estates - QX50 Competitive Comparison</a>
						</li>
					</ul>
				</div>
    		</Tabs> 


    		<div className="skills">
    			<h3>Knowledge</h3>
    			<ul>
	    			<li>HTML</li>
	    			<li>CSS</li>
	    			<li>Node</li>
	    			<li>React</li>
	    			<li>Bootstrap</li>
	    			<li>GIT</li>
	    			<li>Jira</li>
	    			<li>JQuery</li>
	    			<li>JavaScript</li>
	    		</ul>

    		</div>
		</React.Fragment>
	);

}


