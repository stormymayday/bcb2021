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
import Farming from '../components/Farming/Farming';
import ProcessingExport from '../components/ProcessingExport';

// Importing default farm picture
import defaultPicture from '../images/coffee_farm.JPG';

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

                farmer.farmerName ?

                    <>
                        <FarmerDetailsPageNavigation />

                        <Jumbotron style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)),
                        url(${farmer.harvestNode ? farmer.harvestNode.images[0] : defaultPicture})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '93vh'
                        }}
                            fluid>
                            <Container>
                                <h1 style={{ color: 'white' }}>{farmer.farmerName}</h1>
                            </Container>
                        </Jumbotron>
                    </>

                    :

                    <Loading />

            }

            <Farming

                farmerName={farmer.farmerName}

                harvestNode={farmer.harvestNode ? farmer.harvestNode : null}
                farmerPicture={farmer.harvestNode ? farmer.harvestNode.images[0] : null}
                harvestCity={farmer.harvestNode ? farmer.harvestNode.city : null}
                harvestState={farmer.harvestNode ? farmer.harvestNode.state : null}
                harvestCountry={farmer.harvestNode ? farmer.harvestNode.country : null}
                harvestElevation={farmer.harvestNode ? farmer.harvestNode.elevation : null}
                harvestElevationUnit={farmer.harvestNode ? farmer.harvestNode.elevationUnit : null}
                longitude={farmer.harvestNode ? farmer.harvestNode.longitude : null}
                latitude={farmer.harvestNode ? farmer.harvestNode.latitude : null}
                harvestTotalAbsorbedWeight={farmer.harvestNode ? farmer.harvestNode.totaAbsorbedWeight : null}
                harvestTotalAbsorbedWeightUnit={farmer.harvestNode ? farmer.harvestNode.totalAbsorbedWeightUnit : null}
                harvestLots={farmer.harvestNode ? farmer.harvestNode.harvestLots : null}
                numberOfHarvestLots={farmer.harvestNode ? farmer.harvestNode.harvestLots.length : null}

                wetMillNode={farmer.wetMillNode ? farmer.wetMillNode : null}
                wetMillCity={farmer.wetMillNode ? farmer.wetMillNode.city : null}
                wetMillState={farmer.wetMillNode ? farmer.wetMillNode.state : null}
                wetMillCountry={farmer.wetMillNode ? farmer.wetMillNode.country : null}
                wetMillElevation={farmer.wetMillNode ? farmer.wetMillNode.elevation : null}
                wetMillElevationUnit={farmer.wetMillNode ? farmer.wetMillNode.elevationUnit : null}
                wetMilltTotalAbsorbedWeight={farmer.wetMillNode ? farmer.wetMillNode.totaAbsorbedWeight : null}
                wetMillTotalAbsorbedWeightUnit={farmer.wetMillNode ? farmer.wetMillNode.totalAbsorbedWeightUnit : null}
                wetMillLots={farmer.wetMillNode ? farmer.wetMillNode.wetMillLots : null}
                numberOfWetMillLots={farmer.wetMillNode ? farmer.wetMillNode.wetMillLots.length : null}
            >
            </Farming>

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