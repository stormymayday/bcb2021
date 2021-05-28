import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Journey = (props) => {

    // Converting Green Export Video
    // const greenExportVideo = 'data:video/mp4;base64,' + props.greenExportVideo;

    // Converting Intake Image
    // const greenImportImage = 'data:image/jpg;base64,' + props.greenImportImage;

    // Converting Green Export Video
    // const intakeGreenVideo = 'data:video/mp4;base64,' + props.intakeGreenVideo;

    return (
        <div style={{ 'padding-top': '4em', 'padding-bottom': '4em' }} id='journey'>
            <Container>

                <h2 style={{ 'margin-bottom': '3rem' }}>Export, Import, and Intake</h2>

                <Row>

                    <Col lg>
                        <Card border="light" style={{ 'margin-bottom': '2rem' }}>
                            <Card.Body>
                                <Card.Title>Green Export</Card.Title>
                                <Card.Text>
                                    Exported From: {props.exportedFrom}<br />
                                    Date: {props.greenExportDate}<br />
                                    Weight: {props.greenExportWeight}
                                </Card.Text>
                            </Card.Body>
                            {/* <video style={{ 'max-height': '40rem' }} src={props.greenExportVideo} controls></video> */}
                        </Card>
                    </Col>

                    <Col lg>
                        <Card border="light" style={{ 'margin-bottom': '2rem' }}>
                            <Card.Body>
                                <Card.Title>Green Import</Card.Title>
                                <Card.Text>
                                    Imported At: {props.greenImportLocation}<br />
                                    Date: {props.greenImportDate}
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" src={props.greenImportImage} style={{ 'max-height': '40rem' }} />
                        </Card>
                    </Col>

                    <Col lg>
                        <Card border="light">
                            <Card.Body>
                                <Card.Title>Green Intake</Card.Title>
                                <Card.Text>
                                    Roaster Received in: {props.intakeGreenLocation}<br />
                                    Date: {props.intakeGreenDate}<br />
                                    Current Weight Remaining: {props.intakeGreenWeight}<br />
                                    Received by: {props.intakeGreenCollector}
                                </Card.Text>
                            </Card.Body>
                            {/* <video style={{ 'max-height': '40rem' }} src={props.intakeGreenVideo} controls></video> */}
                        </Card>
                    </Col>

                </Row>
                <Row>

                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer>



                </Row>

            </Container>
        </div>
    );
}

export default Journey;