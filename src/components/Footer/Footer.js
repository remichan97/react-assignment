import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/ndaiduong" className = "social-icons">
                    <span className="fa-stack">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="https://www.instagram.com/oceanoppa" className = "social-icons">
                    <span className="fa-stack">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="https://github.com/oceannguyen" className = "social-icons">
                    <span className="fa-stack">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p className="copyright text-muted">
                Copyright © Ocean Nguyen 2019
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
export default Footer;
