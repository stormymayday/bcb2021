import React from 'react'
import Hero from '../components/Hero';
import FarmerList from '../components/FarmerList/FarmerList';
import SearchForm from '../components/SearchForm/SearchForm';
export const Home = () => {
    return (
        <main>
            <Hero />
            {/* <SearchForm /> */}
            <FarmerList />
        </main>
    )
}

export default Home;