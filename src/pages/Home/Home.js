import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero';

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
import Farming from '../../components/Farming';
import ProcessingExport from '../../components/ProcessingExport';
import Import from '../../components/Import';
import Roasting from '../../components/Roasting';
import Economics from '../../components/EconomicsAndTransparency';
import Footer from '../../components/Footer/Footer';

import BarChart from '../../components/Chart/BarChart';

import Loading from '../../components/Loading/Loading';
import ScrollToTop from '../../components/ScrollToTop/ScrollTopTop';


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

                farmer.harvestNode && farmer.wetMillNode ?

                    <>

                        <HomePageNavigation />

                        <Hero farmerPicture={farmer.harvestNode.images[0]} />

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

                farmer.exporterIntakeNode && farmer.dryMillNode ?

                    <>

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

                        >
                        </ProcessingExport>

                    </>

                    :

                    null

            }

            {

                farmer.farmerName && farmer.harvestNode.longitude && farmer.harvestNode.latitude ?

                    <>

                        <Import

                            mapStyle={mapStyle}
                            farmerName={farmer.farmerName}
                            longitude={farmer.harvestNode.longitude}
                            latitude={farmer.harvestNode.latitude}

                        >
                        </Import>

                    </>

                    :

                    null

            }

            {

                farmer.farmerName ?

                    <>

                        <Roasting></Roasting>

                    </>

                    :

                    null

            }

            {

                farmer.farmerName ?

                    <>

                        <Economics></Economics>

                    </>

                    :

                    null

            }

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