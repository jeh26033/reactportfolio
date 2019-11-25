import React, { Component } from 'react';




export default class MobileMenu extends Component {

  constructor(props) {
    super(props);
    console.log('state',this)
    this.state = {
      isMenuOpen: ''

    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

	handleClickOutside(event) {
		let mobileMenu = document.getElementById('mobileMenu');
		let hamburger = document.getElementById('hamburger');
		console.log(this.state.isMenuOpen);

		//checks if I clicked outside the button. 
	    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {

    		// 
	    	
			// 
			// mobileMenu.classList.toggle('menuEmbiggen');

		 //click inside the button   
	    }else{
	    	console.log('You clicked inside of me!');
	    	mobileMenu.classList.toggle('menuEmbiggen');
	    	hamburger.classList.toggle('active')


	    }		
	}
	// componentDidMount(){
	// 	console.log('hello from the mobile menu expander')
	// 	let hamburgerClick = (e) =>{
	// 		console.log('wow')
	// 		e.currentTarget.classList.toggle('active');
	// 	}

	// 	let embiggen = (e) =>{
	// 		console.log('wow embiggen')
	// 		e.currentTarget.classList.toggle('menuEmbiggen');

	// 	}
	// 	let hamburger = document.getElementById('hamburger').addEventListener("click", hamburgerClick);
	// 	let mobileMenu = document.getElementById('mobileMenu').addEventListener("click", embiggen)
	// }
	

	render() {
		return (
			<React.Fragment>
				<div id="hamburger"  className="svgContainer">
				 	<svg ref={this.setWrapperRef} xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 200 200">
				        <g strokeWidth="6.5" strokeLinecap="round">
				          <path
				            d="M72 82.286h28.75"
				            fill="#009100"
				            fillRule="evenodd"
				            stroke="#fff"
				          />
				          <path
				            d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
				            fill="none"
				            stroke="#fff"
				          />
				          <path
				            d="M72 125.143h28.75"
				            fill="#009100"
				            fillRule="evenodd"
				            stroke="#fff"
				          />
				          <path
				            d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
				            fill="none"
				            stroke="#fff"
				          />
				          <path
				            d="M100.75 82.286h28.75"
				            fill="#009100"
				            fillRule="evenodd"
				            stroke="#fff"
				          />
				          <path
				            d="M100.75 125.143h28.75"
				            fill="#009100"
				            fillRule="evenodd"
				            stroke="#fff"
				          />
				        </g>
				      </svg>
				</div>
			</React.Fragment>
			
		);
	}
}
