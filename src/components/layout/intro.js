import React from 'react';


function Intro() {
	return (
		<React.Fragment>
        <div style={gridItemA}>
          <h1 style={largeText} className= "knockout">.joseph</h1>
        </div>
        <div style={gridItemB}>
          <h1 style={gridItemc}>Web Designer</h1>
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
	paddingTop:'3em',

}

const largeText = {
	fontSize:'15em',
	position:'absolute',
	top:'6%',
 	left:'10%',
  	
}
export default Intro;