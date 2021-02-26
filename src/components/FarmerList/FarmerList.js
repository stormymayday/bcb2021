import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';

import './FarmerList.css';

import Loading from '../Loading/Loading';
import FarmerCard from '../FarmerCard/FarmerCard';

export const FarmerList = (props) => {

    const { farmers, loading } = useGlobalContext();

    // if (loading) {
    //     return <Loading />
    // }

    // if (farmers.length < 1) {
    //     return (
    //         <h2 className='section-title'>
    //             no farmers matched your search criteria
    //         </h2>
    //     )
    // }

    return (
        <>
            <section className='section'>
                <h2 className='section-title'>Farmers</h2>
                <div className='cocktails-center'>
                    {farmers.map((farmer) => {
                        return <FarmerCard key={farmer.id} farmer={farmer} />
                    })}
                </div>
            </section>
            {/* <h1 style={{ 'margin-bottom': '3rem', 'margin-top': '3rem', 'text-align': 'center' }}>Farmers</h1>
            <section className="farmer-list">
                {(props.farmers.length !== 0)
                    ? props.farmers.map(farmer => (
                        <FarmerCard key={farmer.harvestGeneralNodeID} farmer={farmer} />
                    ))
                    : <p>fetching data from BEXT</p>
                }
            </section> */}
        </>
    );
}

export default FarmerList;