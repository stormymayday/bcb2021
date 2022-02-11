import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Google Analytics
import ReactGA from 'react-ga';
import './RoasterCard.css';
import queenCity from '../../images/slideTwo.jpg';
import queenCityLogo from '../../images/qc-logo-p-500.png';
import oldSoul from '../../images/OldSoulRoasterImage.jpeg';
import andyTown from '../../images/AndyTownCard.jpeg';

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

                {
                    props.roaster.roasterName === 'Queen City'

                        ?

                        <img

                            alt={props.roaster.roasterName}

                            src={queenCity}

                        />

                        :

                        null
                }

                {
                    props.roaster.roasterName === 'Old Soul'

                        ?

                        <img

                            alt={props.roaster.roasterName}

                            src={oldSoul}

                        />

                        :

                        null
                }

                {
                    props.roaster.roasterName === 'Andy Town'

                        ?

                        <img

                            alt={props.roaster.roasterName}

                            src={andyTown}


                        />

                        :

                        null
                }

            </div>
            <div className='cocktail-footer'>
                <h3>{props.roaster.roasterName}</h3>
                {/* <p>{props.index}</p> */}
                <a
                    onClick={googleAnalyicsEvent}
                    href={props.roaster.roasterUrl}
                    target="_blank"
                    className="bttn bttn-primary bttn-details"
                    style={{ 'text-decoration': 'none' }}
                >
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