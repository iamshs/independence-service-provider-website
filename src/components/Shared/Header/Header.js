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
            <Navbar className="navbar" collapseOnSelect expand="lg" bg='light' sticky='top'  >
                <Container>
                    <Navbar.Brand className="nav-link fw-bold fs-3" as={Link} to="/">
                        WILD Life
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className=" fw-bolder " as={Link} to='/'>Home</Nav.Link>

                            <Nav.Link className=" fw-bolder" as={Link} to='/blogs'>Blogs</Nav.Link>
                            <Nav.Link className="fw-bolder" as={Link} to='/aboutme'>About</Nav.Link>

                        </Nav>
                        <Nav>
                           
                            {
                                user ? (<button className="signout-btn text-muted fw-bolder" onClick={handleSignOut}>SignOut</button>) : (<Nav.Link className=" fw-bolder" as={Link} to="login">
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