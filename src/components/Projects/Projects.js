import React, { Component } from "react";
import M from "materialize-css";
import DisplayDataModule from "../../store/displayData/displayData";

class Projects extends Component {
  componentDidMount() {
    M.ScrollSpy.init(this.projects, {scrollOffset: 50});
  }
  render() {
    const projectsData = DisplayDataModule.getDisplayData(this.props.language, "projects");
    const projects = projectsData.map(project => (
      <div className="row no-margin-top no-margin-bot" key={project.title}>   
        <div className="col s12">
          <div className="card z-depth-2">
            <div className="card-image video-container">
              {project.vlink ? (
                <iframe
                  title={project.title}
                  width="853"
                  height="480"
                  src={project.vlink}
                  frameBorder="0"
                  allowFullScreen
                />
              ) : (
                <img src={project.ilink} alt={"Project " + project.title} />
              )}
            </div>
            <div className="card-content">
              <h5 className="card-title accent">{project.title}</h5>
              <p><em>{project.tools}</em></p>
              <div className="divider"></div>
              <p>{project.text}</p>
            </div>
            <div className="card-action center">
              <a href={project.url}>
                View <span>{project.title}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div
      id="projects"
      className="section scrollspy"
      ref={projects => {this.projects = projects}}>
        <div className="card-container">
          <div className="row no-margin-top no-margin-bot">
            <div className="col s12">
              <h3 className="center no-margin-top no-margin-bot">
                <span>Portfolio</span>
              </h3>
            </div>
          </div>
          <hr />
          {projects}
        </div>
      </div>
    );
  }
};

export default Projects;
