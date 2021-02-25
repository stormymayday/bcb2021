import React, { useEffect, useState } from 'react';

import './FarmerCard.css';

export const FarmerCard = (props) => {

    return (
        <div className='card-container'>
            <img alt='farmer' src={`${props.farmer.farmerPicture}&size=180x180`} />
            <h1>{props.farmer.farmerName}</h1>
        </div>
    );
}

export default FarmerCard;