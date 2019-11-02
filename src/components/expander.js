import React, { Component, useState } from 'react';
import '../App.css';
//import WorkExample from './workExample.js'

export default class Expander extends Component {
  constructor(props){
  super(props)
//   this.state = {
// tabs:[ {tab1: {active:true} },
// 	 		{tab2: {active:false} },
// 	 		{tab3: {active:false} },
//    			]
// 	}
//   this.tabToggle = this.tabToggle.bind(this)
// }
    this.state = { 
    	isBoxVisible1:false,
    	isBoxVisible2:false,
    	isBoxVisible3:false,
   	}}

	// we gotta make this better
	toggleBox = (id) => {
		if (id==0) {
			console.log('number 1 clicked')
			this.setState(state => ({
				isBoxVisible1: !state.isBoxVisible1,
				isBoxVisible2: false,
				isBoxVisible3: false,
			}));
			console.log(this.state)
		}
		else if(id==1) {
			console.log('number 2 clicked')
			this.setState(state => ({
				isBoxVisible2: !state.isBoxVisible2,
				isBoxVisible1: false,
				isBoxVisible3: false,
			})); 
			console.log(this.state)
		}		
		else if(id==2) {
			console.log('number 3 clicked')
			this.setState(state => ({
				isBoxVisible3: !state.isBoxVisible3,
				isBoxVisible2: false,
				isBoxVisible1: false,
			}));
			console.log(this.state)
		}
	};


tabToggle(tabIndex) {
	console.log(tabIndex)
  let tabs = this.state.tabs

  tabs.map((tab, index) => {
    if (index !== tabIndex) tab.active = false
  })
  this.setState( tabs )
}
	render() {
		console.log(this.state)
		const {tab1}= this.state;
		const {tab2}= this.state;
		const {tab3}= this.state;
		const {tab4}= this.state;

		const { isBoxVisible1 } = this.state;
		const { isBoxVisible2 } = this.state;
		const { isBoxVisible3 } = this.state;


		let {example1} = <div id="card1" style={position1} onClick={() => this.toggleBox(0)}> <div style={card}> <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" /> <div style={cardHeading}><span>Buddy Bot</span></div> </div> </div>;
		let {example2} = <div id="card2" style={position2} onClick={() => this.toggleBox(1)}> <div style={card}> <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" /> <div style={cardHeading}><span>Buddy Bot</span></div> </div> </div>;
		let {example3} = <div id="card3" style={position3} onClick={() => this.toggleBox(2)}> <div style={card}> <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" /> <div style={cardHeading}><span>Buddy Bot</span></div> </div> </div>;

		return (
			
			<React.Fragment>
 <div id="card1" style={position1} onClick={() => this.toggleBox(0)}> <div style={card}> <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" /> <div style={cardHeading}><span>Buddy Bot</span></div> </div> </div>
<div id="card2" style={position2} onClick={() => this.toggleBox(1)}> <div style={card}> <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" /> <div style={cardHeading}><span>Buddy Bot</span></div> </div> </div>
 <div id="card3" style={position3} onClick={() => this.toggleBox(2)}> <div style={card}> <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" /> <div style={cardHeading}><span>Buddy Bot</span></div> </div> </div>
				<div style ={displayBox} className={`box ${isBoxVisible1? "" : "hidden"}`}>
			    	<span><a href="https://github.com/jeh26033/Buddy-Bot"> BuddyBot the Discord Robot</a> 
				       	<p>What started as a joke project with some Discord friends, Buddy soon turned into much more for me. Buddy is the culmination of about 8 months of sporadic work and learning, and in the end, could:
				       	</p>
				       	<ul>
				       		<li>Keep track of 'Starred' messages </li>
				       		<li>Tabulate user scores based on a voting system</li>
				       		<li>Auto Moderate discussion</li>
				       		<li>Access Dota API's to gather statistics from our games</li>
				       		<li>Parse wiki's for Esports information</li>
				       		<li>Assign roles based on reactions to messages</li>
				       	</ul></span>
			    </div>
			    <div style ={displayBox} className={`box ${isBoxVisible2? "" : "hidden"}`}>
			    	<p>I'm the box 2</p>
			    </div>
			    <div style ={displayBox} className={`box ${isBoxVisible3? "" : "hidden"}`}>
			    	<p>I'm the box 3</p>
			    </div>

			</React.Fragment>
			
		);
	}
}



const position1 = {
	gridArea:'2/4/span 2/ span 3',
}

const position2 = {
	gridArea:'3/5/span 2/ span 3',
}

const position3 = {
	gridArea:'4/6/span 2/ span 3',
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

const styleID1 = {
	gridArea:'2/4/span 2/ span 3',
}

const card2 = {
	gridArea:'3/5/span 2/ span 3',
}

const card3 = {
	gridArea:'4/6/span 2/ span 3',
}

const card4 = {
	gridArea:'5/7/span 2/ span 3',
}

const card1Content = {
	
	gridArea:'2/4/span 2/ span 2',
}

const card2Content = {
	display:'none',
	gridArea:'3/5/span 2/ span 2',
}

const card3Content = {
	display:'none',
	gridArea:'4/6/span 2/ span 2',
}

const card4Content = {

	gridArea:'5/7/span 2/ span 2',
}


