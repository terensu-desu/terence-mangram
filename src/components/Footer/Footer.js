import React from 'react';

const footer = () => {
	return (
		<div className="section">
			<div className="card-container">
				<div className=" card-panel center">
					<div className="row no-margin-top no-margin-bot">
						<div className="col s12">
							<p className="no-margin-top no-margin-bot center">
								Made by <a href="https://github.com/terensu-desu"><span>Terence Mangram</span></a>
								, built with <a href="https://reactjs.org/"><span>React</span></a>
								, <a href="https://redux.js.org/"><span>Redux</span></a>, and 
								<a href="http://next.materializecss.com/"><span>MaterializeCSS</span>.</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default footer;