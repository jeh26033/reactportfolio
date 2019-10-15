import React from 'react';


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