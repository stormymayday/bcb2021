import React, { useState, useEffect } from 'react';

import logo from '../../images/catracha-logo-cropped.jpg';

// Styled Components
import {
    Card,
    CardImage,
    CardText,
    CardHeader,
    CardButton
} from './HarvestLotCard.styles';


const HarvestLotCard = (props) => {

    useEffect(() => {

    }, [props.lot]);

    // console.log(`Harvest Lot type ${}`)

    return (
        <Card>
            <CardImage

                src={props.lot.images[0] ? props.lot.images[0] : logo}

            />
            <CardHeader>

                {/* {props.harvestLot.harvestLotId} */}

            </CardHeader>
            <CardText>

                Absorbed weight: {props.lot.absorbedWeight} {props.lot.absorbedWeightUnit}<br />

                {/* Not Displaying lot value if it is a harvest lot */}
                {

                    props.lot.lotDetailType === "HarvestGeneral"

                        ?

                        null

                        // `Value: ${props.lot.value} ${props.lot.asset}`

                        :

                        null
                }

                Product: {props.lot.productName}<br />

                {/* Displaying value if it is a Wet Mill Lot on an ExporterIntake Node */}
                {

                    props.lot.productName === "Wet Parchment" && props.lot.lotType === "Storage"

                        ?


                        `Payment: ${props.lot.value} ${props.lot.asset}`

                        :

                        null
                }

                {/* Displaying Harvest Date if it is harvest lot*/}
                {
                    props.lot.lotDetailType === "HarvestGeneral"

                        ?

                        <p>Harvest date: {props.lot.harvestDate.split(' ')[0]}<br /></p>

                        :

                        null
                }

            </CardText>
            {/* <CardButton>Learn More</CardButton> */}
        </Card>
    )
}

export default HarvestLotCard;