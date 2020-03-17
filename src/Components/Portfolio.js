import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return(
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        );
      })
      var mainprojects = this.props.data.mainprojects.map(function(mainprojects){
        var projectImage = 'images/portfolio/'+mainprojects.image;
        return(
          <div key={mainprojects.title} className="columns portfolio-item mainpro-container">
          <h6 className="image-title">{mainprojects.stitle}</h6>
            <div className="item-wrap">
              <a href={mainprojects.url} title={mainprojects.title}>
                <img alt={mainprojects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{mainprojects.title}</h5>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        );
      })
      var mainprojects_details = this.props.data.mainprojects.map(function(mainprojects){
        return( 
          <div key={mainprojects.title}>
            <h3>{mainprojects.title}</h3>
            <p className="info">Programming language/Platform utilized: {mainprojects.skills}</p>
            <p>{mainprojects.description}</p>
          </div>
        );
      })
    }

    return (
      <section id="portfolio">
        <div className="portfolio-header">
          <h1><span>Projects/Software Engineering courses</span></h1>
        </div>

        <div className="row">
          <div className="bgrid-quarters">
            {mainprojects}
          </div>

          <div className="twelve columns main-col">
            <div className="row item">
              <div className="twelve columns ">
                {mainprojects_details}
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
           <div className="twelve columns collapsed">
              <h2>Check Out Some of the Software Engineering Realated courses/project I took.</h2>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  {projects}
              </div>
            </div>
        </div>

      </section>
    );
  }
}

export default Portfolio;

