import React from 'react';
import './CSS/intro.css';


function Intro() {
    return (
    	<div className="intro">
	        <div className="introBG">

		    </div>
		    <div className="introContent">
		        	<h1 className= "largeText"><span className ="introRule">.joseph </span>{` {`}</h1>
		        	<div className="introSubtext">
			        	<p className="notAsLargeText"><span className="introRule">web-developer:</span> 100%;</p>
			        	<p className="notAsLargeText"><span className="introRule">front-end-developer:</span> right;<br/><span className="introRule"> web-designer:</span> true; <br/><span className="introRule">freelancer:</span> true;<br/><span className="introRule">hot-pocket-connoisseur:</span> absolute;</p>
		        	</div>
		        	<h1 className= "largeText">{`}`}</h1>
		        </div>
		 </div>
    )
}



export default Intro;