import React from 'react';


function Intro() {
	return (
		<React.Fragment>
	        <div className="introGridA" style={gridItemA}>
	          <h1 style={largeText} className= "largeText">.joseph</h1>
	          <h2 style={notAsLargeText} className= "">web Developer</h2>
	         <p style={evenSmallerText} className="" >front end developer / web design / freelancer / hot pocket connoisseur</p>
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
 	fontSize:'13em',
 	textAlign:'',
 	fontWeight:'bold',
}

const notAsLargeText = {
	textAlign:'right',
 	fontSize:'5em',
 	fontWeight:'bold',
 	color:'#fff'
}

const evenSmallerText = {
	textAlign:'left',
 	fontSize:'2em',
 	fontWeight:'bold',
 	color:'#fff'
}

export default Intro;