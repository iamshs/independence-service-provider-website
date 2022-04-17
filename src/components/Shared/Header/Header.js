import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav>
            <Navbar collapseOnSelect expand="xl" sticky='top' bg="light" >
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
                            {
                                user ? (<button className="signout-btn" onClick={handleSignOut}>SignOut</button>) : (<Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>

    );
};

export default Header;