import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      /*<footer className="footer">
        <nav className="navbar navbar-default navbar-custom black">
          <div className="container-fluid">
            <div className="nav navbar-nav navbar-left">
              <ul className="footerleft">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a href="">
                <i
                  id="social-fb"
                  className="fa fa-facebook-square fa-3x social"
                />
              </a>
              <a href="">
                <i
                  id="social-tw"
                  className="fa fa-twitter-square fa-3x social"
                />
              </a>
              <a href="">
                <i
                  id="social-gp"
                  className="fa fa-google-plus-square fa-3x social"
                />
              </a>
              <a href="">
                <i
                  id="social-em"
                  className="fa fa-envelope-square fa-3x social"
                />
              </a>
            </div>
          </div>
        </nav>
      </footer>*/
      <footer className="page-footer center pt-0 black">
        <div className="footer-copyright">
          <div className="container-fluid">
            <p class="text-center"> Home | About Us | Contact </p>
            © 2017 Copyright:{" "}
            <a href="http://www.Grape2Glass.us"> Grape2Glass.us </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
