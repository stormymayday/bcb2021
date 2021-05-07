import React, { useEffect, useState } from 'react'
// import Hero from '../components/Hero';

// Google Analytics
import ReactGA from 'react-ga';

import HomePageNavigation from '../../components/HomePageNavigation/HomePageNavigation';
import RoasterList from '../../components/RoasterList/RoasterList';

import SearchForm from '../../components/SearchForm/SearchForm';

export const RoastersPage = () => {

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
            {/* <Hero /> */}
            <RoasterList />
            {/* <PartnersSection /> */}
        </main>
    )
}

export default RoastersPage;