import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import bgHome from "./images/bg-index.jpg";
import bgContact from "./images/bg-contact.jpg";
import bgAbout from "./images/bg-about.jpg";
import bgPosts from "./images/bg-post.jpg";
import logoLink from "./images/ocean_logo.png";
import "./Header.css";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
const headerInfo = [
  {
    url: "/",
    background: bgHome,
    title: "Ocean Nguyen",
    subtitle: "Engineer/Video Creator",
  },
  {
    url: "/contact",
    background: bgContact,
    title: "Contact Me",
    subtitle: "Have questions? I have answers.",
  },
  {
    url: "/about",
    background: bgAbout,
    title: "About Me",
    subtitle: "This is what I do.",
  },
  { url: "/posts", background: bgPosts, title: "Posts", subtitle: "" },
];

const Header = () => {
  let location = useLocation();
  const getInfo = (url) => {
    return headerInfo.find((info) => info.url === location.pathname);
  };
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" id="mainNav">
        <Container style={{ width: "57.4%", paddingTop: "5px" }}>
          <Navbar.Brand href="#home">
            <img alt="" src={logoLink} width="150" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navbar-nav">
            <Nav className="ms-auto" as="ul">
              <NavLink to="/" className="nav-li">
                Home
              </NavLink>

              <NavLink to="/about" className="nav-li">
                About
              </NavLink>
              <NavLink to="/posts" className="nav-li">
                Posts
              </NavLink>
              <NavLink to="/contact" className="nav-li">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header
        className="masthead"
        style={{
          backgroundImage: `url(${getInfo(location.pathname)["background"]})`,
        }}
      >
        <div className="overlay"></div>
        <Container>
          <Row>
            <Col lg="8" md="10" className="col-lg-8 col-md-10 mx-auto">
              <div className="page-heading">
                <h1>{getInfo(location.pathname)["title"]}</h1>
                <span>{getInfo(location.pathname)["subtitle"]}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};
export default Header;
