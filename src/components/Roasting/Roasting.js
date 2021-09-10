import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import qcclogo from '../../images/qc-logo-p-500.png';
import oldSoullogo from '../../images/oldsoullogo-trans.png';

import Button from 'react-bootstrap/Button';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Pagination from '../../components/Pagination/Pagination';
import paginate from '../../utils';

import './Roasting.css';

export const Roasting = ({

    farmerName

}) => {

    return (

        <div className="roasting-section-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='roasting'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Roasting</h2>
                <div className='underline' style={{ 'margin-bottom': '3em', 'background': '#fff' }}></div>

                <Card
                    className="text-center"
                    border="light"
                    text='light'
                    style={{ 'background-color': 'transparent', 'margin-bottom': '1rem' }}>

                    <Card.Body>

                        {
                            farmerName === 'Claudia & Juan'
                                ?
                                <a href="https://queencitycollectivecoffee.com/" target="_blank">

                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50"
                                        variant="top"
                                        src={qcclogo}
                                        style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                    />

                                </a>
                                :
                                <a href="https://oldsoulco.com/" target="_blank">

                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50 img-thumbnail"
                                        variant="top"
                                        src={oldSoullogo}
                                        style={{ 'margin-bottom': '1rem', 'margin-top': '1rem', 'max-width': '40%' }}
                                    />

                                </a>
                        }
                        {
                            farmerName === 'Claudia & Juan'
                                ?
                                <Card.Text>
                                    {/* <h3 style={{ color: 'white' }}>Queen City Collective Coffee</h3> */}
                                    Queen City is a collective coffee company in Denver building community from farm to cup. Our coffee comes from farmers and producers we know, and is then small-batch roasted in the city we love. We believe that honest relationships, from farmers to consumers, achieve an equitable and sustainable coffee supply chain.
                                </Card.Text>
                                :
                                <Card.Text >
                                    {/* <h3 style={{ color: 'white' }}>Queen City Collective Coffee</h3> */}
                                    We are skilled roasters, artisans, and neighbors. We are a platform for local farmers, brewers and purveyors. We are a community space and eatery that connects and celebrates its patrons.
                                </Card.Text>
                        }
                        {

                            farmerName === 'Claudia & Juan'
                                ?

                                <Button
                                    variant="outline-light"
                                    href={'https://queencitycollectivecoffee.com/'}
                                    target="_blank"
                                >
                                    <b>Shop</b>
                                </Button>
                                :
                                <Button
                                    variant="outline-light"
                                    href={'https://oldsoulco.com/'}
                                    target="_blank"
                                >
                                    <b>Shop</b>
                                </Button>

                        }

                    </Card.Body>
                </Card>

                <Row>

                    <Col lg='12'>

                        <h3 style={{ 'padding-top': '0.5em', 'color': 'white' }}>Roaster Intake</h3>

                        <p style={{ 'color': 'white' }}>

                            Location: <b>Coming Soon</b><br />

                            Green Coffee Total Weight: <b>Coming Soon</b><br />

                        </p>

                        <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <button className='bttn bttn-primary'>Roaster Intake Lots (Coming Soon)</button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        {/* <Pagination

                                            lots={coffeeGreenLots ? paginate(coffeeGreenLots) : []}

                                        /> */}

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p style={{ 'color': 'white' }}>The importer sends the bags of green coffee to the roastery where the coffee is roasted.</p>

                    </Col>
                </Row>

                <Row>

                    <Col lg='12'>

                        <h3 style={{ 'padding-top': '0.5em', 'color': 'white' }}>Roasting</h3>

                        <p style={{ 'color': 'white' }}>

                            Location: <b>Coming Soon</b><br />

                            Weight: <b>Coming Soon</b><br />

                        </p>
                        <Accordion style={{ 'margin-bottom': '3.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <button className='bttn bttn-primary'>Roasting Lots (Coming Soon)</button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        {/* <Pagination

                                    lots={harvestLots ? paginate(harvestLots) : []}

                                /> */}

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

export default Roasting;