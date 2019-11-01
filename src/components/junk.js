<div style={presenter} className="">
				  <div style={card} className="">

				    <div style={card1} className=" ">
				   
				      <img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" />
				      <h4>Buddy Bot <br /> Discord Robot. <br /> Built using JavaScript</h4>
				      
				
				    
				     
				       
				
				    </div>

				    <div style={card2} className=" card is-collapsed ">
				     
				      <img className="img-fluid exampleImg" src={"/pug.jpg"} alt="pug picture" />
				        <h4>Mountainside<br/> Pugs</h4>
				      
				      <div className="cardExpander">
				        <i className="fa fa-close  js-collapser"></i>
				        
				      </div>
				    </div>

				    <div style={card3} className=" card  is-collapsed ">
				      <div className="cardInner  js-expander">
				       <img className="img-fluid exampleImg" src={"/grid-icon.png"} alt="Buddy Bot logo" />
				        <div>Grid<br/> Homepage</div>
				      </div>
				      
				    </div>

				    <div style={card4} className=" card  is-collapsed ">
				      <div className="cardInner js-expander">
				      <img className="img-fluid exampleImg" src={"/htmlicon.png"} alt="Buddy Bot logo" />
				        <div>Page<br/> Examples</div>
				      </div>
				      
				    </div>

				  </div>
				</div>

				<div id="card2" style={card2} onClick={this.toggleShow}>
					<div style={card}>
						<img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" />
						<div style={cardHeading}><span>Buddy Bot</span></div>
						<div style={card2Content} className="content"></div>
					</div>
				</div>

				<div id="card3" style={card3} onClick={this.toggleShow}>
					<div style={card}>
						<img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" />
						<div style={cardHeading}><span>Buddy Bot</span></div>
						<div style={card3Content} className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
					</div>
				</div>

				<div id="card4" style={card4} onClick={this.toggleShow}>
					<div style={card}>
						<img className="img-fluid exampleImg" src={"/discord-logo-image.jpg"} alt="Buddy Bot logo" />
						<div style={cardHeading}><span>Buddy Bot</span></div>
							<div style={card4Content} 
							className={this.state.active? 'active':null}
							onClick={this.toggleShow}
						><p>{this.props.text}</p></div>
					</div>
				</div>


				<div id="card1" style={card1} className={`cardButton ${isBoxVisible1? "activeContent" : ""}`} onClick={() => this.toggleBox(0)}>
					<div style={card}>
						<div style={cardHeading}><span>Buddy Bot</span></div>
					</div>
				</div>
					
				<div id="card2" style={card2} className={`cardButton ${isBoxVisible2? "activeContent" : ""}`}  onClick={() => this.toggleBox(1)}>
					<div style={card}>
						
						<div style={cardHeading}><span>Grid Homepage</span></div>
											</div>
				</div>

				<div id="card3" style={card3} className={`cardButton ${isBoxVisible3? "activeContent" : ""}`}  onClick={() => this.toggleBox(2)}>
					<div style={card}>
						
						<div style={cardHeading}><span>Page Examples</span></div>
						
					</div>
				</div>
