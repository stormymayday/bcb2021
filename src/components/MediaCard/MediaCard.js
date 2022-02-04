import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Google Analytics
import ReactGA from 'react-ga';
import './MediaCard.css';


import queenCity from '../../images/slideTwo.jpg';
import queenCityLogo from '../../images/qc-logo-p-500.png';
import oldSoul from '../../images/OldSoulRoasterImage.jpeg';

export const MediaCard = (props) => {

    const [roaster, setRoaster] = useState({});

    const googleAnalyicsEvent = () => {
        ReactGA.event({
            category: 'Learn More Media button',
            action: `Learn More button for ${props.mediaItem.mediaName}`
        })
    }

    useEffect(() => {
        setRoaster(props.mediaItem);
    }, [])

    return (
        <article className='cocktail'>
            <div className='img-contaienr'>

                <img

                    alt={props.mediaItem.mediaName}

                    src={props.mediaItem.mediaImg}

                />

            </div>
            <div className='cocktail-footer'>
                {/* <h3>{props.mediaItem.mediaName}</h3> */}
                <p>{props.mediaItem.mediaName}</p>
                <a
                    onClick={googleAnalyicsEvent}
                    href={props.mediaItem.mediaUrl}
                    target="_blank"
                    className="bttn bttn-primary bttn-details"
                    style={{ 'text-decoration': 'none' }}
                >
                    Learn More
                </a>
            </div>
        </article >
    );
}

export default MediaCard;