import React, { useEffect, useState } from 'react'
// import Hero from '../components/Hero';

// Google Analytics
import ReactGA from 'react-ga';

import RoastersPageNavigation from '../../components/RoastersPageNavigation/RoastersPageNavigation';
import RoasterList from '../../components/RoasterList/RoasterList';
import Footer from '../../components/Footer/Footer';


export const RoastersPage = () => {

    useEffect(() => {

        // Google Analytics initiazation
        // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
        // Google Analytics Page View report
        ReactGA.pageview(window.location.pathname + window.location.search);

    }, [])

    return (
        <main>

            <RoastersPageNavigation />

            <RoasterList />

            <Footer />

        </main>
    )
}

export default RoastersPage;