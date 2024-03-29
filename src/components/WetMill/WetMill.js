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

const WetMill = ({

    farmerPicture,

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

    let wetParchmentLots = [];

    // Filtering Wet Parchment Lots
    if (wetMillLots) {

        wetParchmentLots = wetMillLots.filter(function (wetMillLot) {
            return wetMillLot.productName === 'Wet Parchment';
        });

    }

    let wetParchmentTotalWeight = 0;

    if (wetParchmentLots) {

        wetParchmentTotalWeight = wetParchmentLots.reduce(function (acc, obj) { return acc + parseFloat(obj.absorbedWeight); }, 0);

    }

    // This Splitting is no longer used
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

    // This splitting is no longer used

    return (

        <div style={{ 'padding-top': '2em', 'padding-bottom': '4em' }} id='farming'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>Wet Mill</h2>
                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#000' }}></div>

                <Row>

                    <Col md='12' lg='6'>

                        {/* <h3 style={{ 'padding-bottom': '0.5em' }}></h3> */}

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
                                        Wet Parchment Total Weight: <b>{wetParchmentTotalWeight} {wetMillLots[0].absorbedWeightUnit.endsWith('s') ? wetMillLots[0].absorbedWeightUnit : wetMillLots[0].absorbedWeightUnit + 's'}</b><br />

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
                            <button className='bttn bttn-primary'>{filteredWetMillLots50 ? `Wet Parchment Lots` : `Wet Parchment Lots Coming Soon`}</button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>



                                <Pagination

                                    lots={filteredWetMillLots50 ? paginate(filteredWetMillLots50) : []}

                                />


                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    {/* <Card>
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
                    </Card> */}
                </Accordion>

            </Container>
        </div >
    );
}

export default WetMill;