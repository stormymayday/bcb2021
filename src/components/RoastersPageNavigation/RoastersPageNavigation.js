import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Bootstrap components
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function RoastersPageNavigation() {

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -55;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>

                    <Navbar.Brand href="/">BCB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ml-auto">

                            <Nav.Link href="/">HOME</Nav.Link>

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