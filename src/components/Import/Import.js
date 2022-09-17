import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

import LeafletMap from '../LeafletMap/LeafletMap';

import ReactPlayer from 'react-player';

import JourneyMap from '../JourneyMap/JourneyMap';

import Pagination from '../../components/Pagination/Pagination';
import paginate from '../../utils';

import portOakland from '../../images/ronan-furuta-daSq9zhROxY-unsplash.jpg';
import crownJewelImage from '../../images/Crown-Jewel-Box-Cover.png';

export const Import = ({

    importerLogo,

    farmerName,
    longitude,
    latitude,

    nodeCoordinates,

    importNode,
    importLots,

    crownJewel

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
                    text='light'
                    style={{ 'background-color': 'transparent', 'margin-bottom': '1rem', 'border-color': '#000' }}
                >

                    <Card.Body
                        style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${portOakland})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        {
                            // importNode

                            //     ?

                            //     <>

                            //         <a href="https://royalcoffee.com/" target="_blank">

                            //             <Card.Img
                            //                 className="d-block mx-auto img-fluid w-50"
                            //                 variant="top"
                            //                 src={importerLogo}
                            //                 style={{ 'padding-top': '2rem', 'padding-bottom': '2rem', 'max-width': '15rem' }}
                            //             />

                            //         </a>

                            //     </>

                            //     :

                            //     null

                        }


                        <Card.Text>

                            {
                                // importNode

                                //     ?

                                //     null

                                //     :

                                <h3 style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}>Royal Coffee</h3>

                            }

                            Royal Coffee is a wholesale green coffee beans importer that is family-owned and operated since 1978.
                        </Card.Text>
                        <Button
                            variant="outline-light"
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

                            Location: <b>
                                {importNode ? importNode.city + ', ' + importNode.state : "Coming Soon"}
                            </b><br />

                            Green Coffee Total Weight: <b>

                                {
                                    importLots

                                        ?

                                        importLots[0].absorbedWeight + ' ' +

                                        (
                                            importLots[0].absorbedWeightUnit.endsWith('s')

                                                ?

                                                importLots[0].absorbedWeightUnit

                                                :

                                                importLots[0].absorbedWeightUnit + 's'
                                        )

                                        :

                                        `Coming Soon`
                                }

                            </b><br />

                        </p>

                        <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <button className='bttn bttn-primary'>{importLots ? `Import Lots` : `Import Lots (Coming Soon)`}</button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        <Pagination

                                            lots={importLots ? paginate(importLots) : []}

                                        />

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p style={{}}>The container with bags of green coffee is shipped to a port in Oakland California and taken to the coffee importer’s warehouse.</p>

                    </Col>

                    <Col md='12' lg='6'>
                        <h3 style={{ 'padding-top': '0.5em' }}>Product's Journey</h3>
                        {
                            importNode

                                ?

                                <JourneyMap />

                                :

                                <p><b>Coming Soon</b></p>

                        }

                    </Col>

                </Row>



                {/* Crown Jewel Section */}
                {
                    farmerName === 'null'

                        ?
                        <>

                            <Card
                                className="text-center"
                                border="Dark"
                                text='Dark'
                                style={{
                                    'background-color': 'transparent',
                                    'margin-bottom': '1rem',
                                    'margin-top': '3rem',
                                    'border-color': '#000'
                                }}
                            >

                                <Card.Body>

                                    <a href="https://royalcoffee.com/product/cj1458/" target="_blank">

                                        {/* <Card.Img
                                            className="d-block mx-auto img-fluid w-50"
                                            variant="top"
                                            src={crownJewelImage}
                                            style={{ 'max-width': '20rem' }}
                                        /> */}
                                    </a>

                                    <div
                                        style={{

                                            'position': 'relative',
                                            'padding-top': '56.25%'

                                        }}
                                    >
                                        <ReactPlayer
                                            url="https://vimeo.com/643996958"
                                            width="100%"
                                            height="100%"
                                            controls
                                            style={{

                                                'position': 'absolute',
                                                'top': '0',
                                                'left': '0'

                                            }}
                                        />
                                    </div>



                                    <Card.Title

                                        style={{

                                            'margin-top': '1rem',

                                        }}

                                    >
                                        Crown Jewel
                                    </Card.Title>



                                    <Card.Text>
                                        This coffee has been chosen for its high quality by Royal as one of its Crown Jewels! It is available to be directly purchased by you!
                                    </Card.Text>
                                    <Button
                                        variant="outline-dark"
                                        href={'https://royalcoffee.com/product/cj1458/'}
                                        target="_blank"
                                    >
                                        <b>Learn More</b>
                                    </Button>
                                </Card.Body>
                            </Card>

                        </>

                        :

                        null

                }

            </Container>
        </div>
    );
}

export default Import;