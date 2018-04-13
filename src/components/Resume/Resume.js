import React, { Component } from "react";
import M from "materialize-css";
import ResumeSS from "../../assets/images/resume/ResumeSS.png";

class Resume extends Component {
	componentDidMount() {
		M.ScrollSpy.init(this.resume, {scrollOffset: 50});
	}
	render() {
		return (
			<div
			id="resume"
			className="section scrollspy"
			ref={resume => {this.resume = resume}}>
				<div className="card-container">
					<div className="row no-margin-top no-margin-bot">
		        <div className="col s12">
		          <h3 className="center no-margin-top no-margin-bot">
		            <span>Resume</span>
		          </h3>
		        </div>
		      </div>
		      <hr/>
		      <div className="card-panel center">
		      	<div className="row">
		      		<a href="#!">
		      			<img src={ResumeSS} alt="Resume" style={{height: "500px"}}/>
		      		</a>
		      	</div>
		      </div>
				</div>
			</div>
		);
	}
}

export default Resume;