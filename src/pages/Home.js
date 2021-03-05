import React from 'react'
import Hero from '../components/Hero';
import HomePageNavigation from '../components/HomePageNavigation/HomePageNavigation';
import FarmerList from '../components/FarmerList/FarmerList';
import SearchForm from '../components/SearchForm/SearchForm';
export const Home = () => {
    return (
        <main>
            {/* <Hero /> */}
            {/* <SearchForm /> */}
            <HomePageNavigation />
            <FarmerList />
        </main>
    )
}

export default Home;