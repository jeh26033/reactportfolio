import React from 'react';


export default function FloatingJ() {
	return (

	    <div style={jContainer} className="jContainer">
	    	<span className="knockout">.j</span>
	    </div>
	)
}


const jContainer = {
	zIndex:'5',
	gridArea:'20/1/span 1/span 1',
	backgroundColor:'#fff',
	fontSize:'3em',
	textAlign:'center',
	minWidth:'86px'
}


