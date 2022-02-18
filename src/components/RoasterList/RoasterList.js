import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';

import './RoasterList.css';

import Loading from '../Loading/Loading';
import RoasterCard from '../RoasterCard/RoasterCard';

export const FarmerList = (props) => {

    const { roasters, loading } = useGlobalContext();

    return (
        <>
            {roasters ?

                <>

                    <section className='section'>
                        <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>Roasters</h2>
                        <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#000' }}></div>
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
                :

                <Loading />



            }



        </>
    );
}

export default FarmerList;