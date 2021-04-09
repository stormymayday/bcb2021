import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function DetailsPageNavigation(props) {

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

                            <Nav.Link
                                as={HashLink}
                                to={`#harvest`}
                                smooth
                                scroll={el => scrollWidthOffset(el)}
                            >
                                HARVEST
                            </Nav.Link>
                            <Nav.Link
                                as={HashLink}
                                to={`#processing`}
                                smooth
                                scroll={el => scrollWidthOffset(el)}
                            >
                                PROCESSING
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
}