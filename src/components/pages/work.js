import React, { Component } from 'react';
import Expander from '../expander.js'
export default function Work() {
	return (

		<React.Fragment>
			<Expander />
			
		</React.Fragment>
	);
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


