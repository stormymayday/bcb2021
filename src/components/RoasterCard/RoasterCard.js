import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Google Analytics
import ReactGA from 'react-ga';
import './RoasterCard.css';
import slideOne from '../../images/slideTwo.jpg';
import slideTwo from '../../images/coffee_farm.JPG';

export const RoasterCard = (props) => {

    const [roaster, setRoaster] = useState({});

    const googleAnalyicsEvent = () => {
        ReactGA.event({
            category: 'Learn More Roaster button',
            action: `Learn More button for ${props.roaster.roasterName}`
        })
    }

    useEffect(() => {
        setRoaster(props.roaster);
    }, [])

    // console.log(farmer);

    return (
        <article className='cocktail'>
            <div className='img-contaienr'>
                <img alt={props.roaster.roasterName}

                    src={
                        props.roaster.roasterName === 'Queen City' ?

                            slideOne :

                            slideTwo
                    }
                />
            </div>
            <div className='cocktail-footer'>
                <h3>{props.roaster.roasterName}</h3>
                {/* <p>{props.index}</p> */}
                <a
                    onClick={googleAnalyicsEvent}
                    href={props.roaster.roasterUrl}
                    target="_blank"
                    className="bttn bttn-primary bttn-details">
                    Learn More
                </a>
            </div>
        </article >
        // <div className='card-container'>
        //     <img alt='farmer' src={`${props.farmer.farmerPicture}&size=180x180`} />
        //     <h1>{props.farmer.farmerName}</h1>
        // </div>
    );
}

export default RoasterCard;