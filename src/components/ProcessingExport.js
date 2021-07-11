import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import Accordion from 'react-bootstrap/Accordion';

import './ProcessingExport.css';

import Pagination from '../components/Pagination/Pagination';
import paginate from '../utils';


export const ProcessingExport = ({

    dryParchmentAbsorbedWeight,
    dryParchmentAbsorbedWeightUnit,

    greenCoffeeAbsorbedWeight,
    greenCoffeeAbsorbedWeightUnit,

    dryMillLots

}) => {

    // Filtering out the Dry Parchment lots
    const dryParchmentLots = dryMillLots.filter(function (dryMillLot) {
        return dryMillLot.productName === 'Dry Parchment';
    });

    // Filtering out the Coffee Green lots
    const coffeeGreenLots = dryMillLots.filter(function (dryMillLot) {
        return dryMillLot.productName === 'Coffee Green';
    });

    return (
        <div className="processing-section-bg" style={{ 'padding-top': '4em', 'padding-bottom': '4em' }} id='processing-export'>
            <Container>

                <h2 style={{ color: 'white' }}>Catracha Coffee</h2>
                <p style={{ color: 'white' }}>A social enterprise dedicated to accessing the specialty coffee market for coffee farmers in Santa Elena, La Paz, Honduras.</p>

                <Row>

                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-bottom': '0.5em', 'color': 'white' }}>Intake</h3>

                        <p style={{ color: 'white' }}>The producer dries the wet parchment at their mill and then sells the dry parchment to Catracha Coffee.   After the moisture is removed, the remaining weight of the seed inside the thin membrane is called dry parchment.  The producer is paid based on the weight of the dry parchment delivered to Catracha Coffee.</p>

                        <p style={{ color: 'white' }}>
                            Dry Parchment Absorbed Weight: {dryParchmentAbsorbedWeight} {dryParchmentAbsorbedWeightUnit}
                        </p>

                    </Col>

                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-bottom': '0.5em', 'color': 'white' }}>Dry Mill</h3>

                        <p style={{ color: 'white' }}>The coffee seeds are removed from the thin membrane (parchment) and sorted to remove lower quality seeds.  After this process of dehulling and sorting, the remaining weight of the seed is called green coffee</p>

                        <p style={{ color: 'white' }}>
                            Green Coffee Absorbed Weight: {greenCoffeeAbsorbedWeight} {greenCoffeeAbsorbedWeightUnit}
                        </p>

                    </Col>


                    <Col md='12' lg='12'>
                        <Accordion style={{ 'margin-top': '3rem', 'margin-bottom': '3.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <Button>Dry Parchment Lots</Button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        <Pagination

                                            lots={dryParchmentLots ? paginate(dryParchmentLots) : []}

                                        />

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <Button>Coffee Green Lots</Button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>

                                        <Pagination

                                            lots={coffeeGreenLots ? paginate(coffeeGreenLots) : []}

                                        />

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                        </Accordion>
                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default ProcessingExport;