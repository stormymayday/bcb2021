import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Google Analytics
import ReactGA from 'react-ga';
import './FarmerCard.css';
import Loading from '../Loading/Loading';

import slideOne from '../../images/slideOne.jpg';
import slideTwo from '../../images/coffee_farm.JPG';

export const FarmerCard = (props) => {

    const [farmer, setFarmer] = useState({});

    const googleAnalyicsEvent = () => {
        ReactGA.event({
            category: 'Learn More Farmer button',
            action: `Learn More button for ${props.farmer.farmerName}`
        })
    }

    useEffect(() => {
        setFarmer(props.farmer);
    }, [farmer])

    console.log(`Farmer Card: ${props.farmer}`);

    return (
        <>
            {props.farmer ?

                <>

                    <article className='cocktail'>
                        <div className='img-contaienr'>
                            <img alt={props.farmer.farmerName}

                                src={props.farmer.harvestNode.images[0]}
                            />
                        </div>
                        <div className='cocktail-footer'>
                            <h3>{props.farmer.farmerName}</h3>
                            {/* <p>{props.index}</p> */}
                            <Link
                                onClick={googleAnalyicsEvent}
                                to={`/farmer-2021/${props.farmer.farmerName}`}
                                // to={{
                                //     // pathname: `/farmer/${props.farmer.farmerName.replace(/\s+/g, '')}`,
                                //     pathname: `/farmer/${props.farmer.farmerName}`,
                                //     state: {
                                //         farmer
                                //     }
                                // }}
                                className="bttn bttn-primary bttn-details"
                                style={{ 'text-decoration': 'none' }}
                            >
                                Learn More
                            </Link>
                        </div>
                    </article >
                    {/* // <div className='card-container'>
        //     <img alt='farmer' src={`${props.farmer.farmerPicture}&size=180x180`} />
        //     <h1>{props.farmer.farmerName}</h1>
        // </div> */}
                </>
                :

                <Loading />



            }
        </>

    );
}

export default FarmerCard;