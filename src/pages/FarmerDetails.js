import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import HarvestList from '../components/HarvestList/HarvestList';
import Pagination from '../components/Pagination/Pagination';
import paginate from '../utils';

import { useParams, useHistory, Link } from 'react-router-dom';

// Google Analytics
import ReactGA from 'react-ga';

import { useGlobalContext } from '../context';

import Hero from '../components/Hero';
import Image from 'react-bootstrap/Image';

import slideOne from '../images/slideOne.jpg';
import slideTwo from '../images/coffee_farm.JPG';

import Jumbotron from 'react-bootstrap/Jumbotron';

// Components
import LeafletMap from '../components/LeafletMap/LeafletMap';
import FarmerDetailsPageNavigation from '../components/FarmerDetailsPageNavigation/FarmerDetailsPageNavigation';

// Sections
import HarvestSection from '../components/HarvestSection/HarvestSection';
import ProcessingSection from '../components/ProcessingSection/ProcessingSection';
import ProcessingExport from '../components/ProcessingExport/ProcessingExport';
import Roasting from '../components/Roasting/Roasting';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const FarmerDetails = (props) => {

    // Google Analytics initiazation
    // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
    // Google Analytics Page View report
    ReactGA.pageview(window.location.pathname + window.location.search);

    const { id, index } = useParams();
    const { location } = useHistory();

    const { farmers } = useGlobalContext();

    // paginate(location.state.farmer.harvestLotIds);

    const [farmer, setFarmer] = useState('');

    // Node Info
    const [city, setCity] = useState('fetching data from BEXT');
    const [state, setState] = useState('fetching data from BEXT');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [elevation, setElevation] = useState('fetching data from BEXT');

    // Totals
    const [harvestLots, setHarvestLots] = useState([]);
    const [totalAbsorbedWeight, setTotalAbsorbedWeight] = useState(0);
    const [harvestDates, setHarvestDates] = useState('fetching data from BEXT');

    const [totalAbsorbedHarvestWeight, setTotalAbsorbedHarvestWeight] = useState(0);

    // Harvest Lot (Not in use atm)
    const [currentWeight, setCurrentWeight] = useState('');
    const [currentWeightUnit, setCurrentWeightUnit] = useState('');
    const [absorbedWeight, setAbsorbedWeight] = useState('');
    const [absorbedWeightUnit, setAbsorbedWeightUnit] = useState('');
    const [harvestDate, setHarvestDate] = useState('');
    const [collectionDate, setCollectionDate] = useState('');

    // HarvestNodeLots
    const [harvestNodeLots, setHarvestNodeLots] = useState('');
    const [harvestLotIDs, setHarvestLotIDs] = useState([]);

    // MarcalaIntake
    const [marcalaIntakeLots, setMarcalaIntakeLots] = useState('');
    const [marcalaIntakeLotIds, setMarcalaIntakeLotIds] = useState([]);

    useEffect(() => {

        // Dev Test getNode
        // fetch(`${process.env.REACT_APP_GET_NODE}/${farmers[index].harvestGeneralNodeID}`, {
        //     method: 'GET',
        //     headers: {
        //         'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
        //     }
        // }).then(res => {
        //     return res.json();
        // })
        //     .then(json => {
        //         setCity(json.defaultLocation.city);
        //         setState(json.defaultLocation.state);
        //         setLatitude(json.defaultLocation.latitude);
        //         setLongitude(json.defaultLocation.longitude);
        //         setElevation(json.defaultLocation.elevation);
        //     });

        // fetch(`${process.env.REACT_APP_GET_NODE_LOT}/${farmers[index].harvestGeneralNodeID}`, {
        //     method: 'GET',
        //     headers: {
        //         'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
        //     }
        // }).then(res => {
        //     return res.json();
        // })
        //     .then(json => {

        //         setHarvestNodeLots(json);

        //     });

        // if (harvestNodeLots) {

        //     let sum = 0;

        //     let harvestLotIDsPlaceholderArray = [];

        //     for (let i = 0; i < harvestNodeLots.lots.length; i++) {

        //         if (Number.parseInt(harvestNodeLots.lots[i].lotStartWeight)) {

        //             sum += Number.parseInt(harvestNodeLots.lots[i].lotStartWeight);

        //         }

        //     }

        //     harvestLotIDsPlaceholderArray = harvestNodeLots.lots.map(x => x.id);

        //     setTotalAbsorbedHarvestWeight(sum);

        //     setHarvestLotIDs(harvestLotIDsPlaceholderArray);

        // }

    }, [harvestNodeLots]);

    return (
        <React.Fragment>
            <FarmerDetailsPageNavigation location={location} />
            <Jumbotron style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
             rgba(0, 0, 0, 0.5)),
              url(${farmers[index].farmerName === 'Claudia & Juan' ?

                        slideOne :

                        slideTwo
                    })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '93vh'
            }}
                fluid>
                <Container>
                    <h1 style={{ color: 'white' }}>{farmers[index].farmerName}</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>

            <Container>

                <Row id='harvest' style={{ 'padding-top': '4em' }}>
                    <Col md='12' lg='6'>
                        <h2>Harvest</h2><br />
                        <p>City: { }</p>

                        <p>State: { }</p>

                        <p>Longitude: { }</p>

                        <p>Latitude: { }</p>

                        <p>Elevation: { }</p>
                        <p>
                            Total number of harvest lots: {harvestNodeLots ? harvestNodeLots.lots.length : 0}
                        </p>
                        <p>
                            Total Absorbed Weight: { }
                        </p>

                    </Col>
                    <Col md='12' lg='6'>
                        {
                            longitude && latitude

                                ?

                                <LeafletMap farmer={farmers[index].farmerName} nodeId={farmers[index].harvestGeneralNodeID} longitude={longitude} latitude={latitude} />

                                :

                                ''

                        }
                    </Col>
                </Row>

                <Row>
                    <Container>

                        <Pagination

                        // harvestLotIds={paginate(farmers[index].harvestLotIds)}

                        // harvestLots={harvestLotIDs ? paginate(harvestLotIDs) : []}

                        />

                    </Container>
                </Row>

            </Container>


            <div id='processing'>


                <ProcessingExport

                // farmerIndex={farmers[index]}

                />

            </div>

            <Roasting />

        </React.Fragment>
    );
}

export default FarmerDetails;