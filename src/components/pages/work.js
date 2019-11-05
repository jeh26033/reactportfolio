import React, { Component } from 'react';
import Expander from '../expander.js'
import Tabs from '../tabs/tabs.js'//will need to work to make this better, once I get better

export default function Work() {

	return (


		<React.Fragment >
		{/*<Expander />*/}
		   <Tabs>
				<div label="Example1" position='1'>
				what in the world
				</div>
				<div  label="Example2" position='2'>
				lorem ipsum
				</div>
				<div  label="Example3" position='3'>
				Nothing to see here, this tab is!
				</div>
    		</Tabs> 
		</React.Fragment>
	);

}


