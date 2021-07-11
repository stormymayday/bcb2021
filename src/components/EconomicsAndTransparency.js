// EconomicsAndTransparency
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import slideOne from '../images/slideOne.jpg';
import slideTwo from '../images/slideTwo.jpg';

import './EconomicsAndTransparency.css';


export const EconomicsAndTransparency = () => {
    return (
        <div className="economics-section-bg" style={{ 'padding-top': '4em', 'padding-bottom': '4em' }} id='economics'>

            <h2 style={{ 'padding-bottom': '1.5em', 'text-align': 'center', 'color': 'white' }}>Economics & Transparency</h2>

            <Container>
                <p style={{ color: 'white' }}>Technology can revolutionize the way coffee growers sell their product by authenticating direct trade claims, tracking supply chain activities and facilitating economic transparency. And research shows this yields increased profits, feedback and capital access for global producers. Below, stakeholders share economic data for financial transparency.</p>

                <Row>

                    <Col lg={4} sm={12}>

                        <Card border="light" text='light' border='light' style={{ 'background-color': 'transparent', 'margin-bottom': '2rem' }}>
                            <Card.Body>
                                <Card.Title>Claudia & Juan</Card.Title>
                                <Card.Text>
                                    Paid for Parchment: $744.20<br />
                                    Profit Share: $708.20<br />
                                    Total Payment: $1452.40<br />
                                    Total Payment Price: $1.911/lb green exported
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col lg={4} sm={12}>

                        <Card border="light" text='light' border='light' style={{ 'background-color': 'transparent', 'margin-bottom': '2rem' }}>
                            <Card.Body>
                                <Card.Title>Catracha</Card.Title>
                                <Card.Text>
                                    FOB base: $2.25/lb*<br />
                                    FOB premium: $1.25/lb*<br />
                                    FOB Catracha Community contribution: $0.25/lb*<br />
                                    FOB total: $3.75/lb*<br />
                                    * of exported green coffee
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col lg={4} sm={12}>

                        <Card border="light" text='light' border='light' style={{ 'background-color': 'transparent' }}>
                            <Card.Body>
                                <Card.Title>Queen City</Card.Title>
                                <Card.Text>
                                    QC FOB: $3.75/lb<br />
                                    QC import cost: $0.65/lb ($4.40/lb paid to Importer)<br />
                                    QC freight: $0.15/lb<br />
                                    QC roasting labor: $0.52/lb<br />
                                    QC total cost at roaster: $5.62/lb†<br />
                                    † cost prior to packaging & distribution
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>


            </Container>
        </div>
    );
}

export default EconomicsAndTransparency;