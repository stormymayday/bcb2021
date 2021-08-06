import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import Button from 'react-bootstrap/Button';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Pagination from '../components/Pagination/Pagination';
import paginate from '../utils';

import './Roasting.css';

export const Roasting = (props) => {

    return (

        <div className="roasting-section-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='roasting'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Roasting</h2>
                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#fff' }}></div>


                <h3 style={{ color: 'white' }}>Roasted by Queen City</h3>
                <p style={{ color: 'white' }}>Queen City is a collective coffee company in Denver building community from farm to cup. Our coffee comes from farmers and producers we know, and is then small-batch roasted in the city we love. We believe that honest relationships, from farmers to consumers, achieve an equitable and sustainable coffee supply chain.</p>

                <Button
                    variant="outline-light"
                    href={'https://queencitycollectivecoffee.com/'}
                    target="_blank"
                >Shop</Button>

                <Row>

                    <Col lg>

                    </Col>
                </Row>

                <Accordion style={{ 'margin-top': '3rem', 'margin-bottom': '3.5rem' }}>
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

            </Container>
        </div>
    );
}

export default Roasting;