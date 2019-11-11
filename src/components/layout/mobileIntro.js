import React from 'react';


function MobileIntro() {
	return (
		<React.Fragment>
	
			<div style={intro} className={"intro"}>
        	<h1 style={largeText} className= "largeText">{`.joseph {`}</h1>
        	<div style={notAsLargeText} className="introSubtext">
        	<p>web-developer;</p>
        	<p style={evenSmallerText}>front-end-developer;<br/> web-designer; <br/>freelancer;<br/>hot-pocket-connoisseur;</p>
        	</div>
        	

        	<h1 style={largeText} className= "largeText">{`}`}</h1>
	    </div>
        </React.Fragment>
	)
}

const intro = {

	zIndex:'5',
	paddingLeft:'1em',
	color:'#9E9E9E',
	
}

const largeText = {
	textShadow:'1px 3px 2px purple',
 	fontSize:'8em',
 	textAlign:'',
 	fontWeight:'bold',
}

const notAsLargeText = {
	textShadow:'1px 3px 2px purple',
 	fontSize:'2em',
 	fontWeight:'bold',
 	color:'#9E9E9E'
}

const evenSmallerText = {
	
 	fontSize:'1em',
 	fontWeight:'bold',
 	color:'#9E9E9E'
}
export default MobileIntro;