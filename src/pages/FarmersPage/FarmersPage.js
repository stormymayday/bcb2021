import React, { useEffect, useState } from 'react'
// import Hero from '../components/Hero';

// Google Analytics
import ReactGA from 'react-ga';

import FarmersPageNavigation from '../../components/FarmersPageNavigation/FarmersPageNavigation';
import FarmerList from '../../components/FarmerList/FarmerList';
import Footer from '../../components/Footer/Footer';

export const FarmersPage = () => {

    useEffect(() => {

        // Google Analytics initiazation
        // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
        // Google Analytics Page View report
        ReactGA.pageview(window.location.pathname + window.location.search);

    }, [])

    return (
        <main>

            <FarmersPageNavigation />

            <FarmerList />

            <Footer />

        </main>
    )
}

export default FarmersPage;