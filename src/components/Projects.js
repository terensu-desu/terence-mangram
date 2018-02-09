import React from 'react';

export default class Portfolio extends React.Component {
  render() {
    const data = this.props.displayData.portfolio;
    const items = data.map((item, i) => {
      return (
        <div className="col s12 m12 l4" key={i}>
          <div className="card z-depth-2">
            <div className="card-image video-container">
              <iframe title={item.title} width="853" height="480" src={item.vlink} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="card-content">
              <h5 className="card-title">{item.title}</h5>
              <p>{item.text}</p>
            </div>
              <div className="card-action center">
              <a href={item.url}>View <span>{item.title}</span></a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="card-panel no-margin-bot">
        <div className="row center no-margin-top no-margin-bot">
          <div className="col s12">
            <h3 className="no-margin-top no-margin-bot"><span>Projects</span></h3>
            <hr className="small-hr"/>
          </div>
        </div>
        <div className="row no-margin-top no-margin-bot">
          {items}
        </div>
      </div>
    )
  }
}