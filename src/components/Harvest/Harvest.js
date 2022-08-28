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

const Harvest = ({

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

}) => {

    // Summarizing Coffee Cherry Total Weight
    let coffeeCherryTotalWeight = 0;

    if (harvestLots) {

        coffeeCherryTotalWeight = harvestLots.reduce(function (acc, obj) { return acc + parseFloat(obj.absorbedWeight); }, 0);

    }

    return (

        <div style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='farming'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>Harvest</h2>
                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#000' }}></div>

                <Row id='harvest' style={{ 'padding-top': '1em' }}>

                    <Col md='12' lg='6'>

                        {/* <h3 style={{ 'padding-bottom': '0.5em' }}>Harvest</h3> */}

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
            </Container>
        </div >
    );
}

export default Harvest;