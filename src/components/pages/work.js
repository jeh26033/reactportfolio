import React, { Component } from 'react';
import Expander from '../expander.js'

import Tabs from '../tabs/tabs.js'

export default function Work() {

	return (
		<React.Fragment >
		    <Tabs>
				<div label="Buddy-bot" position='1'>
				what
				</div>
				<div label="Example2" position='2'>
				lorem ipsum
				</div>
				<div label="another example" position='3'>
				Nothing to see here, this tab is <em>extinct</em>!
				</div>

    		</Tabs>
		</React.Fragment>
	);
}


