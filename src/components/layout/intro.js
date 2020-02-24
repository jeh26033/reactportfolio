import React from 'react';
import './CSS/intro.css';


function Intro() {
	return (
		<div className="intro">
        	<h1 className= "largeText"><span className ="introRule">.joseph </span>{` {`}</h1>
        	<div className="introSubtext">
	        	<p className="notAsLargeText"><span className="introRule">web-developer:</span> 100%;</p>
	        	<p className="notAsLargeText"><span className="introRule">front-end-developer:</span> bold;<br/><span className="introRule"> web-designer:</span> true; <br/><span className="introRule">freelancer:</span> bolder;<br/><span className="introRule">hot-pocket-connoisseur:</span> absolute;</p>
        	</div>
        	<h1 className= "largeText">{`}`}</h1>
	    </div>
	)
}



export default Intro;