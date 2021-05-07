import React from 'react';

// Bootstrap components
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

export default function HomePageNavigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>

                    <Navbar.Brand href="/">BCB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ml-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            {/* <Nav.Link href="#farming">FARMING</Nav.Link>
                            <Nav.Link href="#processing-export">PROCESSING & EXPORT</Nav.Link>
                            <Nav.Link href="#journey">JOURNEY</Nav.Link>
                            <Nav.Link href="#roasting">ROASTING</Nav.Link>
                            <Nav.Link href="#economics">ECONOMICS</Nav.Link> */}
                            <Nav.Link href="/roasters">ROASTERS</Nav.Link>
                            <NavDropdown title="FARMERS" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/farmers" key="1">Harvest 2021</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
}