import React from 'react';


function Intro() {
	return (
		<React.Fragment>
	        <div className="introGridA" style={gridItemA}>
	          <h1 style={largeText} className= "knockout largeText">.joseph</h1>
	        </div>
	        <div className="introGridB" style={gridItemB}>
	          <h1 className="introSubTitle hidden-sm" style={gridItemc}>Web Designer</h1>
	        </div>

        </React.Fragment>
	)
}


const gridItemA = {
	gridArea:'2 /2 / span 2 / span 10',
	backgroundColor:'#fff',
	zIndex:'100'
}

const gridItemB = {
	gridArea:'3 /3 / span 2 / span 10',
	backgroundColor:'#000',
	color:'#fff',
	textAlign:'right'
}

const gridItemc = {


}

const largeText = {
	fontSize:'15em',
	position:'absolute',
	top:'6%',
 	left:'10%',
 	fontSize:'15em'
  	
}
export default Intro;