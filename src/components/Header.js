import React from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Photos from "./Photos";
import Music from "./Music";
import Books from "./Books";
import Projects from "./Projects";
import '../App.css';

const Header = () => {
    return (
        <Router>
            <Navbar className="navBar" bg="dark" variant="dark" expand="md">
            <Navbar.Brand as={NavLink} to="/">Andy Tran</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/about">About Me</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    <NavDropdown title="Interests" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/photos">Photos</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/music">Music</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/books">Books</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/projects">Projects</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/photos" exact component={Photos} />
            <Route path="/music" exact component={Music} />
            <Route path="/books" exact component={Books} />
            <Route path="/projects" exact component={Projects} />
        </Router>
    )
}

export default Header;