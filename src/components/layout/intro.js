import React from 'react';


function Intro() {
	return (
		<React.Fragment>
	        <div className="introGridA" style={gridItemA}>
	        	<h1 style={largeText} className= "largeText">{`.joseph {`}</h1>
	        	<p style={notAsLargeText}>web-developer;</p>
	        	<p style={evenSmallerText}>front-end-developer;<br/> web-designer; <br/>freelancer;<br/>hot-pocket-connoisseur;</p>
	        	<h1 style={largeText} className= "largeText">{`}`}</h1>
	        </div>
	      
        </React.Fragment>
	)
}


const gridItemA = {
	gridArea:'2/3/span 4/span 9',
	zIndex:'5',
	color:'#9E9E9E',
}

const largeText = {
	textShadow:'1px 10px 2px purple',
 	fontSize:'12em',
 	textAlign:'',
 	fontWeight:'bold',
}

const notAsLargeText = {
 	fontSize:'3em',
 	fontWeight:'bold',
 	color:'#fff'
}

const evenSmallerText = {
	
 	fontSize:'1em',
 	fontWeight:'bold',
 	color:'#fff'
}

export default Intro;