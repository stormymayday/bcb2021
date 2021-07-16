import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import LeafletMap from '../components/LeafletMap/LeafletMap';

export const Journey = ({

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
        <div style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='journey'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.4em', 'text-align': 'center' }}>Product's Journey</h2>
                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#000' }}></div>

                <Row>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Export</h3>

                        <p>
                            Location: <b>Puerto Cortes</b>
                            <br />
                        </p>

                        <LeafletMap name={`Puerto Cortes`} longitude={'-87.943893'} latitude={'15.845310'} nodeCoordinates={nodeCoordinates} />

                        <p style={{ 'padding-top': '2em', 'padding-bottom': '2em' }}>The green coffee is packaged in 69 kg bags and placed inside of a shipping container for export.  A container can hold up to 275 bags of green coffee</p>


                    </Col>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Import</h3>

                        <p>
                            Location: <b>Port Houston</b>
                            <br />
                        </p>

                        <LeafletMap name={'Port Houston'} longitude={'-95.280980'} latitude={'29.768000'} nodeCoordinates={nodeCoordinates} />

                        <p style={{ 'padding-top': '2em', 'padding-bottom': '2em' }}>The container with bags of green coffee is shipped to a port in Oakland California and taken to the coffee importer’s warehouse</p>

                    </Col>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Roaster Intake</h3>

                        <p>
                            Location: <b>Denver, CO</b>
                            <br />
                        </p>

                        <LeafletMap name={'Queen City Collective Coffee'} longitude={'-104.991531'} latitude={'39.742043'} nodeCoordinates={nodeCoordinates} />

                        <p style={{ 'padding-top': '2em', 'padding-bottom': '2em' }}>The importer sends the bags of green coffee to the roastery where the coffee is roasted</p>

                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default Journey;