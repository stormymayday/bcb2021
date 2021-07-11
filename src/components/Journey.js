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

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Green Export</h3>

                        <p>The green coffee is packaged in 69 kg bags and placed inside of a shipping container for export.  A container can hold up to 275 bags of green coffee</p>

                        <p>
                            Location: {props.exportedFrom}
                            <br />
                            Date: {props.greenExportDate}
                        </p>

                    </Col>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Green Import</h3>

                        <p>The container with bags of green coffee is shipped to a port in Oakland California and taken to the coffee importer’s warehouse</p>

                        <p>
                            Location: {props.exportedFrom}
                            <br />
                            Date: {props.greenExportDate}
                        </p>

                    </Col>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Green Intake</h3>

                        <p>The importer sends the bags of green coffee to the roastery where the coffee is roasted</p>

                        <p>
                            Location: {props.exportedFrom}
                            <br />
                            Date: {props.greenExportDate}
                        </p>

                    </Col>

                </Row>

                <Row>

                    <Col lg='12'>

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

                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default Journey;