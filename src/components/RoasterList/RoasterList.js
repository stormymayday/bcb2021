import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';

import './RoasterList.css';

import Loading from '../Loading/Loading';
import RoasterCard from '../RoasterCard/RoasterCard';

export const FarmerList = (props) => {

    const { roasters, loading } = useGlobalContext();

    return (
        <>
            <section className='section'>
                <h2 className='section-title'>Roasters</h2>
                <div className='cocktails-center'>
                    {roasters.map((roaster, index) => {
                        return <RoasterCard key={roaster.id} roaster={roaster} index={index} />
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