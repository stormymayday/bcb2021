import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory, useLocation } from 'react-router-dom';

// Google Analytics
import ReactGA from 'react-ga';
import './FarmerCard.css';
import Loading from '../Loading/Loading';

export const FarmerCard = (props) => {

    let location = useLocation().pathname;

    console.log(location);

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
                            <Link
                                onClick={googleAnalyicsEvent}
                                to={`/farmer-2021/${props.farmer.farmerName}`}
                                className="bttn bttn-primary bttn-details"
                                style={{ 'text-decoration': 'none' }}
                            >
                                Learn More
                            </Link>
                        </div>
                    </article >
                </>

                :

                <Loading />

            }
        </>

    );
}

export default FarmerCard;