import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';

import './FarmerList.css';

import Loading from '../Loading/Loading';
import FarmerCard from '../FarmerCard/FarmerCard';

export const FarmerList = (props) => {

    // Old Static array
    // const { farmers, loading } = useGlobalContext();

    // New Dynamic Array
    const { farmersMongoDB } = useGlobalContext();

    return (
        <>
            {farmersMongoDB.length > 0 ?

                <>
                    <section className='section'>
                        <h2 className='section-title'>Farmers</h2>
                        <div className='cocktails-center'>
                            {farmersMongoDB.map((farmer, index) => {
                                return <FarmerCard key={farmer.id} farmer={farmer} index={index} />
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
                :

                <Loading />



            }
        </>
    );
}

export default FarmerList;