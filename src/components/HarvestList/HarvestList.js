import React, { useEffect, useState } from 'react';

// import './FarmerList.css';

import Loading from '../Loading/Loading';
import HarvestCard from '../HarvestCard/HarvestCard';

export const HarvestList = (props) => {

    // const [harvestLots, setHarvestLots] = useState([]);

    useEffect(() => {

    }, []);

    // console.log(`Hello From Harvest List`);


    return (
        <>
            <section className='section'>
                <h2 className='section-title'>Harvest Lots</h2>
                <div className='cocktails-center'>
                    {props.harvestLotIds.map((harvestLot) => {
                        return <HarvestCard key={harvestLot.id} harvestLot={harvestLot} />
                    })}
                </div>
            </section>
        </>
    );
}

export default HarvestList;