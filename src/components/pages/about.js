import React, { Component } from 'react';
import './CSS/about.css';

export default function About() {
	return (
		<React.Fragment>
			<div className="contactText squareOne" >
				<div>
					<div className="skills">
		    			<h2 className="hightlighted">Knowledge</h2>
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
				</div>
			</div>

			<div className="aboutText textStyle" >
				<p>I live by a simple rule:<div className=" Abouthightlighted"> less is more.</div> I keep that at the forefront of my work, always present. It permeates everything, from how I live my life, to how I design web pages. Why have 10 small things, when you can have 2 large things? Why make things complicated, when everything else in life is already complicated? I try to simplify things, and I find there's beauty in simplicity. </p>
				<p>If that's appealing to you, please contact me, lets have a conversation!</p>
            </div>
		</React.Fragment>
	);
}
