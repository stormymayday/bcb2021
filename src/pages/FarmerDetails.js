import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import HarvestList from '../components/HarvestList/HarvestList';
import Pagination from '../components/Pagination/Pagination';
import paginate from '../utils';

import { useParams, useHistory, useLocation, Link } from 'react-router-dom';

// Google Analytics
import ReactGA from 'react-ga';

import { useGlobalContext } from '../context';

import Jumbotron from 'react-bootstrap/Jumbotron';

// Components
import FarmerDetailsPageNavigation from '../components/FarmerDetailsPageNavigation/FarmerDetailsPageNavigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Sections
import Farming from '../components/Farming';
import ProcessingExport from '../components/ProcessingExport';

const FarmerDetails = () => {

    // Google Analytics initiazation
    // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
    // Google Analytics Page View report
    ReactGA.pageview(window.location.pathname + window.location.search);

    let { name } = useParams();

    const { farmersMongoDB } = useGlobalContext();

    const { location } = useLocation();

    const [farmer, setFarmer] = useState({});

    useEffect(() => {

        if (farmersMongoDB.length > 0) {

            // Filtering farmer based on farmerName
            const thisFarmer = farmersMongoDB.filter(function (value) {

                return value.farmerName === name && setFarmer(value);;

            });

        }

    }, [farmersMongoDB]);

    return (

        <main>

            {farmer.harvestNode ?

                <>

                    <FarmerDetailsPageNavigation />

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

                    <div id='processing'></div>
                    <ProcessingExport

                        dryParchmentAbsorbedWeight={farmer.dryMillNode.dryMillLots[1].absorbedWeight}
                        dryParchmentAbsorbedWeightUnit={farmer.dryMillNode.dryMillLots[1].absorbedWeightUnit}

                        greenCoffeeAbsorbedWeight={farmer.dryMillNode.dryMillLots[0].absorbedWeight}
                        greenCoffeeAbsorbedWeightUnit={farmer.dryMillNode.dryMillLots[0].absorbedWeightUnit}

                        dryMillLots={farmer.dryMillNode.dryMillLots}

                    >
                    </ProcessingExport>

                </>

                :

                <Loading />

            }

        </main>

    );

}

export default FarmerDetails;