import React from "react";
import DisplayDataModule from "../../store/displayData/displayData";

const projects = props => {
  const projectsData = DisplayDataModule.getDisplayData(props.language, "projects");
  const projects = projectsData.map(project => (
    <div className="col s12 m12 l4" key={project.title}>
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
          <h5 className="card-title">{project.title}</h5>
          <p>{project.text}</p>
        </div>
        <div className="card-action center">
          <a href={project.url}>
            View <span>{project.title}</span>
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="section">
      <div className="card-container">
        <div className="row no-margin-top no-margin-bot">
          <div className="col s12">
            <h3 className="center no-margin-top no-margin-bot">
              <span>Projects</span>
            </h3>
          </div>
        </div>
        <hr />
        <div className="row no-margin-top no-margin-bot">{projects}</div>
      </div>
    </div>
  );
};

export default projects;
