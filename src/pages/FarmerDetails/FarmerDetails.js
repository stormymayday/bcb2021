import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading';

import Pagination from '../../components/Pagination/Pagination';
import paginate from '../../utils';

import { useParams, useHistory, useLocation, Link } from 'react-router-dom';

// Google Analytics
import ReactGA from 'react-ga';

import { useGlobalContext } from '../../context';

import Jumbotron from 'react-bootstrap/Jumbotron';

// Components
import FarmerDetailsPageNavigation from '../../components/FarmerDetailsPageNavigation/FarmerDetailsPageNavigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Sections
import Farming from '../../components/Farming/Farming';
import ProcessingExport from '../../components/ProcessingExport/ProcessingExport';
import Import from '../../components/Import/Import';
import Roasting from '../../components/Roasting/Roasting';
import Economics from '../../components/EconomicsAndTransparency/EconomicsAndTransparency';
import ScrollToTop from '../../components/ScrollToTop/ScrollTopTop';
import Footer from '../../components/Footer/Footer';

// Importing default farm picture
import defaultPicture from '../../images/coffee_farm.JPG';

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
                producerName={farmer.producerName}

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

            <ProcessingExport

                exporterIntakeNode={farmer.exporterIntakeNode ? farmer.exporterIntakeNode : null}
                exporterLogo={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.images[0] : null}
                exporterIntakeCity={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.city : null}
                exporterIntakeState={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.state : null}
                exporterIntakeCountry={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.country : null}
                exporterIntakeElevation={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.elevation : null}
                exporterIntakeElevationUnit={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.elevationUnit : null}

                dryMillNode={farmer.dryMillNode ? farmer.dryMillNode : null}
                dryMillIntakeCity={farmer.dryMillNode ? farmer.dryMillNode.city : null}
                dryMillIntakeState={farmer.dryMillNode ? farmer.dryMillNode.state : null}
                dryMillIntakeCountry={farmer.dryMillNode ? farmer.dryMillNode.country : null}
                dryMillIntakeElevation={farmer.dryMillNode ? farmer.dryMillNode.elevation : null}
                dryMillIntakeElevationUnit={farmer.dryMillNode ? farmer.dryMillNode.elevationUnit : null}

                // dryParchmentAbsorbedWeight={farmer.dryMillNode.dryMillLots ? farmer.dryMillNode.dryMillLots[1].absorbedWeight : null}
                // dryParchmentAbsorbedWeightUnit={farmer.dryMillNode.dryMillLots ? farmer.dryMillNode.dryMillLots[1].absorbedWeightUnit : null}

                // greenCoffeeAbsorbedWeight={farmer.dryMillNode.dryMillLots ? farmer.dryMillNode.dryMillLots[0].absorbedWeight : null}
                // greenCoffeeAbsorbedWeightUnit={farmer.dryMillNode.dryMillLots ? farmer.dryMillNode.dryMillLots[0].absorbedWeightUnit : null}

                dryMillLots={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots : null}

                exportNode={farmer.exportNode ? farmer.exportNode : null}
                exportLots={farmer.exportNode ? farmer.exportNode.exportLots : null}

            >
            </ProcessingExport>


            <Import

                // importerLogo={farmer.importNode.images[0]}
                // mapStyle={mapStyle}
                // farmerName={farmer.farmerName}
                // longitude={farmer.harvestNode.longitude}
                // latitude={farmer.harvestNode.latitude}

                importerLogo={farmer.importNode ? farmer.importNode.images[0] : null}
                importNode={farmer.importNode ? farmer.importNode : null}
                importLots={farmer.importNode ? farmer.importNode.importLots : null}

            />

            {
                farmer.farmerName === 'Claudia & Juan' ||
                    farmer.farmerName === 'Luis' ||
                    farmer.farmerName === 'Atanacio' ||
                    farmer.farmerName === 'Maria Adela' ||
                    farmer.farmerName === 'Fidelina' ||
                    farmer.farmerName === 'Francis Omar' ||
                    farmer.farmerName === 'Mirian' ||
                    farmer.farmerName === 'Jose Antonio' ||
                    farmer.farmerName === 'Adan' ||
                    farmer.farmerName === 'Gumercindo' ||
                    farmer.farmerName === 'David' ||
                    farmer.farmerName === 'Rigoberto'

                    ?

                    <Roasting

                        farmerName={farmer.farmerName}
                        roasterIntakeNode={farmer.roasterIntakeNode ? farmer.roasterIntakeNode : null}
                        roasterIntakeLots={farmer.roasterIntakeNode ? farmer.roasterIntakeNode.roasterIntakeLots : null}

                        roastingNode={farmer.roastingNode ? farmer.roastingNode : null}
                        roastingLots={farmer.roastingNode ? farmer.roastingNode.roastingLots : null}

                    >

                    </Roasting>

                    :

                    null

            }


            <Economics

                farmerName={farmer.farmerName}
                exporterIntakeLots={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.exporterIntakeLots : null}

                // exportLots={farmer.exporterIntakeNode ? farmer.exportNode.exportLots : null}
                exportLots={farmer.exportNode ? farmer.exportNode.exportLots : null}

                importLots={farmer.importNode ? farmer.importNode.importLots : null}


            ></Economics>


            {
                farmer.farmerName

                    ?
                    <>

                        <Footer />

                        <ScrollToTop />

                    </>

                    :

                    null
            }

        </main >

    );

}

export default FarmerDetails;