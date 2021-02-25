import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

import Button from 'react-bootstrap/Button';

import slideOne from '../images/slideOne.jpg';
import slideTwo from '../images/slideTwo.jpg';

import './Roasting.css';

export const Roasting = (props) => {

    // Converting image
    // const source = 'data:image/jpeg;base64,' + props.roastingImage;

    return (
        <div className="roasting-section-bg" style={{ 'padding-top': '4em', 'padding-bottom': '4em' }} id='roasting'>
            <Container>
                <h2 style={{ color: 'white' }}>Roasted by Queen City</h2>
                <p style={{ color: 'white' }}>Queen City is a collective coffee company in Denver building community from farm to cup. Our coffee comes from farmers and producers we know, and is then small-batch roasted in the city we love. We believe that honest relationships, from farmers to consumers, achieve an equitable and sustainable coffee supply chain.</p>
                <Row>
                    <Col lg={6} md={12}>
                        <Card border="light" text='light' border='light' style={{ 'background-color': 'transparent', 'margin-bottom': '2rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    Roasted at: {props.roastingCity}, {props.roastingState}, {props.roastingCounty}<br />
                                    Cuppers Notes: {props.cuppersNotes}<br />
                                    Roast Date: {props.roastDate}<br />
                                    Roaster: {props.roasterName}<br />
                                </Card.Text>
                            </Card.Body>
                            {/* <Button variant="light" size="lg" block style={{'margin-top': '2rem'}}>BUY THIS COFFEE</Button> */}
                        </Card>
                    </Col>
                    <Col lg={6} md={12}>
                        <Card border="light" text='light' border='light' style={{ 'background-color': 'transparent' }}>
                            <Card.Img variant="top" src={props.roastingImage} style={{ 'max-height': '40rem' }} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Roasting;