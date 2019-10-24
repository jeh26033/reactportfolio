import React from 'react';


function Intro() {
	return (
		<React.Fragment>
	        <div className="introGridA" style={gridItemA}>
	          <h1 style={largeText} className= "largeText">.joseph</h1>
	         
	        </div>
	         <div className="introGridB" style={gridItemB}>
		        <h2 style={notAsLargeText} className= "">.webDeveloper</h2>
		       
	         </div>

       		<div className="introGridC" style={gridItemC}>
	           <p style={evenSmallerText} className="" >front end developer / web design / freelance / hot pocket connoisseur</p>         
	        </div>
        </React.Fragment>
	)
}


const gridItemA = {
	gridArea:'2/3/span 4/span 9',
	backgroundColor:'#fff',
}

const gridItemB = {
	paddingRight:'1em',
	paddingTop:'2em',
	backgroundColor:'#000',
    gridArea:'5/5/span 2/span 12',
	color:'#fff',
	fontWeight:'bold',
	textAlign:'right',
}

const gridItemC = {
	backgroundColor:'#fff',
	gridArea:'7/4/span 1/span 10',
	color:'#000',
	fontWeight:'bold',
	padding:'.5em'
}

const largeText = {

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
 	color:'#000'
}

export default Intro;