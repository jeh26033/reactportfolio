import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
	return (
		<React.Fragment>
        <div style={gridItemA}>
          <h1 className= "knockout">.joseph</h1>
        </div>
        <div style={gridItemB}>
          <h1></h1>
        </div>
        </React.Fragment>
	)
}


const knockout = {
  background:'url(stars.jpg) -10px',
  color:'#000',
  webkitTextFillColor:'transparent',
  webkitBackgroundClip:'text',
  fontWeight:'bold',
  fontFamily:'arial, helvetica',
  backgroundColor:'#000',
  position:'absolute',
  left:'10%',
  top:'7%',
  fontSize:'15em'
}

const gridItemA = {
  gridArea:'2 /2 / span 2 / span 10',
  backgroundColor:'#fff',
  zIndex:'100'

}

const gridItemB = {
  gridArea:'3 /3 / span 2 / span 10',
  backgroundColor:'#000'
}



export default Intro;