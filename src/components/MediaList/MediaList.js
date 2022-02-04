import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';

import './MediaList.css';

import Loading from '../Loading/Loading';

import MediaCard from '../MediaCard/MediaCard';

export const MediaList = (props) => {

    const { media, loading } = useGlobalContext();

    return (
        <>
            {media ?

                <>

                    <section className='section'>
                        <h2 className='section-title'>Media</h2>
                        <div className='cocktails-center'>
                            {media.map((mediaItem, index) => {
                                return <MediaCard key={mediaItem.id} mediaItem={mediaItem} index={index} />
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

export default MediaList;