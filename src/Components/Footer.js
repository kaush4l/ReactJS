import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className="w3-display-container w3-padding w3-center w3-white w3-row">
        <div className="w3-half w3-xxlarge w3-row">
            <a href="https://www.facebook.com/kaush4l" ><i className="fa fa-facebook-square"/></a>
            <a href="https://www.linkedin.com/in/kaush4l/"><i className="fa fa-linkedin-square"/></a>
            <a href="https://www.instagram.com/kaush4l/"><i className="fa fa-instagram"/></a>
            <a href="https://github.com/kaush4l"><i className="fa fa-git-square"/></a>
            <a href="https://plus.google.com/118384595746583517041"><i className="fa fa-google-plus"/></a>
        </div>
        <div className="w3-third">
            <div className="w3-xlarge w3-serif">Designed and developed by Kaushal Kanakamedala</div>
            <div className="w3-small">Made using ReactJS and W3CSS</div>
        </div>
      </div>
    );
  }
}
