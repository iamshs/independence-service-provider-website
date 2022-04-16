import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                      WILD Life
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                            
                        </Nav>
                        <Nav>
                        <Nav.Link as={Link} to='/aboutme'>About Me</Nav.Link>
                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>

    );
};

export default Header;