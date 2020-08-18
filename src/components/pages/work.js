import React, { Component } from 'react';
import '../tabs/tabstyle.css'
 
import PropTypes from 'prop-types';
import Expand from '../expand.js';


export default class Expander extends Component {

	static propTypes = {
    	children: PropTypes.instanceOf(Array).isRequired,
  	}
	constructor(props) {
	    super(props);
	    this.state = {
		 	isBoxVisible1: true,
		   	isBoxVisible2: false, 
		   	isBoxVisible3: false,
		   	isBoxVisible4: false
	    }

   	console.log(this.state);

  }

 // 	handleClick = () => {
 // 		console.log('setting states to false');
	//     this.setState(state => ({
 //     	 	isBoxVisible1: false,
	// 	   	isBoxVisible2: false, 
	// 	   	isBoxVisible3: false,
	//     }));
	// }

	
	//this whole function sucks.
	toggleBox = (id) => {
		if (id==0) {
			console.log('number 1 clicked')
			this.setState(state => ({
				isBoxVisible1: !state.isBoxVisible1,
				isBoxVisible2: false,
				isBoxVisible3: false,
				isBoxVisible4: false,
			}));
		}

		else if(id==1) {
			console.log('number 2 clicked')
			this.setState(state => ({
				isBoxVisible2: !state.isBoxVisible2,
				isBoxVisible1: false,
				isBoxVisible3: false,
				isBoxVisible4: false,
			}));
		}

		else if(id==2) {
			console.log('number 3 clicked')
			this.setState(state => ({
				isBoxVisible3: !state.isBoxVisible3,
				isBoxVisible2: false,
				isBoxVisible1: false,
				isBoxVisible4: false,
			}));			
		}
		else if(id==3) {
			console.log('number 3 clicked')
			this.setState(state => ({
				isBoxVisible4: !state.isBoxVisible4,
				isBoxVisible2: false,
				isBoxVisible1: false,
				isBoxVisible3: false,
			}));			
		}		
	};


	render() {
		const { isBoxVisible1 } = this.state;
		const { isBoxVisible2 } = this.state;
		const { isBoxVisible3 } = this.state;
		const { isBoxVisible4 } = this.state;
		return (
			<React.Fragment >
			

				<div id="card1" className={`hightlighted ${isBoxVisible1? "activeContent" : ""}`} onClick={() => this.toggleBox(0)}>
					<div className="cardButton">
						<div className="cardHeading">
							<span>Buddy Bot</span>
						</div>
					</div>
				</div>


				<div id="card2" className={`hightlighted ${isBoxVisible2? "activeContent" : ""}`}  onClick={() => this.toggleBox(1)}>
					<div className="cardButton">	
						<div className="cardHeading"><span>Mtn-Side Pugs</span></div>
					</div>
				</div>

				<div id="card3" className={`hightlighted ${isBoxVisible3? "activeContent" : ""}`}  onClick={() => this.toggleBox(2)}>
					<div className="cardButton">
						
						<div className="cardHeading"><span>DealerOn Pages</span></div>
						
					</div>
				</div>
				<div id="card4" className={`hightlighted ${isBoxVisible4? "activeContent" : ""}`}  onClick={() => this.toggleBox(3)}>
					<div className="cardButton">
						
						<div className="cardHeading"><span>Grid Homepage</span></div>
						
					</div>
				</div>


				<div  className={`box ${isBoxVisible1? "activeExample" : ""}`}>
			    	<span>
			    		<h3><a className="hightlighted" href="https://github.com/jeh26033/Buddy-Bot"> BuddyBot the Discord Robot</a></h3> 
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
				       	<img src="buddyBotBackground.png"/>
				       </span>
			    </div>
			    <div  className={`box ${isBoxVisible2? "activeExample" : ""}`}>
			    	<div  label="Pug Site" position='2'>
					<span>
						<h3><a className="hightlighted" href="https://glacial-basin-65532.herokuapp.com/"> Prototype Ruby on Rails site for local pug breeder</a></h3>
						<p>This was meant to be a site for a local dog breeder that I had previously gotten my dog from. While we didn't end up moving forward with the site in the end, it was a great learning experience about handling clients, using Ruby on Rails, and putting together a cohesive design. This was one of the first full sites had I built using a framework, and I think the progress from then to know is evident.	</p>
						<img src="MSPscreenshot.png"/>
					</span>
				</div>
				
				
			    </div>
			    <div  className={`box ${isBoxVisible3? "activeExample" : ""}`}>
			    	<div  label="Pages" position='3'>
						<h3 >A collection of pages created at DealerOn</h3>
						<ul>
							<li>
								<a className="hightlighted" target="_blank" href="https://www.sheehylexusofannapolis.com/yakima-accessories.html">
								Sheehy Lexus of Annapolis - Yakima yakima-accessories</a>
								<div>One of the earlier pages, made use of a new(for me) type of carousel for the images.</div>
								<img src="yakima.png"/>
							</li> 
							<li>
								<a className="hightlighted" target="_blank" href="https://www.sheehylexusofannapolis.com/structure-my-deal.html"> 
								Sheehy Lexus of Annapolis - Structure My DealerOn</a>
							</li> 
							<li>
								<a className="hightlighted" target="_blank" href="https://www.infinitihoffman.com/QX50-Competitive-Compare.html">INFINIT of Hoffman Estates - QX50 Competitive Comparison</a>
							</li>
						</ul>
						
					</div>
			    </div>
			    <div  className={`box ${isBoxVisible4? "activeExample" : ""}`}>
			    	<div  label="Pages" position='4'>
						<h3>The Grid Homepage</h3>
						<ul>
							<li>
								<a className="hightlighted" target="_blank" href="https://dealer15807.dealeron.com/"> Grid Homepage Prototype</a>:
								<p>Made as a mockup homepage, this served as my stepping stone into the world of Grid!</p>
								<p>This was created in a team challenge where we tried to innovate on our standard homepage designs. This was my attempt to come up with something new, something we didn't have before. I also used it as an opportunity to learn Grid, which prior to this, I hadn't used. Turns out, it can be pretty good!</p>
								<img src="gridhomepageExample.png"/>
							</li>
							
						</ul>
						
					</div>
			    </div>


			</React.Fragment>
			
		);
	}
}





