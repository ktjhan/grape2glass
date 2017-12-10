import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer center pt-0 black">
        <div className="footer-copyright">
          <div className="container-fluid">
            <p className="text-center"> Home | About Us | Contact </p>
            © 2017 Copyright:{" "}
            <a href="http://www.Grape2Glass.us"> Grape2Glass.us </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
