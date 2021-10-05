import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero';

// Google Analytics
import ReactGA from 'react-ga';

import HomePageNavigation from '../../components/HomePageNavigation/HomePageNavigation';
import PartnersSection from '../../sections/partners/PartnersSection';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactPlayer from 'react-player';

// Context
import { useGlobalContext } from '../../context';

// Sections
import Farming from '../../components/Farming/Farming';
import ProcessingExport from '../../components/ProcessingExport/ProcessingExport';
import Import from '../../components/Import/Import';
import Roasting from '../../components/Roasting/Roasting';
import Economics from '../../components/EconomicsAndTransparency/EconomicsAndTransparency';
import Footer from '../../components/Footer/Footer';

import BarChart from '../../components/Chart/BarChart';

import Loading from '../../components/Loading/Loading';
import ScrollToTop from '../../components/ScrollToTop/ScrollTopTop';

// Importing default farm picture
import defaultPicture from '../../images/coffee_farm.JPG';

import JourneyMap from '../../components/JourneyMap/JourneyMap';

export const Home = () => {

    const { farmersMongoDB } = useGlobalContext();

    const [farmer, setFarmer] = useState({});

    const mapStyle = `ckr6jrmhs0tg218qk5ym975gf`;

    console.log(farmersMongoDB);

    useEffect(() => {

        // Google Analytics initiazation
        // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
        // Google Analytics Page View report
        ReactGA.pageview(window.location.pathname + window.location.search);

        if (farmersMongoDB.length > 0) {

            // Filtering farmer based on farmerName
            const thisFarmer = farmersMongoDB.filter(function (value) {

                return value.farmerName === 'Claudia & Juan' && setFarmer(value);;

            });

        }

    }, [farmersMongoDB]);

    console.log(farmer);

    return (

        <main>

            {

                farmer.farmerName ?

                    <>
                        <HomePageNavigation />

                        <Hero farmerPicture={farmer.harvestNode ? farmer.harvestNode.images[0] : defaultPicture} />
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

                dryParchmentAbsorbedWeight={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots[1].absorbedWeight : null}
                dryParchmentAbsorbedWeightUnit={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots[1].absorbedWeightUnit : null}
                greenCoffeeAbsorbedWeight={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots[0].absorbedWeight : null}
                greenCoffeeAbsorbedWeightUnit={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots[0].absorbedWeightUnit : null}

                dryMillLots={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots : null}

                exportNode={farmer.exportNode ? farmer.exportNode : null}
                exportLots={farmer.exportNode ? farmer.exportNode.exportLots : null}

            >
            </ProcessingExport>




            <Import



                // mapStyle={mapStyle}
                // farmerName={farmer.farmerName}
                // longitude={farmer.harvestNode.longitude}
                // latitude={farmer.harvestNode.latitude}

                importerLogo={farmer.importNode ? farmer.importNode.images[0] : null}
                importNode={farmer.importNode ? farmer.importNode : null}
                importLots={farmer.importNode ? farmer.importNode.importLots : null}

            >
            </Import>

            <Roasting

                farmerName={farmer.farmerName}
                roasterIntakeNode={farmer.roasterIntakeNode ? farmer.roasterIntakeNode : null}
                roasterIntakeLots={farmer.roasterIntakeNode ? farmer.roasterIntakeNode.roasterIntakeLots : null}

                roastingNode={farmer.roastingNode ? farmer.roastingNode : null}
                roastingLots={farmer.roastingNode ? farmer.roastingNode.roastingLots : null}

            ></Roasting>

            <Economics

                farmerName={farmer.farmerName}

                exporterIntakeLots={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.exporterIntakeLots : null}

                exportLots={farmer.exportNode ? farmer.exportNode.exportLots : null}

                importLots={farmer.importNode ? farmer.importNode.importLots : null}

            ></Economics>

            {

                farmer.harvestNode &&
                    farmer.wetMillNode &&
                    farmer.dryMillNode ?

                    <>

                        <Container>

                            <Row id='' style={{ 'padding-top': '5em' }}>


                                <Col md='12' lg='6'>

                                    <h3>Webinar: Efficiency in Coffee Processing</h3>

                                    <p>Dr. Irwin Ronaldo Donis-Gonzalez of the UC Davis Department of Biological and Argricultural Engineering and Evan Gilman and Chris Kornman of The Crown discuss efficiency in post-harvest processing in coffee. Dr. Donis-Gonzalez presents his exhaustive research focusing on the loss of mass from each stage of washed process coffee.</p>

                                </Col>
                                <Col md='12' lg='6'>

                                    <div
                                        style={{
                                            'position': 'relative',
                                            'padding-top': '56.25%'
                                        }}
                                    >
                                        <ReactPlayer

                                            style={{

                                                'position': 'absolute',
                                                'top': '0',
                                                'left': '0',
                                                'width': '100 %',
                                                'height': '100 %'

                                            }}

                                            controls url='https://vimeo.com/526315128' width='100%' height='100%' />

                                    </div>
                                </Col>
                            </Row>

                            <BarChart

                                data={{

                                    labels: ['Coffee Cherry', 'Wet Parchment', 'Dry Parchment', 'Green Coffee', 'Roasting (Coming Soon)'],

                                    datasets: [
                                        {
                                            label: 'Weight of Coffee at Main Processing Stages',

                                            data: [
                                                farmer.harvestNode.totaAbsorbedWeight,
                                                farmer.wetMillNode.totaAbsorbedWeight,
                                                farmer.dryMillNode.dryMillLots[1].absorbedWeight,
                                                farmer.dryMillNode.dryMillLots[0].absorbedWeight,
                                                0
                                            ],
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.6)',
                                                'rgba(54, 162, 235, 0.6)',
                                                'rgba(255, 206, 86, 0.6)',
                                                'rgba(75, 192, 192, 0.6)',
                                                'rgba(153, 102, 255, 0.6)',
                                                'rgba(255, 159, 64, 0.6)'
                                            ]
                                        }
                                    ]

                                }}

                            />

                        </Container>

                    </>

                    :

                    null

            }

            {

                farmer.farmerName ?

                    <>

                        <PartnersSection />

                        <Footer />

                        <ScrollToTop />

                    </>

                    :

                    null

            }

        </main >
    )
}

export default Home;