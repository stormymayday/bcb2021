import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero';

// Google Analytics
import ReactGA from 'react-ga';

import HomePageNavigation from '../components/HomePageNavigation/HomePageNavigation';
import FarmerList from '../components/FarmerList/FarmerList';
import SearchForm from '../components/SearchForm/SearchForm';
import PartnersSection from '../sections/partners/PartnersSection';

import Container from 'react-bootstrap/Container';

// Context
import { useGlobalContext } from '../context';

import Farming from '../components/Farming';
import ProcessingExport from '../components/ProcessingExport';
import Journey from '../components/Journey';
import Roasting from '../components/Roasting';
import Chart from '../components/Chart/Chart';

import Loading from '../components/Loading/Loading';

export const Home = () => {

    const { farmersMongoDB } = useGlobalContext();

    const [farmers, setFarmers] = useState({});

    console.log(farmersMongoDB);

    useEffect(() => {

        // Google Analytics initiazation
        // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
        // Google Analytics Page View report
        ReactGA.pageview(window.location.pathname + window.location.search);

    }, [farmersMongoDB])

    return (
        <main>

            {farmersMongoDB.length > 0 ?

                <>
                    <HomePageNavigation />
                    <Hero farmerPicture={farmersMongoDB[0].harvestNode.images[0]} />
                    <Farming

                        farmerName={farmersMongoDB[0].farmerName}
                        farmerPicture={farmersMongoDB[0].harvestNode.images[0]}
                        city={farmersMongoDB[0].harvestNode.city}
                        state={farmersMongoDB[0].harvestNode.state}
                        country={farmersMongoDB[0].harvestNode.country}
                        elevation={farmersMongoDB[0].harvestNode.elevation}
                        longitude={farmersMongoDB[0].harvestNode.longitude}
                        latitude={farmersMongoDB[0].harvestNode.latitude}
                        elevationUnit={farmersMongoDB[0].harvestNode.elevationUnit}
                        harvestTotalAbsorbedWeight={farmersMongoDB[0].harvestNode.totaAbsorbedWeight}
                        harvestTotalAbsorbedWeightUnit={farmersMongoDB[0].harvestNode.totalAbsorbedWeightUnit}
                        numberOfHarvestLots={farmersMongoDB[0].harvestNode.harvestLots.length}

                        wetMilltTotalAbsorbedWeight={farmersMongoDB[0].wetMillNode.totaAbsorbedWeight}
                        wetMillTotalAbsorbedWeightUnit={farmersMongoDB[0].wetMillNode.totalAbsorbedWeightUnit}

                        harvestLots={farmersMongoDB[0].harvestNode.harvestLots}

                        wetMillLots={farmersMongoDB[0].wetMillNode.wetMillLots}
                    >
                    </Farming>

                    <ProcessingExport

                        dryParchmentAbsorbedWeight={farmersMongoDB[0].dryMillNode.dryMillLots[1].absorbedWeight}
                        dryParchmentAbsorbedWeightUnit={farmersMongoDB[0].dryMillNode.dryMillLots[1].absorbedWeightUnit}

                        greenCoffeeAbsorbedWeight={farmersMongoDB[0].dryMillNode.dryMillLots[0].absorbedWeight}
                        greenCoffeeAbsorbedWeightUnit={farmersMongoDB[0].dryMillNode.dryMillLots[0].absorbedWeightUnit}

                        dryMillLots={farmersMongoDB[0].dryMillNode.dryMillLots}

                    >
                    </ProcessingExport>

                    <Journey></Journey>
                    <Roasting></Roasting>

                    <Container>

                        <Chart
                            chartData={{

                                labels: ['Coffee Cherry', 'Wet Parchment', 'Dry Parchment', 'Green Coffee', 'Roasting', 'a cup of coffee'],
                                datasets: [
                                    {
                                        label: 'Weight of microlot at different stages',

                                        data: [
                                            farmersMongoDB[0].harvestNode.totaAbsorbedWeight,
                                            farmersMongoDB[0].wetMillNode.totaAbsorbedWeight,
                                            farmersMongoDB[0].dryMillNode.dryMillLots[1].absorbedWeight,
                                            farmersMongoDB[0].dryMillNode.dryMillLots[0].absorbedWeight,
                                            10000,
                                            1.25
                                        ],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.6)',
                                            'rgba(54, 162, 235, 0.6)',
                                            'rgba(255, 206, 86, 0.6)',
                                            'rgba(75, 192, 192, 0.6)',
                                            'rgba(153, 102, 255, 0.6)',
                                            'rgba(255, 159, 64, 0.6)',
                                            'rgba(255, 99, 132, 0.6)'
                                        ]
                                    }
                                ]
                            }}


                            location="Massachusetts"

                            legendPosition="bottom"
                        />

                    </Container>

                    <PartnersSection />
                </>

                :

                <Loading />

            }

        </main >
    )
}

export default Home;