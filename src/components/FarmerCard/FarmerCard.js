import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Google Analytics
import ReactGA from 'react-ga';
import './FarmerCard.css';
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
    }, [])

    // console.log(farmer);

    return (
        <article className='cocktail'>
            <div className='img-contaienr'>
                <img alt={props.farmer.farmerName}

                    src={
                        props.farmer.farmerName === 'Claudia & Juan' ?

                            slideOne :

                            slideTwo
                    }
                />
            </div>
            <div className='cocktail-footer'>
                <h3>{props.farmer.farmerName}</h3>
                {/* <p>{props.index}</p> */}
                <Link
                    onClick={googleAnalyicsEvent}
                    to={{
                        // pathname: `/farmer/${props.farmer.farmerName.replace(/\s+/g, '')}`,
                        pathname: `/farmer/${props.farmer.farmerName.replace(/\s/g, '')}/${props.farmer.harvestGeneralNodeID}/${props.index}`,
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