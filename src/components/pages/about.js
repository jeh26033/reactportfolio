import React, { Component } from 'react';

export default function About() {
	return (
		<React.Fragment>
		<div className="contactText" style={squareOne}>
			<div>
				<div style={largeText} className="">
					<h4 style={knockout}>phone</h4>
					<h4 style={knockout}>email</h4>
					<h4 style={knockout}>twitter</h4>

				</div>
			</div>
			</div>

			<div className="aboutText" style= {textStyle}>
				<p>I live by a simple rule:<div style={largeText}> less is more.</div> I keep that at the forefront of my work, always present. It permeates everything, from how I live my life, to how I design web pages. Why have 10 small things, when you can have 2 large things? Why make things complicated, when everything else in life is already complicated? I try to simplify things, and I find there's beauty in simplicity. </p>
				<p>If that's appealing to you, please contact me, lets have a conversation!</p>
            </div>
		</React.Fragment>
	);
}

const textStyle = {
	gridArea:'1 / 13 / span 9 / span 8',
	color:'#fff',
	backgroundColor:'rgb(19, 47, 74)',
	zIndex:'100',
	padding:'2em',
	fontSize:'1.5em',
}

const squareOne = {
	gridArea:'2/3/ span 4/ span 5',

	zIndex:'1'
}

const knockout = {
	fontSize:'3em',
	lineHeight:'1',
}


const largeText = {
	color:'#9E9E9E',
	textShadow:'1px 6px 2px purple',
 	fontSize:'3em',
 	textAlign:'',
 	fontWeight:'bold',
}
