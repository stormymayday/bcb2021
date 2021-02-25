import React from 'react';

// Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>

                    <Navbar.Brand href="#hero">BCB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ml-auto">
                            <Nav.Link href="#hero">HOME</Nav.Link>
                            <Nav.Link href="#farming">FARMING</Nav.Link>
                            <Nav.Link href="#processing-export">PROCESSING & EXPORT</Nav.Link>
                            <Nav.Link href="#journey">JOURNEY</Nav.Link>
                            <Nav.Link href="#roasting">ROASTING</Nav.Link>
                            <Nav.Link href="#economics">ECONOMICS</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
}