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

                        // <span>Value: {props.lot.value} {props.lot.asset}<br /></span>

                        :

                        null
                }

                Product: {props.lot.productName}<br />

                {/* Displaying value if it is a Wet Mill Lot on an ExporterIntake Node */}
                {

                    props.lot.productName === "Wet Parchment" && props.lot.lotType === "Storage"

                        ?


                        <span>Payment: {props.lot.value} {props.lot.asset}<br /></span>

                        :

                        null
                }

                {/* Displaying Harvest Date if it is harvest lot*/}
                {
                    props.lot.lotDetailType === "HarvestGeneral"

                        ?

                        <span>Harvest date: {props.lot.harvestDate.split(' ')[0]}<br /></span>

                        :

                        null
                }
                {/* Displaying Number of bags*/}
                {
                    props.lot.numberOfBags

                        ?

                        <span>Number of bags: {props.lot.numberOfBags}<br /></span>

                        :

                        null
                }
                {/* Displaying Import Lot Damage*/}
                {
                    props.lot.damage

                        ?

                        <span>Damage: {props.lot.damage}<br /></span>

                        :

                        null
                }
                {/* Displaying Import Lot Transfer Date*/}
                {
                    props.lot.transferDate

                        ?

                        <span>Transfer Date: {props.lot.transferDate}<br /></span>

                        :

                        null
                }

            </CardText>
            {/* <CardButton>Learn More</CardButton> */}
        </Card>
    )
}

export default HarvestLotCard;