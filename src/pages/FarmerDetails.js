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

            {

                farmer.harvestNode && farmer.wetMillNode ?

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

                            farmerName={farmer.farmerName}
                            farmerPicture={farmer.harvestNode.images[0]}
                            harvestCity={farmer.harvestNode.city}
                            harvestState={farmer.harvestNode.state}
                            harvestCountry={farmer.harvestNode.country}
                            harvestElevation={farmer.harvestNode.elevation}
                            harvestElevationUnit={farmer.harvestNode.elevationUnit}
                            longitude={farmer.harvestNode.longitude}
                            latitude={farmer.harvestNode.latitude}
                            harvestTotalAbsorbedWeight={farmer.harvestNode.totaAbsorbedWeight}
                            harvestTotalAbsorbedWeightUnit={farmer.harvestNode.totalAbsorbedWeightUnit}
                            harvestLots={farmer.harvestNode.harvestLots}
                            numberOfHarvestLots={farmer.harvestNode.harvestLots.length}

                            wetMillCity={farmer.wetMillNode.city}
                            wetMillState={farmer.wetMillNode.state}
                            wetMillCountry={farmer.wetMillNode.country}
                            wetMillElevation={farmer.wetMillNode.elevation}
                            wetMillElevationUnit={farmer.wetMillNode.elevationUnit}
                            wetMilltTotalAbsorbedWeight={farmer.wetMillNode.totaAbsorbedWeight}
                            wetMillTotalAbsorbedWeightUnit={farmer.wetMillNode.totalAbsorbedWeightUnit}
                            wetMillLots={farmer.wetMillNode.wetMillLots}
                            numberOfWetMillLots={farmer.wetMillNode.wetMillLots.length}
                        >
                        </Farming>

                    </>

                    :

                    <Loading />

            }

            {

                farmer.exporterIntakeNode && farmer.dryMillNode && farmer.exportNode ?

                    <>


                        <div id='processing'></div>
                        <ProcessingExport

                            exporterLogo={farmer.exporterIntakeNode.images[0]}

                            exporterIntakeCity={farmer.exporterIntakeNode.city}
                            exporterIntakeState={farmer.exporterIntakeNode.state}
                            exporterIntakeCountry={farmer.exporterIntakeNode.country}
                            exporterIntakeElevation={farmer.exporterIntakeNode.elevation}
                            exporterIntakeElevationUnit={farmer.exporterIntakeNode.elevationUnit}

                            dryMillIntakeCity={farmer.dryMillNode.city}
                            dryMillIntakeState={farmer.dryMillNode.state}
                            dryMillIntakeCountry={farmer.dryMillNode.country}
                            dryMillIntakeElevation={farmer.dryMillNode.elevation}
                            dryMillIntakeElevationUnit={farmer.dryMillNode.elevationUnit}

                            dryParchmentAbsorbedWeight={farmer.dryMillNode.dryMillLots[1].absorbedWeight}
                            dryParchmentAbsorbedWeightUnit={farmer.dryMillNode.dryMillLots[1].absorbedWeightUnit}

                            greenCoffeeAbsorbedWeight={farmer.dryMillNode.dryMillLots[0].absorbedWeight}
                            greenCoffeeAbsorbedWeightUnit={farmer.dryMillNode.dryMillLots[0].absorbedWeightUnit}

                            dryMillLots={farmer.dryMillNode.dryMillLots}

                            exportNode={farmer.exportNode}
                            exportLots={farmer.exportNode.exportLots}

                        >
                        </ProcessingExport>

                    </>

                    :

                    null

            }

        </main>

    );

}

export default FarmerDetails;