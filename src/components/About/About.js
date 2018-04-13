import React, { Component } from 'react';
import M from "materialize-css";
import DisplayDataModule from "../../store/displayData/displayData";

class About extends Component {
	componentDidMount() {
		M.ScrollSpy.init(this.about, {scrollOffset: 50});
	}
	render() {
		const about = DisplayDataModule.getDisplayData(this.props.language, "about");
		return (
			<div
			id="about"
			className="section scrollspy"
			ref={about => {this.about = about}}>
				<div className="card-container">
					<div className="row no-margin-top no-margin-bot">
		        <div className="col s12">
		          <h3 className="center no-margin-top no-margin-bot">
		            <span>About Me</span>
		          </h3>
		        </div>
		      </div>
		      <hr/>
					<div className="card-panel">
						<div className="row no-margin-bot center">
							<blockquote>
								In all things big or small,
							</blockquote>
							<blockquote>
								do them well, or not at all.
							</blockquote>
						</div>
						<div className="row no-margin-bot">
							<div className="col s12">
								<p className="article">{about}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default About;