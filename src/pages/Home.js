import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero';

// Google Analytics
import ReactGA from 'react-ga';

import HomePageNavigation from '../components/HomePageNavigation/HomePageNavigation';
import FarmerList from '../components/FarmerList/FarmerList';
import SearchForm from '../components/SearchForm/SearchForm';
import PartnersSection from '../sections/partners/PartnersSection';

import Container from 'react-bootstrap/Container';


import Farming from '../components/Farming';
import ProcessingExport from '../components/ProcessingExport';
import Journey from '../components/Journey';
import Roasting from '../components/Roasting';
import Chart from '../components/Chart/Chart';

const chartData = {
    labels: ['Harvest', 'Wet Mill', 'Intake', 'Dry Mill', 'Roasting'],
    datasets: [
        {
            label: 'Weight',
            data: [
                10000,
                8000,
                7000,
                6000,
                5000
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
};

export const Home = () => {

    useEffect(() => {

        // Google Analytics initiazation
        // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
        // Google Analytics Page View report
        ReactGA.pageview(window.location.pathname + window.location.search);

    }, [])

    return (
        <main>
            {/* <SearchForm /> */}
            <HomePageNavigation />
            <Hero />




            <Farming></Farming>
            <ProcessingExport></ProcessingExport>
            <Journey></Journey>
            <Roasting></Roasting>

            <Container>
                <Chart chartData={chartData} location="Massachusetts" legendPosition="bottom" />

            </Container>

            {/* <FarmerList /> */}
            <PartnersSection />
        </main>
    )
}

export default Home;