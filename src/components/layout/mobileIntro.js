import React from 'react';


function MobileIntro() {
	return (
		<React.Fragment>
	
			<div style={gridItemA} className="">
	     		<h1 className= "knockout largeText">.joseph </h1>
	     		
	     	</div>
	     	<div style={gridItemB}> 
	    	<h2 className=" knockout">web designer</h2>
	    	</div>
        </React.Fragment>
	)
}


const gridItemA = {
	gridArea:'1/3/ span 2 / span 7',
	backgroundColor:'#fff',
	zIndex:'100',
}


const gridItemB = {
	gridArea:'3/5/ span 1 / span 6',
	backgroundColor:'#fff',
	zIndex:'100',
	textAlign:'right',
	paddingTop:'10px',
	paddingRight:'4px',
}

export default MobileIntro;