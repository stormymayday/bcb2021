import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero';

// Google Analytics
import ReactGA from 'react-ga';

import HomePageNavigation from '../components/HomePageNavigation/HomePageNavigation';
import FarmerList from '../components/FarmerList/FarmerList';
import SearchForm from '../components/SearchForm/SearchForm';
import PartnersSection from '../sections/partners/PartnersSection';

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
            <FarmerList />
            <PartnersSection />
        </main>
    )
}

export default Home;