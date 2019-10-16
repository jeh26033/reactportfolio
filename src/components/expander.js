import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';

import Expand from './expand.js'


export default class Expander extends Component {
	// constructor(props){
	// 	super(props)
	// 	this.state = {isClicked:false};

	//     // This binding is necessary to make `this` work in the callback
	//     this.handleClick = this.handleClick.bind(this);
	// }

	// handleClick() {
 //    	this.setState(state => ({
 //    		isClicked : this.state.isClicked=true
 //    	}));
 //    	console.log(this.state.isClicked)

 //  	}
	
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

		//close card when click on cross
		$Card.find('.js-collapser').click(function() {

		  let $thisCard = $(this).closest('.card');

		  $thisCard.removeClass('is-expanded').addClass('is-collapsed');
		  $Card.not($thisCard).removeClass('is-inactive');

		});
	}
	

	render() {
		return (
			<React.Fragment>
				<div style={presenter} className="wrapper">

				  <div className="cards">

				    <div className=" card is-collapsed ">
				      <div className="cardInner  js-expander">
				        <span>Card</span>
				        <i className="fa fa-folder-o"></i>
				      </div>
				      <div className="cardExpander">
				        <i className="fa fa-close  js-collapser"></i>
				        Expander
				      </div>
				    </div>

				    <div className=" card is-collapsed ">
				      <div className="cardInner  js-expander">
				        <span>Card</span>
				        <i className="fa fa-folder-o"></i>
				      </div>
				      <div className="cardExpander">
				        <i className="fa fa-close  js-collapser"></i>
				        Expander
				      </div>
				    </div>

				    <div className=" card  is-collapsed ">
				      <div className="cardInner  js-expander">
				        <span>Card</span>
				        <i className="fa fa-folder-o"></i>
				      </div>
				      <div className="cardExpander">
				        <i className="fa fa-close  js-collapser"></i>
				        Expander
				      </div>
				    </div>

				    <div className=" card  is-collapsed ">
				      <div className="cardInner  js-expander">
				        <span>Card</span>
				        <i className="fa fa-folder-o"></i>
				      </div>
				      <div className="cardExpander">
				        <i className="fa fa-close  js-collapser"></i>
				        Expander
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
	gridArea:'2/10/span 6/ span 10',
	backgroundColor:"#ccc",
}


