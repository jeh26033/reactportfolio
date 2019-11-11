import React from 'react';
import Gyser from '../gyser.js';

function Intro() {
	return (
		<Gyser></Gyser>
	)
}


const intro = {
	gridArea:'1/2/span 9/span 11',
	zIndex:'5',
	padding:'3em',
	color:'#9E9E9E',
	
}

const largeText = {
	textShadow:'1px 10px 2px purple',
 	fontSize:'12em',
 	textAlign:'',
 	fontWeight:'bold',
}

const notAsLargeText = {
	textShadow:'1px 4px 2px purple',
 	fontSize:'3em',
 	fontWeight:'bold',
 	color:'#9E9E9E'
}

const evenSmallerText = {
	
 	fontSize:'1em',
 	fontWeight:'bold',
 	color:'#fff'
}

export default Intro;