import React, { Component } from 'react';

export default function About() {
	return (
		<React.Fragment>
			<div style={knockoutSqaure}>
				<div  className="knockout">
					<h3 style={knockout}>find me here</h3>
					<hr />
					<h4 style={knockout}>phone</h4>
					<h4 style={knockout}>email</h4>
					<h4 style={knockout}>twitter</h4>

				</div>
			</div>
			<div style= {textStyle}>
				
				<p>I live by a simple rule:<div style={knockout} className="knockout"> less is more.</div> I keep that at the forefront of my work, always present. It permeates everything, from how I live my life, to how I design web pages. Why have 10 small things, when you can have 2 large things? Why make things complicated, when everything else in life is already complicated? I try to simplify things, and I find there's beauty in simplicity. </p>
				<p>If that's appealing to you, please contact me, lets have a conversation!</p>
            </div>
            <div style={squareOne}></div>

		</React.Fragment>
	);
}

const textStyle = {
	gridArea:'2 / 13 / span 7 / span 6',
	color:'#fff',
	backgroundColor:'#000',
	zIndex:'100',
	padding:'2em',
	fontSize:'1.5em',
}
const squareOne = {
	gridArea:'2/3/ span 4/ span 5',
	backgroundColor:'#fff',
	zIndex:'1'
}

const knockout = {
	fontSize:'3em',
}

const knockoutSqaure = {
	gridArea:'2/3/span 4/ span 4',
	zIndex:'100',

}