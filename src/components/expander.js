import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';

import Expand from './expand.js'


export default class Expander extends Component {

	//rebuild this to not use Jquery
	componentDidMount(){
		console.log('hello')
		let $Card = $('.card');
		//open and close card when clicked on card
		$Card.find('.js-expander').click(function() {
		  let $thisCard = $(this).closest('.card');
		  if ($thisCard.hasClass('is-collapsed')) {
		    $Card.not($thisCard).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
		    $thisCard.removeClass('is-collapsed').addClass('is-expanded');
		    
		    if ($Card.not($thisCard).hasClass('is-inactive')) {
		      //do nothing
		    } else {
		      $Card.not($thisCard).addClass('is-inactive');
		    }

		  } else {
		    $thisCard.removeClass('is-expanded').addClass('is-collapsed');
		    $Card.not($thisCard).removeClass('is-inactive');
		  }
		});
		
	}
	

	render() {
		return (
			<React.Fragment>
				<div style={presenter} className="wrapper">
				  <div className="cards">
				    <div className="card is-collapsed ">
				      <div className="cardInner  js-expander">
				      <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" />
				        <div>Buddy<br/> Bot</div>
				      </div>
				      <div className="cardExpander">
				     <h3> <a href="https://github.com/jeh26033/Buddy-Bot"> BuddyBot the Discord Robot</a> </h3>
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
				       	<div></div>
					  </div>
				    </div>

				    <div className=" card is-collapsed ">
				      <div className="cardInner  js-expander">
				      <img className="img-fluid exampleImg" src={"/pug.jpg"} alt="pug picture" />
				        <div>Mountainside<br/> Pugs</div>
				      </div>
				      <div className="cardExpander">
				        <i className="fa fa-close  js-collapser"></i>
				        lorem ipsum
				      </div>
				    </div>
				    <div className=" card  is-collapsed ">
				      <div className="cardInner  js-expander">
				       <img className="img-fluid exampleImg" src={"/grid-icon.png"} alt="Buddy Bot logo" />
				        <div>Grid<br/> Homepage</div>
				      </div>
				      <div className="cardExpander">
				        <i className="fa fa-close  js-collapser"></i>
				        lorem ipsum
				      </div>
				    </div>
				    <div className=" card  is-collapsed ">
				      <div className="cardInner js-expander">
				      <img className="img-fluid exampleImg" src={"/htmlicon.png"} alt="Buddy Bot logo" />
				        <div>Page<br/> Examples</div>
				      </div>
				      <div className="cardExpander">
				        <i className="fa fa-close  js-collapser"></i>
				        lorem ipsum
				      </div>
				    </div>
				  </div>

				</div>
			</React.Fragment>
			
		);
	}
}
const workSlides = {
	gridArea:'2/3/ span 4/ span 5',
	border:'1px solid white',
	zIndex:'1',
	position:'relative'

}

const work = {
	width:'300px',
	backgroundColor:'#ccc',
	height:'300px',
	border:'1px solid black',
	position:'absolute'
}

const presenter = {
	gridArea:'2/4/span 2/ span 13',
	
}


