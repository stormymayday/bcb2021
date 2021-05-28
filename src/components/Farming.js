import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Farming = (props) => {

    // Render Test
    // console.log('Hello from farming');

    const [totalAbsorbedWeight, setTotalAbsorbedWeight] = useState('fetching data from BEXT');

    const [totalDePulpedWeight, setTotalDePulpedWeight] = useState('fetching data from BEXT');

    const [dePulpedDates, setdePulpedDates] = useState('fetching data from BEXT');

    // Placeholder object
    const lotData = {};

    // Absorbed Weights array
    const absorbedWeights = [];

    // De-pupled Weights array
    const dePupledWeights = [];

    // De-pluped Dates array
    const dePupledDates = [];

    let sumOfAbsorbedWeights;

    let sumOfDePupledWeights;

    // Object.keys(props.lotHistory).forEach(async function (key) {

    //     if (props.lotHistory[key].nodeId === '0270eada-dbb8-45dc-a38d-cffc166d87ea') {

    //         // Getting the lotIDs Array
    //         const lotIDs = props.lotHistory[key].lotIds;

    //         // console.log(lotIDs);

    //         for (let i = 0; i < lotIDs.length; i++) {
    //             // API call and object assignment
    //             Object.assign(lotData,
    //                 await fetch(`${process.env.REACT_APP_GET_LOT}/${lotIDs[i]}`, {
    //                     method: 'GET',
    //                     headers: {
    //                         'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //                     }
    //                 }).then(res => res.json()));

    //             // Getting Absorbed Weight in integer format
    //             absorbedWeights[i] = parseInt(lotData.absorbedWeight);

    //             // Getting De-Pupled Weight in integer format
    //             dePupledWeights[i] = parseInt(lotData.currentWeight);

    //             // Capturing De-Pupled Date into the array
    //             dePupledDates[i] = lotData.customData['De-PulpingDate.MeasureTime'].dateTimeValue;
    //         }

    //         // Getting the sum of Absorbed Weights
    //         sumOfAbsorbedWeights = absorbedWeights.reduce((accumulator, currentValue) => {
    //             return accumulator + currentValue;
    //         }, 0);

    //         // Getting the sum of De-Pupled Weight Weights
    //         sumOfDePupledWeights = dePupledWeights.reduce((accumulator, currentValue) => {
    //             return accumulator + currentValue;
    //         }, 0);

    //         // Sorting the De-Pupled Dates Array
    //         dePupledDates.sort();

    //         // Testing
    //         // console.log(sumOfAbsorbedWeights, sumOfDePupledWeights, dePupledDates[0], dePupledDates[dePupledDates.length - 1]);

    //         setTotalAbsorbedWeight(`${sumOfAbsorbedWeights} Lbs`);

    //         setTotalDePulpedWeight(`${sumOfDePupledWeights} Lbs`);

    //         setdePulpedDates(`${dePupledDates[0]} and ${dePupledDates[dePupledDates.length - 1]}`);

    //     }

    // });

    return (
        <div style={{ 'padding-top': '4em', 'padding-bottom': '4em' }} id='farming'>
            <Container>

                <h2 style={{ 'margin-bottom': '2rem' }}>Farmer</h2>
                {/* <h3 style={{ 'margin-bottom': '1rem' }}>Harvest</h3> */}


                <Row>

                    <Col md>

                        <Card border="dark" style={{ 'margin-bottom': '2rem' }}>

                            {/* <Card.Img variant="top" src={slideOne} style={{ 'height': '20rem' }} /> */}
                            <Card.Body>
                                <Card.Title>Harvest</Card.Title>
                                <Card.Text>
                                    City: <br />
                                    State: <br />
                                    Total Absorbed Weight: <br />
                                    Total number of harvest lots:
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" src={props.pickerImage} style={{ 'max-height': '40rem' }} />
                        </Card>

                    </Col>

                </Row>

                <Row>

                </Row>

                {/* <h3 style={{ 'margin-bottom': '1rem' }}>Wet Mill</h3> */}



                <Row>

                    <Col md>

                        <Card border="dark">
                            <Card.Body>
                                <Card.Title>Wet Mill</Card.Title>
                                <Card.Text>
                                    Total Absorbed Weight: <br />
                                    Total number of wet mill lots:
                                </Card.Text>
                            </Card.Body>
                            {/* <video style={{ 'height': '20rem' }} src={props.dePulpingVideo} controls></video> */}
                        </Card>
                    </Col>

                </Row>

            </Container>
        </div >
    );
}

export default Farming;