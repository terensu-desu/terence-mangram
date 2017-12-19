import React from 'react';

export default class Portfolio extends React.Component {
  render() {
    const data = this.props.displayData;
    return (
      <main>
        <div className="container-fluid banner-image2">
          <div className="row">
            <div className="col s12 l2 offset-l2 center">
              <img src="https://i.imgur.com/NPqHt2yb.jpg" alt="author" className="author-showcase circle responsive-img z-depth-2" />
            </div>
            <div className="center col s12 l6">
              <h1 className="banner-text no-margin-bot">{data.banner.main}</h1>
              <h3 className="banner-text no-margin-top">{data.banner.sub}</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card-panel no-margin-bot">
            <div className="row center no-margin-top no-margin-bot">
              <div className="col s12">
                <h2 className="no-margin-top no-margin-bot"><span>Projects</span></h2>
                <hr className="small-hr"/>
              </div>
            </div>
            <div className="row no-margin-top no-margin-bot">
              <div className="col s12 m12 l4">
               <div className="card z-depth-2">
                  <div className="card-image video-container">
                    <iframe title="nihon-alt video" width="853" height="480" src={data.portfolio.item1.vlink} frameBorder="0" allowFullScreen></iframe>
                  </div>
                  <div className="card-content">
                    <h5 className="card-title">{data.portfolio.item1.title}</h5>
                    <p>{data.portfolio.item1.text}</p>
                  </div>
                    <div className="card-action center">
                    <a href={data.portfolio.item1.url}>View <span>{data.portfolio.item1.title}</span></a>
                  </div>
                </div>
              </div>
              <div className="col s12 m12 l4">
               <div className="card z-depth-2">
                  <div className="card-image video-container">
                    <iframe title="buddies video" width="853" height="480" src={data.portfolio.item2.vlink} frameBorder="0" allowFullScreen></iframe>
                  </div>
                  <div className="card-content">
                    <h5 className="card-title">{data.portfolio.item2.title}</h5>
                    <p>{data.portfolio.item2.text}</p>
                  </div>
                    <div className="card-action center">
                    <a href={data.portfolio.item2.url}>View <span>{data.portfolio.item2.title}</span></a>
                  </div>
                </div>
              </div>
              <div className="col s12 m12 l4">
               <div className="card z-depth-2">
                  <div className="card-image video-container">
                    <iframe title="other video" width="853" height="480" src={data.portfolio.item3.vlink} frameBorder="0" allowFullScreen></iframe>
                  </div>
                  <div className="card-content">
                    <h5 className="card-title">{data.portfolio.item3.title}</h5>
                    <p>{data.portfolio.item3.text}</p>
                  </div>
                    <div className="card-action center">
                    <a href={data.portfolio.item3.url1}>Visit <span>GitHub.</span></a>
                    <a href={data.portfolio.item3.url2}>Visit <span>CodePen.</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-margin-top no-margin-bot">
              <div className="col s12">
                <p className="center no-margin-top no-margin-bot">I'm always looking to stretch my legs in some way, feel free to give me feedback and return to see what I've been working on!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}