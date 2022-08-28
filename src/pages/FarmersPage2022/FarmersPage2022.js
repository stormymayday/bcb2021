import React, { useEffect, useState } from 'react'
// import Hero from '../components/Hero';

// Google Analytics
import ReactGA from 'react-ga';

import FarmersPageNavigation from '../../components/FarmersPageNavigation/FarmersPageNavigation';
import FarmerList from '../../components/FarmerList/FarmerList';
import ScrollToTop from '../../components/ScrollToTop/ScrollTopTop';
import Footer from '../../components/Footer/Footer';

export const FarmersPage2022 = () => {

    useEffect(() => {

        // Google Analytics initiazation
        // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
        // Google Analytics Page View report
        ReactGA.pageview(window.location.pathname + window.location.search);

    }, [])

    return (
        <main>

            <FarmersPageNavigation />

            <FarmerList year={'2022'} />

            <ScrollToTop />

            <Footer />

        </main>
    )
}

export default FarmersPage2022;