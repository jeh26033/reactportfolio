import React, { Component } from 'react';
export default class MobileMenu extends Component {

	//rebuild this to not use Jquery
	componentDidMount(){
		console.log('hello from the mobile menu expander')
		let hamburgerClick = (e) =>{
			console.log('wow')
			e.currentTarget.classList.toggle('active');
		}
		let hamburger = document.getElementById('hamburger').addEventListener("click", hamburgerClick);
	}
	

	render() {
		return (
			<React.Fragment>
				<div id="hamburger" className="svgContainer">
				 	<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 200 200">
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
