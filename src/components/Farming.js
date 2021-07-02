import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import LeafletMap from '../components/LeafletMap/LeafletMap';

import Pagination from '../components/Pagination/Pagination';
import paginate from '../utils';

const Farming = ({

    farmerName,
    farmerPicture,
    city,
    state,
    country,
    longitude,
    latitude,
    elevation,
    elevationUnit,
    harvestTotalAbsorbedWeight,
    harvestTotalAbsorbedWeightUnit,
    numberOfHarvestLots,
    harvestLots,

    wetMilltTotalAbsorbedWeight,
    wetMillTotalAbsorbedWeightUnit,

    wetMillLots

}) => {

    // const decoratedOnClick = useAccordionToggle(eventKey, onClick);

    return (
        <div style={{ 'padding-top': '4em', 'padding-bottom': '4em' }} id='farming'>
            <Container>

                <h2 style={{ 'margin-bottom': '1rem' }}>{farmerName}</h2>

                <Row id='harvest' style={{ 'padding-top': '1em' }}>
                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Harvest</h3>

                        <p>City: {city}</p>

                        <p>State: {state}</p>

                        <p>Country: {country}</p>

                        <p>Elevation: {elevation} {elevationUnit}</p>

                        <p>
                            Coffee Cherry Total Absorbed Weight: {harvestTotalAbsorbedWeight} {harvestTotalAbsorbedWeightUnit}
                        </p>
                        <p>
                            Harvested between: { }
                        </p>

                        <p>
                            Total number of harvest lots: {numberOfHarvestLots}
                        </p>

                    </Col>
                    <Col md='12' lg='6'>
                        <LeafletMap farmer={farmerName} longitude={longitude} latitude={latitude} />
                    </Col>
                </Row>

                <Row>

                </Row>


                <Row>
                    <Container>

                        <Pagination

                            lots={harvestLots ? paginate(harvestLots) : []}

                        />

                    </Container>
                </Row>

                <Row>

                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Wet Mill</h3>

                        <p>
                            Wet Parchment Total Absorbed Weight: {wetMilltTotalAbsorbedWeight} {wetMillTotalAbsorbedWeightUnit}
                        </p>

                    </Col>

                    <Col md='12' lg='6'>
                        <Image src={`${farmerPicture}`} rounded fluid></Image>
                    </Col>

                </Row>

                {/* <Row>
                    <Container>

                        <Pagination

                            lots={wetMillLots ? paginate(wetMillLots) : []}

                        />

                    </Container>
                </Row> */}

                <Accordion style={{ 'margin-top': '2rem' }}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Show Wet Mill Lots
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>



                                <Pagination

                                    lots={wetMillLots ? paginate(wetMillLots) : []}

                                />


                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </Container>
        </div >
    );
}

export default Farming;