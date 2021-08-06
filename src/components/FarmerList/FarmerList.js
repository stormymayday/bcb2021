import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';

import './FarmerList.css';

import Loading from '../Loading/Loading';
import FarmerCard from '../FarmerCard/FarmerCard';

export const FarmerList = (props) => {

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

                </>
                :

                <Loading />

            }
        </>
    );
}

export default FarmerList;