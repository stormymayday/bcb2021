import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

import LeafletMap from './LeafletMap/LeafletMap';

import JourneyMap from './JourneyMap/JourneyMap';

import royalcoffeelogo from '../images/royalcoffeelogo.png';

export const Import = ({

    farmerName,
    longitude,
    latitude,

    nodeCoordinates

}) => {

    // Converting Green Export Video
    // const greenExportVideo = 'data:video/mp4;base64,' + props.greenExportVideo;

    // Converting Intake Image
    // const greenImportImage = 'data:image/jpg;base64,' + props.greenImportImage;

    // Converting Green Export Video
    // const intakeGreenVideo = 'data:video/mp4;base64,' + props.intakeGreenVideo;

    return (
        <div style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='import'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>Import</h2>
                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#000' }}></div>

                <Card
                    className="text-center"
                    border="Dark"
                    text='Dark'
                    style={{
                        'background-color': 'transparent',
                        'margin-bottom': '1rem',
                        'border-color': '#000'
                    }}
                >

                    <Card.Body>

                        {/* <a href="https://www.catrachacoffee.com/" target="_blank">

                            <Card.Img
                                className="d-block mx-auto img-fluid w-50"
                                variant="top"
                                src={royalcoffeelogo}
                                style={{ 'padding-top': '2rem', 'padding-bottom': '2rem', 'max-width': '15rem' }}
                            />

                        </a> */}

                        <Card.Text>
                            <h3 style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}>Royal Coffee</h3>
                            Royal Coffee is a wholesale green coffee beans importer that is family-owned and operated since 1978.
                        </Card.Text>
                        <Button
                            variant="outline-dark"
                            href={'https://royalcoffee.com/'}
                            target="_blank"
                        >
                            <b>Learn More</b>
                        </Button>
                    </Card.Body>
                </Card>

                <Row>

                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-top': '0.5em' }}>Import</h3>

                        <p style={{}}>

                            Location: <b>Coming Soon</b><br />

                            Green Coffee Total Weight: <b>Coming Soon</b><br />

                        </p>

                        <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <button className='bttn bttn-primary'>Import Lots (Coming Soon)</button>
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

                        <p style={{}}>The container with bags of green coffee is shipped to a port in Oakland California and taken to the coffee importer’s warehouse.</p>

                    </Col>

                    <Col md='12' lg='6'>
                        <h3 style={{ 'padding-top': '0.5em' }}>Product's Journey</h3>
                        <JourneyMap />
                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default Import;