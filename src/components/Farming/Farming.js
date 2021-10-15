import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import LeafletMap from '../LeafletMap/LeafletMap';

// Importing default farm picture
import defaultPicture from '../../images/coffee_farm.JPG';

import Pagination from '../Pagination/Pagination';
import paginate from '../../utils';

const Farming = ({

    farmerName,
    producerName,

    harvestNode,
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

    wetMillNode,
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

    // Summarizing Coffee Cherry Total Weight
    let coffeeCherryTotalWeight = 0;

    if (harvestLots) {

        coffeeCherryTotalWeight = harvestLots.reduce(function (acc, obj) { return acc + parseFloat(obj.absorbedWeight); }, 0);

    }

    // Filtering out the Wet Parchment lots
    let filteredWetMillLots50 = 0;

    let filteredWetMillLots15 = 0;

    if (wetMillLots) {

        filteredWetMillLots50 = wetMillLots.filter(function (wetMillLot) {
            return wetMillLot.productName === 'Wet Parchment' && wetMillLot.images[0] === "";
        });

        filteredWetMillLots15 = wetMillLots.filter(function (wetMillLot) {
            return wetMillLot.productName === 'Wet Parchment' && wetMillLot.images[0] !== "";
        });

    }

    // Summarizing Wet Parchment Total Weight at 50 and 15% moisture
    let wetParchmentotalWeight50 = 0;
    let wetParchmentotalWeight15 = 0;

    if (filteredWetMillLots50 && filteredWetMillLots15) {

        wetParchmentotalWeight50 = filteredWetMillLots50.reduce(function (acc, obj) { return acc + parseFloat(obj.absorbedWeight); }, 0);

        wetParchmentotalWeight15 = filteredWetMillLots15.reduce(function (acc, obj) { return acc + parseFloat(obj.absorbedWeight); }, 0);

    }

    return (

        <div style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='farming'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>Farming</h2>
                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#000' }}></div>

                <Row id='harvest' style={{ 'padding-top': '1em' }}>

                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Harvest</h3>

                        <p>People hand picked cherries from the coffee trees each day of the harvest.  At the end of the day the cherries are weighed and people are paid based on the weight of the cherry picked.</p>

                        {

                            harvestNode

                                ?

                                <>
                                    <p>
                                        Producer: <b>{producerName}</b><br />

                                        Location: <b>{harvestCity}, {harvestState}</b><br />

                                        Country: <b>{harvestCountry}</b><br />

                                        Elevation: <b>{harvestElevation} {harvestElevationUnit}</b><br />

                                        {/* Coffee Cherry Total Weight: <b>{harvestTotalAbsorbedWeight} {harvestTotalAbsorbedWeightUnit}</b><br /> */}

                                        Coffee Varietal: <b> {harvestLots[0].coffeeVarietal}</b><br />

                                        Coffee Cherry Total Weight: <b>{coffeeCherryTotalWeight} {harvestLots[0].absorbedWeightUnit.endsWith('s') ? harvestLots[0].absorbedWeightUnit : harvestLots[0].absorbedWeightUnit + 's'}</b><br />

                                        Total number of harvest lots: <b>{numberOfHarvestLots}</b><br />
                                    </p>
                                </>

                                :

                                <>
                                    <p>
                                        Producer Name: <b>Coming Soon</b><br />

                                        Location: <b>Coming Soon</b><br />

                                        Country: <b>Coming Soon</b><br />

                                        Elevation: <b>Coming Soon</b><br />

                                        Coffee Cherry Total Weight: <b>Coming Soon</b><br />

                                        Total number of harvest lots: <b>Coming Soon</b><br />
                                    </p>
                                </>

                        }


                    </Col>
                    <Col md='12' lg='6'>
                        {
                            harvestNode

                                ?

                                <LeafletMap name={farmerName} longitude={longitude} latitude={latitude} />

                                :

                                null

                        }
                    </Col>
                </Row>

                <Row>

                </Row>

                <Accordion style={{ 'margin-top': '3rem', 'margin-bottom': '3.5rem' }}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <button className='bttn bttn-primary'>{harvestLots ? `Harvest Lots` : `Harvest Lots (Coming Soon)`}</button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>

                                <Pagination

                                    lots={harvestLots ? paginate(harvestLots) : []}

                                    lotType={'harvest'}

                                />

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Row>

                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Wet Mill</h3>

                        <p>All of the cherries picked in a day are combined.  Then the coffee seeds are separated from coffee cherry using a process called depulping.  After the cherry skin is removed, the remaining weight of the wet seed inside a thin membrane is called wet parchment.  </p>

                        {
                            wetMillNode

                                ?

                                <>
                                    <p>
                                        Location: <b>{wetMillCity}, {wetMillState}</b><br />

                                        {/* Country: <b>{wetMillCountry}</b><br /> */}

                                        Elevation: <b>{wetMillElevation} {wetMillElevationUnit}</b><br />

                                        {/* Total weight at 50% moisture */}
                                        Wet Parchment Total Weight: <b>{wetParchmentotalWeight50} {wetMillTotalAbsorbedWeightUnit}</b><br />

                                        Total number of wet parchment lots: <b>{filteredWetMillLots50.length + filteredWetMillLots15.length}</b><br />
                                    </p>
                                </>

                                :

                                <>
                                    <p>
                                        Location: <b>Coming Soon</b><br />

                                        {/* Country: <b>{wetMillCountry}</b><br /> */}

                                        Elevation: <b>Coming Soon</b><br />

                                        Wet Parchment Total Weight: <b>Coming Soon</b><br />

                                        Total number of wet parchment lots: <b>Coming Soon</b><br />
                                    </p>
                                </>

                        }


                    </Col>

                    <Col md='12' lg='6'>
                        <Image src={`${farmerPicture ? farmerPicture : defaultPicture}`} rounded fluid></Image>
                    </Col>

                </Row>

                <Accordion style={{ 'margin-top': '3rem' }}>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <button className='bttn bttn-primary'>{filteredWetMillLots50 ? `Wet Mill Lots (50% moisture)` : `Wet Mill Lots (50% moisture) Coming Soon`}</button>
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
                            <button className='bttn bttn-primary'>{filteredWetMillLots15 ? `Wet Mill Lots (15% moisture)` : `Wet Mill Lots (15% moisture) Coming Soon`}</button>
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