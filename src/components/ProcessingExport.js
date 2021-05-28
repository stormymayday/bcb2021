import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import './ProcessingExport.css';


export const ProcessingExport = (props) => {

    // Converting Intake Image
    // const catrachaIntakeImage = 'data:image/jpg;base64,' + props.catrachaIntakeImage;

    // Converting Milling Video
    // const millingVideo = 'data:video/mp4;base64,' + props.millingVideo;

    // Converting Milling Image
    // const millingImage = 'data:image/jpg;base64,' + props.millingImage;

    const [totalIntakeWeight, setTotalIntakeWeight] = useState('fetching data from BEXT');

    const [intakeDates, setIntakeDates] = useState('fetching data from BEXT');

    const [paymentsTotal, setPaymentsTotal] = useState('fetching data from BEXT');

    // Object.keys(props.lotHistory).forEach(async function (key) {

    //     if (props.lotHistory[key].nodeId === '01b66b57-c0a0-481c-abb0-57be005096da') {

    //         // Getting the lotIDs Array
    //         const lotIDs = props.lotHistory[key].lotIds;

    //         // console.log(lotIDs);

    //         // Placeholder object
    //         const lotData = {};

    //         // Weights array
    //         const weights = [];

    //         // Money array
    //         const payments = [];

    //         // Dates array
    //         const intakeDates = [];

    //         for (let i = 0; i < lotIDs.length; i++) {
    //             // API call and object assignment
    //             Object.assign(lotData,
    //                 await fetch(`${process.env.REACT_APP_GET_LOT}/${lotIDs[i]}`, {
    //                     method: 'GET',
    //                     headers: {
    //                         'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //                     }
    //                 }).then(res => res.json()));

    //             // Getting Current Weight in integer format
    //             weights[i] = parseInt(lotData.currentWeight);

    //             // Placing Transaction Date value into a string variable
    //             const str = lotData.customData['TransactionDate.MeasureTime'].dateTimeValue;


    //             // Slicing off first 10 characters
    //             const intakeDate = str.slice(0, 10);


    //             // Capturing Intake Date into the array
    //             intakeDates[i] = intakeDate;

    //             // Capturing TotalValue.Measure into the array
    //             payments[i] = parseInt(lotData.customData["TotalValue.Measure"].value);

    //         }

    //         // Getting the sum of weights
    //         const sumOfWeights = weights.reduce((accumulator, currentValue) => {
    //             return accumulator + currentValue;
    //         }, 0);

    //         // Getting the sum of payments
    //         const sumOfPayments = payments.reduce((accumulator, currentValue) => {
    //             return accumulator + currentValue;
    //         }, 0);

    //         // Sorting the Dates Array
    //         intakeDates.sort();

    //         // Testing
    //         console.log(props.marcalaIntakeLotIds);

    //         setTotalIntakeWeight(`${sumOfWeights} Lbs from ${weights.length} separate intakes`);

    //         setIntakeDates(`${intakeDates[0]} and ${intakeDates[intakeDates.length - 1]}`);

    //         setPaymentsTotal(`${(sumOfPayments / 24.5).toFixed(2)} USD`);
    //     }

    // });

    return (
        <div className="processing-section-bg" style={{ 'padding-top': '4em', 'padding-bottom': '4em' }} id='processing-export'>
            <Container>

                <h2 style={{ color: 'white' }}>Catracha Coffee</h2>
                <p style={{ color: 'white' }}>A social enterprise dedicated to accessing the specialty coffee market for coffee farmers in Santa Elena, La Paz, Honduras.</p>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <Button variant="outline-light" size="lg" block style={{ 'margin-bottom': '2rem' }}>LEARN MORE</Button>
                    </Col>
                </Row>

                <Row>

                    <Col lg>

                        <Card border="light" text='light' border='light' style={{ 'background-color': 'transparent', 'margin-bottom': '2rem' }}>
                            <Card.Body>
                                <Card.Title>Intake</Card.Title>
                                <Card.Text>
                                    Total Weight: {totalIntakeWeight}<br />
                                    Number of Intake lots: {totalIntakeWeight}<br />
                                    {/* Intake Dates between: {intakeDates}<br />
                                    Payments total: {paymentsTotal}<br /> */}
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" src={props.catrachaIntakeImage} style={{ 'max-height': '40rem' }} />
                        </Card>

                    </Col>

                </Row>

                <Row>

                    <Col lg>

                        <Card border="light" text='light' border='light' style={{ 'background-color': 'transparent' }}>
                            <Card.Body>
                                <Card.Title>Wet Mill</Card.Title>
                                <Card.Text>
                                    Total Weight: {totalIntakeWeight}<br />
                                    Number of Wetl Mill lots: {totalIntakeWeight}<br />
                                    {/* Milled on: {props.milledOnDate}<br />
                                    Miller: {props.miller}<br />
                                    Location: {props.millingLocation}<br />
                                    Lot Current Weight: {props.lotCurrentWeight} */}
                                </Card.Text>
                            </Card.Body>
                            {/* <video style={{ 'max-height': '40rem' }} src={props.millingVideo} controls></video> */}
                            <Card.Img variant="top" src={props.millingImage} style={{ 'max-height': '40rem' }} />
                        </Card>

                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default ProcessingExport;