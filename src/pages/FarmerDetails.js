import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import HarvestList from '../components/HarvestList/HarvestList';
import Pagination from '../components/Pagination/Pagination';
import paginate from '../utils';
import { useParams, useHistory, Link } from 'react-router-dom';

import { useGlobalContext } from '../context';

import Hero from '../components/Hero';
import Image from 'react-bootstrap/Image';
import slideOne from '../images/slideOne.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Components
import LeafletMap from '../components/LeafletMap/LeafletMap';
import DetailsPageNavigation from '../components/DetailsPageNavigation/DetailsPageNavigation';

// Sections
import ProcessingSection from '../components/ProcessingSection/ProcessingSection';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const FarmerDetails = (props) => {

    const { id, index } = useParams();
    const { location } = useHistory();

    const { farmers } = useGlobalContext();

    // paginate(location.state.farmer.harvestLotIds);

    const [farmer, setFarmer] = useState('');

    // Node Info
    const [city, setCity] = useState('fetching data from BEXT');
    const [state, setState] = useState('fetching data from BEXT');
    const [latitude, setLatitude] = useState('fetching data from BEXT');
    const [longitude, setLongitude] = useState('fetching data from BEXT');
    const [elevation, setElevation] = useState('fetching data from BEXT');

    // Totals
    const [harvestLots, setHarvestLots] = useState([]);
    const [totalAbsorbedWeight, setTotalAbsorbedWeight] = useState('fetching data from BEXT');
    const [harvestDates, setHarvestDates] = useState('fetching data from BEXT');

    // Harvest Lot (Not in use atm)
    const [currentWeight, setCurrentWeight] = useState('');
    const [currentWeightUnit, setCurrentWeightUnit] = useState('');
    const [absorbedWeight, setAbsorbedWeight] = useState('');
    const [absorbedWeightUnit, setAbsorbedWeightUnit] = useState('');
    const [harvestDate, setHarvestDate] = useState('');
    const [collectionDate, setCollectionDate] = useState('');

    useEffect(() => {

        // console.log(paginate(location.state.farmer.harvestLotIds));

        const getTotals = async (lotIds) => {

            // Getting the lotIDs Array
            const lotIDs = lotIds;

            // Placeholder object
            const lotData = {};

            const harvestLotsArray = [];

            // Absorbed Weights array
            const absorbedWeights = [];

            // Harvest Dates array
            const dates = [];

            let sumOfAbsorbedWeights;

            for (let i = 0; i < lotIDs.length; i++) {
                // API call and object assignment
                Object.assign(lotData,
                    await fetch(`https://bext360api.azure-api.net/retaildev/v1/getlot/${lotIDs[i]}`, {
                        method: 'GET',
                        headers: {
                            'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
                        }
                    }).then(res => res.json()));

                // Getting Absorbed Weight in integer format
                absorbedWeights[i] = parseInt(lotData.absorbedWeight);

                // Capturing De-Pupled Date into the array
                dates[i] = lotData.customData['HarvestDate.MeasureTime'].value;

                // Pushin current object into harvest lots array
                harvestLotsArray.push(lotData);
            }

            // Getting the sum of Absorbed Weights
            sumOfAbsorbedWeights = await absorbedWeights.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0);

            // Sorting the De-Pupled Dates Array
            dates.sort();

            // Testing
            // console.log(sumOfAbsorbedWeights, sumOfDePupledWeights, dePupledDates[0], dePupledDates[dePupledDates.length - 1]);

            setTotalAbsorbedWeight(`${sumOfAbsorbedWeights} Lbs`);

            setHarvestDates(`${dates[0]} and ${dates[dates.length - 1]}`);

            setHarvestLots(harvestLotsArray);
        }
        // getTotals(location.state.farmer.harvestLotIds);
        // Totals End

        // console.log(`Harvest lot ids: ${location.state.farmer.harvestLotIds}`);
        // console.log(`Harvest lots: ${harvestLots}`);

        // Dev Test getNode
        fetch(`https://bext360api.azure-api.net/retaildev/v1/getnode/${farmers[index].harvestGeneralNodeID}`, {
            method: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
            }
        }).then(res => {
            return res.json();
        })
            .then(json => {
                setCity(json.defaultLocation.city);
                setState(json.defaultLocation.state);
                setLatitude(json.defaultLocation.latitude);
                setLongitude(json.defaultLocation.longitude);
                setElevation(json.defaultLocation.elevation);
            });

        // Farmer Harvest
        // fetch(`https://bext360api.azure-api.net/retaildev/v1/getlot/${location.state.farmer.harvestLotIds[0]}`, {
        //     method: 'GET',
        //     headers: {
        //         'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
        //     }
        // }).then(res => res.json())
        //     .then(json => {

        //         setCurrentWeight(json.currentWeight);
        //         setCurrentWeightUnit(json.currentWeightUnit);
        //         setAbsorbedWeight(json.absorbedWeight);
        //         setAbsorbedWeightUnit(json.absorbedWeightUnit);

        //         setHarvestDate(json.customData['HarvestDate.MeasureTime'].value);
        //         setCollectionDate(json.customData['CollectionDate.MeasureTime'].value);

        //     });

        // Getting Harvest Lot objects
        // useState(location.state.farmer.harvestLotIds);
        // for (let i = 0; i < location.state.farmer.harvestLotIds.length; i++) {

        //     await fetch(`https://bext360api.azure-api.net/retaildev/v1/getlot/${location.state.farmer.harvestLotIds[i]}`, {
        //         method: 'GET',
        //         headers: {
        //             'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
        //         }
        //     }).then(res => res.json())
        //         .then(json => {
        //             setHarvestLot(json);
        //         });
        // }

        // console.log(`Api Key: ${process.env.REACT_APP_API_KEY}`);

    }, [])

    // for (let i = 0; i < location.state.farmer.harvestLotIds.length; i++) {
    //     console.log(`Harvest ID: ${location.state.farmer.harvestLotIds[i]}`);
    // }
    // console.log(`Testing harveset lots object: ${JSON.stringify(harvestLots)}`);
    // console.log(`Testing absorbed weight: ${absorbedWeight}`);

    return (
        <React.Fragment>
            <DetailsPageNavigation location={location} />
            <Jumbotron style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideOne})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh' }} fluid>
                <Container>
                    {/* <h1 style={{ color: 'white' }}>{location.state.farmer.farmerName}</h1> */}
                    <h1 style={{ color: 'white' }}>{farmers[index].farmerName}</h1>
                    {/* <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p> */}
                </Container>
            </Jumbotron>
            {/* <Hero /> */}
            {/* <Image src={slideOne} style={{}} /> */}
            {/* <div style={{ 'padding-top': '3rem', 'padding-bottom': '4em' }} id='farming'> */}
            <Container>
                {/* <Row>
                    <h1 style={{ 'margin-bottom': '1rem' }}>{location.state.farmer.farmerName}</h1>
                </Row> */}

                <Row id='harvest'>
                    <Col md='12' lg='6'>
                        <h2>Harvest</h2><br />
                        <p>City: {city}</p>

                        <p>State: {state}</p>

                        <p>Longitude: {longitude}</p>

                        <p>Latitude: {latitude}</p>

                        <p>Elevation: {elevation}</p>
                    </Col>
                    <Col md='12' lg='6'>
                        <LeafletMap farmer={farmers[index].farmerName} nodeId={farmers[index].harvestGeneralNodeID} longitude={longitude} latitude={latitude} />
                    </Col>
                </Row>
                <Row>
                    <h3>Farmer Harvest</h3>
                </Row>
                {/* <Row>
                    <p>Current weight: {currentWeight} {currentWeightUnit}</p>
                </Row>
                <Row>
                    <p>Absorbed weight: {absorbedWeight} {absorbedWeightUnit}</p>
                </Row>
                <Row>
                    <p>Harvest date: {harvestDate}</p>
                </Row>
                <Row>
                    <p>Collection date: {collectionDate}</p>
                </Row> */}
                <Row>
                    Total Absorbed Weight: {totalAbsorbedWeight}
                </Row>
                <Row>
                    Harvested between: {harvestDates}
                </Row>
                {/* <Row>
                    <HarvestList harvestLotIds={location.state.farmer.harvestLotIds} />
                </Row> */}
                <Row>
                    <Pagination numberOfLots={farmers[index].harvestLotIds.length} harvestLotIds={paginate(farmers[index].harvestLotIds)} />
                </Row>

                <Row id='processing'>
                    <ProcessingSection numberOfLots={farmers[index].processingLotIds.length} processingLotIds={farmers[index].processingLotIds} />
                </Row>
                <Row>
                    <p>Coming Soon</p>
                </Row>

                <Row>
                    <h2>Intake</h2>
                </Row>
                <Row>
                    <p>Coming Soon</p>
                </Row>

                <Row>
                    <h2>Export</h2>
                </Row>
                <Row>
                    <p>Coming Soon</p>
                </Row>

                <Row>
                    <h2>Import</h2>
                </Row>
                <Row>
                    <p>Coming Soon</p>
                </Row>

                <Row>
                    <h2>Roasting</h2>
                </Row>
                <Row>
                    <p>Coming Soon</p>
                </Row>

            </Container>
            {/* </div > */}
        </React.Fragment>
    );
}

export default FarmerDetails;