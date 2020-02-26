import React, { Component } from 'react';
import '../App.css';

import PropTypes from 'prop-types';

export default class Expander extends Component {

	static propTypes = {
    	children: PropTypes.instanceOf(Array).isRequired,
  	}
	constructor(props) {
	    super(props);
	    this.state = {
		 	isBoxVisible1: false,
		   	isBoxVisible2: false, 
		   	isBoxVisible3: false,
	    }

    console.log(this.state);

  }

 	handleClick() {
	    this.setState(state => ({
     	 	isBoxVisible1: false,
		   	isBoxVisible2: false, 
		   	isBoxVisible3: false,
	    }));
	  }

	toggleBox = (id) => {
		if (id==0) {
			console.log('number 1 clicked')
			this.setState(state => ({
				isBoxVisible1: !state.isBoxVisible1,
				isBoxVisible2: false,
				isBoxVisible3: false,
			}));
		}

		else if(id==1) {
			console.log('number 2 clicked')
			this.setState(state => ({
				isBoxVisible2: !state.isBoxVisible2,
				isBoxVisible1: false,
				isBoxVisible3: false,
			}));
		}

		else if(id==2) {
			console.log('number 3 clicked')
			this.setState(state => ({
				isBoxVisible3: !state.isBoxVisible3,
				isBoxVisible2: false,
				isBoxVisible1: false,
			}));			
		}
	};


	render() {
		const { isBoxVisible1 } = this.state;
		const { isBoxVisible2 } = this.state;
		const { isBoxVisible3 } = this.state;

		let tab1;
		let tab2;
		let tab3;

		return (
			<React.Fragment>

			<div id="card1" style={card1} className={`cardButton ${isBoxVisible1? "activeContent" : ""}`} onClick={() => this.toggleBox(0)}> <div style={card}> <div style={cardHeading}><span>Buddy Bot</span></div></div></div>


				<div id="card2" style={card2} className={`cardButton ${isBoxVisible2? "activeContent" : ""}`}  onClick={() => this.toggleBox(1)}>
					<div style={card}>	
						<div style={cardHeading}><span>Grid Homepage</span></div>
					</div>
				</div>

				<div id="card3" style={card3} className={`cardButton ${isBoxVisible3? "activeContent" : ""}`}  onClick={() => this.toggleBox(2)}>
					<div style={card}>
						
						<div style={cardHeading}><span>Page Examples</span></div>
						
					</div>
				</div>

				<div style ={displayBox} className={`box ${isBoxVisible1? "activeExample" : ""}`}>
			    	<span>
			    		<a href="https://github.com/jeh26033/Buddy-Bot"> BuddyBot the Discord Robot</a> 
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
			    <div style ={displayBox} className={`box ${isBoxVisible2? "activeExample" : ""}`}>
			    	<p>I'm the box 2</p>
			    </div>
			    <div style ={displayBox} className={`box ${isBoxVisible3? "activeExample" : ""}`}>
			    	<p>I'm the box 3</p>
			    </div>


			</React.Fragment>
			
		);
	}
}


const card1ActiveContent = {}

const displayBox = {
	backgroundColor:'rgb(19, 47, 74)',
	gridArea:'1/13/span 9/ span 8',
	zIndex:'5',
	color:'#fff',
	padding:'3em',
}

const card = {
	backgroundColor:'#fff',
	position:'relative',
	transistion:'all .5s',

}

const cardHeading = {
	fontSize:'3em',
	position:'absolute',
	textShadow:'1px 1px 2px purple',
 	textAlign:'center',
 	fontWeight:'bold',
 	width:'100%',
 	color:'#ccc',
 	backgroundColor:'rgb(19, 47, 74)',

}

const card1 = {

	backgroundImage:'url(/discord-logo-image.jpg)',
	backgroundSize:'cover',
	backgroundRepeat:'no-repeat',
	gridArea:'2/3/span 4/ span 4',
	backgroundPositionX:'center',
	zIndex:'2',
}

const card2 = {
	backgroundImage:'url(/grid-icon.png)',
	backgroundSize:'cover',
	backgroundRepeat:'no-repeat',
	gridArea:'3/4/span 4/ span 4',
	zIndex:'3',
}

const card3 = {
	backgroundImage:'url(/htmlicon.png)',
	backgroundSize:'cover',
	backgroundRepeat:'no-repeat',
	gridArea:'4/5/span 4/ span 4',
	zIndex:'3',
}

const card4 = {
	backgroundImage:'url(/discord-logo-image.jpg)',
	backgroundSize:'cover',
	backgroundRepeat:'no-repeat',
	gridArea:'5/6/span 4/ span 4',
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
