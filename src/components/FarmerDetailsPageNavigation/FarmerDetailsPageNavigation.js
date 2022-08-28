import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Bootstrap components
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import logo from '../../images/logo-white.png';

export default function FarmerDetailsPageNavigation() {

    const openExternalURL = () => {
        window.open('https://blockchaincoffeebeans.herokuapp.com/');
    }

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -55;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>

                    <Navbar.Brand href="/"><img src={logo} style={{ 'width': '3em' }}></img></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ml-auto">

                            {/* <Nav.Link href="/">HOME</Nav.Link> */}

                            <Nav.Link
                                as={HashLink}
                                to={`#farming`}
                                smooth
                                scroll={el => scrollWidthOffset(el)}
                            >
                                FARMING
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to={`#processing-export`}
                                smooth
                                scroll={el => scrollWidthOffset(el)}
                            >
                                PROCESSING
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to={`#import`}
                                smooth
                                scroll={el => scrollWidthOffset(el)}
                            >
                                IMPORT
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to={`#roasting`}
                                smooth
                                scroll={el => scrollWidthOffset(el)}
                            >
                                ROASTING
                            </Nav.Link>

                            <Nav.Link
                                as={HashLink}
                                to={`#economics`}
                                smooth
                                scroll={el => scrollWidthOffset(el)}
                            >
                                ECONOMICS
                            </Nav.Link>

                            <Nav.Link href="/partners">PARTNERS</Nav.Link>
                            <Nav.Link href="/about">ABOUT</Nav.Link>
                            <Nav.Link href="/media">MEDIA</Nav.Link>
                            <Nav.Link href="/roasters">ROASTERS</Nav.Link>

                            <NavDropdown title="FARMERS" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/farmers-2022" key="0">Harvest 2022</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/farmers-2021" key="0">Harvest 2021</NavDropdown.Item>

                                <NavDropdown.Item onClick={openExternalURL} key="1">Harvest 2020</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
}