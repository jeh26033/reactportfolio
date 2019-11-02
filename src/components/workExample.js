import React, { Component } from 'react';

export default class WorkExample extends React.Component {

	render() {
		// let {example1} = <div id="card1" style={card1} onClick={() => this.toggleBox(0)}> <div style={card}> <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" /> <div style={cardHeading}><span>Buddy Bot</span></div> </div> </div>;
		// let {example2} = <div id="card2" style={card2} onClick={() => this.toggleBox(1)}> <div style={card}> <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" /> <div style={cardHeading}><span>Buddy Bot</span></div> </div> </div>;
		// let {example3} = <div id="card3" style={card3} onClick={() => this.toggleBox(2)}> <div style={card}> <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" /> <div style={cardHeading}><span>Buddy Bot</span></div> </div> </div>;

		function newWorkExample(props) {
			return <div id="card1" style={props.style} onClick={() => this.toggleBox(0)}> <div style={card}> <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" /> <div style={cardHeading}><span>Buddy Bot</span></div> </div> </div>;
		}

		return (
			<React.Fragment>
				
			</React.Fragment>
		)
	}
}


const displayBox = {
	backgroundColor:'#fff',
	gridArea:'2/13/span 7/ span 7'
}

const card = {
	backgroundColor:'#fff',
	position:'relative',
}

const cardHeading = {
	fontSize:'3em',
	position:'absolute',
	textShadow:'1px 1px 2px purple',
 	textAlign:'center',
 	fontWeight:'bold',
 	top:'0%',
 	width:'100%',
 	color:'#ccc',
 	backgroundColor:'rgb(19, 47, 74)',

}

