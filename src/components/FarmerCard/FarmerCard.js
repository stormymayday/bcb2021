import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FarmerCard.css';

export const FarmerCard = (props) => {

    const [farmer, setFarmer] = useState({});

    useEffect(() => {
        setFarmer(props.farmer);
    }, [])

    // console.log(farmer);

    return (
        <article className='cocktail'>
            <div className='img-contaienr'>
                <img alt={props.farmer.farmerName} src={`${props.farmer.farmerPicture}`} />
            </div>
            <div className='cocktail-footer'>
                <h3>{props.farmer.farmerName}</h3>
                <Link
                    to={{
                        pathname: `/farmer/${props.farmer.farmerName.replace(/\s+/g, '')}`,
                        state: {
                            farmer
                        }
                    }}
                    className="btn btn-primary btn-details">
                    Learn More
                </Link>
            </div>
        </article >
        // <div className='card-container'>
        //     <img alt='farmer' src={`${props.farmer.farmerPicture}&size=180x180`} />
        //     <h1>{props.farmer.farmerName}</h1>
        // </div>
    );
}

export default FarmerCard;