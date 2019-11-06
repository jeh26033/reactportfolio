import React, { Component } from 'react';
import Tabs from '../tabs/tabs.js'

export default function Work() {
	return (
		<React.Fragment >
		
		   <Tabs>
				<div label="Example1" className="example1" position='1'>
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


