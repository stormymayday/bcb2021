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

    exporterLogo,

    exporterIntakeCity,
    exporterIntakeState,
    exporterIntakeCountry,
    exporterIntakeElevation,
    exporterIntakeElevationUnit,

    dryMillIntakeCity,
    dryMillIntakeState,
    dryMillIntakeCountry,
    dryMillIntakeElevation,
    dryMillIntakeElevationUnit,

    dryParchmentAbsorbedWeight,
    dryParchmentAbsorbedWeightUnit,

    greenCoffeeAbsorbedWeight,
    greenCoffeeAbsorbedWeightUnit,

    dryMillLots,

    exportNode,
    exportLots

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

        <div className="processing-section-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='processing-export'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Processing & Export</h2>
                <div className='underline' style={{ 'margin-bottom': '3em', 'background': '#fff' }}></div>

                <Card
                    className="text-center"
                    border="light"
                    text='light'
                    style={{ 'background-color': 'transparent', 'margin-bottom': '1rem' }}>

                    <Card.Body>

                        <a href="https://www.catrachacoffee.com/" target="_blank">

                            <Card.Img
                                className="d-block mx-auto img-fluid w-50"
                                variant="top"
                                src={exporterLogo}
                                style={{ 'padding-top': '2rem', 'padding-bottom': '2rem', 'max-width': '15rem' }}
                            />

                        </a>

                        <Card.Text>
                            {/* <h3 style={{ color: 'white' }}>Queen City Collective Coffee</h3> */}
                            A social enterprise dedicated to accessing the specialty coffee market for coffee farmers in Santa Elena, La Paz, Honduras.
                        </Card.Text>
                        <Button
                            variant="outline-light"
                            href={'https://www.catrachacoffee.com/'}
                            target="_blank"
                        >
                            <b>Learn More</b>
                        </Button>
                    </Card.Body>
                </Card>

                <Row>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-top': '0.5em', 'color': 'white' }}>Exporter Intake</h3>

                        <p style={{ color: 'white' }}>

                            Location: <b>{exporterIntakeCity}, {exporterIntakeState}</b><br />

                            Dry Parchment Total Weight: <b>{dryParchmentAbsorbedWeight} {dryParchmentAbsorbedWeightUnit}s</b><br />

                        </p>

                        <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <button className='bttn bttn-primary'>Dry Parchment Lots</button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        <Pagination

                                            lots={dryParchmentLots ? paginate(dryParchmentLots) : []}

                                        />

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p style={{ color: 'white' }}>The producer dries the wet parchment at their mill and then sells the dry parchment to Catracha Coffee.   After the moisture is removed, the remaining weight of the seed inside the thin membrane is called dry parchment.  The producer is paid based on the weight of the dry parchment delivered to Catracha Coffee.</p>

                    </Col>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-top': '0.5em', 'color': 'white' }}>Dry Mill</h3>

                        <p style={{ color: 'white' }}>

                            Location: <b>{dryMillIntakeCity}, {dryMillIntakeState}</b><br />

                            Green Coffee Total Weight: <b>{greenCoffeeAbsorbedWeight} {greenCoffeeAbsorbedWeightUnit}s</b><br />

                        </p>

                        <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <button className='bttn bttn-primary'>Coffee Green Lots</button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        <Pagination

                                            lots={coffeeGreenLots ? paginate(coffeeGreenLots) : []}

                                        />

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p style={{ color: 'white' }}>The coffee seeds are removed from the thin membrane (parchment) and sorted to remove lower quality seeds.  After this process of dehulling and sorting, the remaining weight of the seed is called green coffee.</p>


                    </Col>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-top': '0.5em', 'color': 'white' }}>Export</h3>

                        <p style={{ color: 'white' }}>

                            Location: <b>{exportNode.city}</b><br />

                            Green Coffee Total Weight: <b>{exportLots[0].absorbedWeight} {exportLots[0].absorbedWeightUnit}s</b><br />

                        </p>

                        <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <button className='bttn bttn-primary'>Export Lots</button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        <Pagination

                                            lots={exportLots ? paginate(exportLots) : []}

                                        />

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p style={{ color: 'white' }}>The green coffee is packaged in 69 kg bags and placed inside of a shipping container for export. A container can hold up to 275 bags of green coffee.</p>

                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default ProcessingExport;