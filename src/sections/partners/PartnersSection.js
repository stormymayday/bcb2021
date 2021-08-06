import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import bextlogo from '../../images/BextLogoWhite.png';
import idelogo from '../../images/IDE_logo_white.png';

import Button from 'react-bootstrap/Button';

import './PartnersSection.styles.css';


export const PartnersSection = () => {
    return (

        <div className="economics-section-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='partners'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Partners</h2>

                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#fff' }}></div>

                <p style={{ color: 'white' }}>In June 2020 iDE With Bext360’s help set out to answer some important questions:</p>

                <ul style={{ color: 'white' }}>

                    <li>
                        - How to implement blockchain technology to track goods in a value chain?
                    </li>
                    <li>
                        - What level of transparency can be achieved?
                    </li>
                    <li>
                        - Is that valuable to exporters, roasters and end customers in the value chain?
                    </li>
                    <li>
                        - And finally, if indeed people did find this transparency to be valuable, how might we translate this into meaningful benefits for producers around the world?
                    </li>

                </ul>

                <Row style={{ 'padding-top': '2rem' }}>

                    <Col lg={6} sm={12}>

                        <Card
                            className="text-center"
                            border="light"
                            text='light'
                            style={{ 'background-color': 'transparent', 'margin-bottom': '2rem' }}>

                            <Card.Body>
                                <a href="https://www.bext360.com/" target="_blank">

                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50"
                                        variant="top"
                                        src={bextlogo}
                                        style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                    />

                                </a>
                                <Card.Text>
                                    Bext360 provides comprehensive and measurable accountability for critical supply chains. The SaaS platform provides unsurpassed blockchain traceability and quantifiable measurements for sustainability. Bext360 focuses on supply chains such as coffee, seafood, timber, minerals, cotton and palm oil to provide a traceable fingerprint from producer to consumer. After all, how can you prove sustainability without traceability?
                                </Card.Text>
                                <Button
                                    variant="outline-light"
                                    href={'https://www.bext360.com/'}
                                    target="_blank"
                                >
                                    Learn More
                                </Button>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col lg={6} sm={12}>

                        <Card
                            className="text-center"
                            border="light"
                            text='light'
                            border='light'
                            style={{ 'background-color': 'transparent', 'margin-bottom': '2rem' }}>

                            <Card.Body>
                                <a href="https://www.ideglobal.org/" target="_blank">

                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50"
                                        variant="top"
                                        src={idelogo}
                                        style={{ 'max-width': '9.3rem', 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                    />

                                </a>
                                <Card.Text>
                                    One entrepreneur can change their community, and millions can change the world.
                                    We believe that the best way to end poverty is to empower entrepreneurs. iDE coaches businesses that improve their communities and stimulates the market ecosystems in which they operate, helping them to succeed and multiply. In addition to economic prosperity, we ensure these sustainable businesses create gender equity, protect the natural environment, and build resilience to climate change. By scaling up our model, these entrepreneurs will change the world.
                                </Card.Text>
                                <Button
                                    variant="outline-light"
                                    href={'https://www.ideglobal.org/'}
                                    target="_blank"
                                >
                                    Learn More
                                </Button>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default PartnersSection;