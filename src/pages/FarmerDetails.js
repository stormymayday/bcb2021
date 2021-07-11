import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import HarvestList from '../components/HarvestList/HarvestList';
import Pagination from '../components/Pagination/Pagination';
import paginate from '../utils';

import { useParams, useHistory, useLocation, Link } from 'react-router-dom';

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
import Farming from '../components/Farming';



import HarvestSection from '../components/HarvestSection/HarvestSection';
import ProcessingSection from '../components/ProcessingSection/ProcessingSection';
import ProcessingExport from '../components/ProcessingExport/ProcessingExport';
import Roasting from '../components/Roasting/Roasting';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const FarmerDetails = () => {

    // Google Analytics initiazation
    // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
    // Google Analytics Page View report
    ReactGA.pageview(window.location.pathname + window.location.search);

    let { name } = useParams();

    const { farmersMongoDB } = useGlobalContext();

    const { location } = useLocation();

    const [farmer, setFarmer] = useState({});

    console.log(`Farmer Details Page: ${name}`);


    // console.log(`Farmer Details Page: ${farmersMongoDB[0].farmerName}`);
    // console.log(`Farmer Details Page: ${farmer.farmerName}`);


    useEffect(() => {

        if (farmersMongoDB.length > 0) {

            console.log(`Farmers from MongoDB: ${farmersMongoDB[0].farmerName}`);
            console.log(`Router Location: ${name}`);


            // Filtering farmer based on farmerName
            const thisFarmer = farmersMongoDB.filter(function (value) {

                // console.log(`HELLO FROM FILTER METHOD ${farmersMongoDB[0].farmerName}`);

                console.log(`Value from filter method ${value.farmerName}`);

                return value.farmerName === name && setFarmer(value);;

            });

            // console.log(`thisFarmer filtered array: ${thisFarmer}`);

            // setFarmer(thisFarmer);

            // console.log(`Farmer state variable: ${farmer}`);

            // console.log(`farmersMongoDB array: ${farmersMongoDB}`);

        }

    }, [farmersMongoDB]);

    return (

        <main>

            <FarmerDetailsPageNavigation location={location} />

            {farmer.harvestNode ?

                <>
                    <Jumbotron style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)),
                        url(${farmer.harvestNode.images[0]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '93vh'
                    }}
                        fluid>
                        <Container>
                            <h1 style={{ color: 'white' }}>{farmer.farmerName}</h1>
                        </Container>
                    </Jumbotron>

                    <Container>

                        <Row id='harvest' style={{ 'padding-top': '4em' }}>

                            <Farming

                                farmerName={farmer.farmerfarmerName}
                                farmerPicture={farmer.harvestNode.images[0]}
                                city={farmer.harvestNode.city}
                                state={farmer.harvestNode.state}
                                country={farmer.harvestNode.country}
                                elevation={farmer.harvestNode.elevation}
                                longitude={farmer.harvestNode.longitude}
                                latitude={farmer.harvestNode.latitude}
                                elevationUnit={farmer.harvestNode.elevationUnit}
                                harvestTotalAbsorbedWeight={farmer.harvestNode.totaAbsorbedWeight}
                                harvestTotalAbsorbedWeightUnit={farmer.harvestNode.totalAbsorbedWeightUnit}
                                numberOfHarvestLots={farmer.harvestNode.harvestLots.length}

                                wetMilltTotalAbsorbedWeight={farmer.wetMillNode.totaAbsorbedWeight}
                                wetMillTotalAbsorbedWeightUnit={farmer.wetMillNode.totalAbsorbedWeightUnit}

                                harvestLots={farmer.harvestNode.harvestLots}

                                wetMillLots={farmer.wetMillNode.wetMillLots}
                            >
                            </Farming>

                        </Row>

                    </Container>


                    <div id='processing'>


                    </div>


                </>

                :

                <Loading />

            }

        </main>

    );

}

export default FarmerDetails;