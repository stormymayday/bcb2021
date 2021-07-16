import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import LeafletMap from '../components/LeafletMap/LeafletMap';

import Pagination from '../components/Pagination/Pagination';
import paginate from '../utils';

const Farming = ({

    farmerName,
    farmerPicture,
    harvestCity,
    harvestState,
    harvestCountry,
    longitude,
    latitude,
    harvestElevation,
    harvestElevationUnit,
    harvestTotalAbsorbedWeight,
    harvestTotalAbsorbedWeightUnit,
    numberOfHarvestLots,
    harvestLots,

    wetMillCity,
    wetMillState,
    wetMillCountry,
    wetMillElevation,
    wetMillElevationUnit,
    numberOfWetMillLots,

    wetMilltTotalAbsorbedWeight,
    wetMillTotalAbsorbedWeightUnit,

    wetMillLots

}) => {

    // Filtering out the Wet Parchment lots with 50% moisture
    const filteredWetMillLots50 = wetMillLots.filter(function (wetMillLot) {
        return wetMillLot.productName === 'Wet Parchment' && wetMillLot.images[0] === "";
    });

    // Filtering out the Wet Parchment lots with 15% moisture
    const filteredWetMillLots15 = wetMillLots.filter(function (wetMillLot) {
        return wetMillLot.productName === 'Wet Parchment' && wetMillLot.images[0] !== "";
    });

    // const decoratedOnClick = useAccordionToggle(eventKey, onClick);

    return (
        <div style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='farming'>
            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>Farming</h2>
                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#000' }}></div>

                <Row id='harvest' style={{ 'padding-top': '1em' }}>

                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Harvest</h3>

                        <p>People hand picked cherries from the coffee trees each day of the harvest.  At the end of the day the cherries are weighed and people are paid based on the weight of the cherry picked.</p>


                        <p>
                            Producer Name: <b>{farmerName}</b><br />

                            Location: <b>{harvestCity}, {harvestState}</b><br />

                            Country: <b>{harvestCountry}</b><br />

                            Elevation: <b>{harvestElevation} {harvestElevationUnit}</b><br />

                            Coffee Cherry Total Weight: <b>{harvestTotalAbsorbedWeight} {harvestTotalAbsorbedWeightUnit}</b><br />

                            Total number of harvest lots: <b>{numberOfHarvestLots}</b><br />
                        </p>

                    </Col>
                    <Col md='12' lg='6'>
                        <LeafletMap name={farmerName} longitude={longitude} latitude={latitude} />
                    </Col>
                </Row>

                <Row>

                </Row>

                <Accordion style={{ 'margin-top': '3rem', 'margin-bottom': '3.5rem' }}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Button>Harvest Lots</Button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>

                                <Pagination

                                    lots={harvestLots ? paginate(harvestLots) : []}

                                />

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Row>

                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Wet Mill</h3>

                        <p>All of the cherries picked in a day are combined.  Then the coffee seeds are separated from coffee cherry using a process called depulping.  After the cherry skin is removed, the remaining weight of the wet seed inside a thin membrane is called wet parchment.  </p>

                        <p>
                            Location: <b>{wetMillCity}, {wetMillState}</b><br />

                            {/* Country: <b>{wetMillCountry}</b><br /> */}

                            Elevation: <b>{wetMillElevation} {wetMillElevationUnit}</b><br />

                            Wet Parchment Total Weight: <b>{wetMilltTotalAbsorbedWeight} {wetMillTotalAbsorbedWeightUnit}</b><br />

                            Total number of wet parchment lots: <b>{filteredWetMillLots50.length + filteredWetMillLots15.length}</b><br />
                        </p>

                    </Col>

                    <Col md='12' lg='6'>
                        <Image src={`${farmerPicture}`} rounded fluid></Image>
                    </Col>

                </Row>

                <Accordion style={{ 'margin-top': '3rem' }}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Button>Wet Mill Lots (50% moisture)</Button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>



                                <Pagination

                                    lots={filteredWetMillLots50 ? paginate(filteredWetMillLots50) : []}

                                />


                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <Button>Wet Mill Lots (15% moisture)</Button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>



                                <Pagination

                                    lots={filteredWetMillLots15 ? paginate(filteredWetMillLots15) : []}

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