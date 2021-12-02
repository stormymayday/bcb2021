import React, { useState, useEffect } from 'react';

import logo from '../../images/catracha-logo-cropped.jpg';

// Styled Components
import {
    Card,
    CardImage,
    CardText,
    CardHeader,
    CardButton
} from './LotCard.styles';


const LotCard = (props) => {

    useEffect(() => {

    }, [props.lot]);

    // console.log(`Harvest Lot type ${}`)

    return (
        <Card>
            <CardImage

                src={props.lot.images[0] && props.lotType !== 'harvest' ? props.lot.images[0] : logo}

            />
            <CardHeader>

                {/* {props.harvestLot.harvestLotId} */}

            </CardHeader>
            <CardText>

                <b>Product</b>: {props.lot.productName}<br />

                <b>Weight</b>: {props.lot.absorbedWeight} {props.lot.absorbedWeightUnit.endsWith('s') ? props.lot.absorbedWeightUnit : props.lot.absorbedWeightUnit + 's'}<br />

                {/* Not Displaying lot value if it is a harvest lot */}
                {

                    props.lot.lotDetailType === "HarvestGeneral"

                        ?

                        null

                        // <span>Value: {props.lot.value} {props.lot.asset}<br /></span>

                        :

                        null
                }


                {/* Displaying value if it is a Wet Mill Lot on an ExporterIntake Node */}
                {

                    props.lot.productName === "Wet Parchment" && props.lot.lotType === "Storage"

                        ?


                        <span><b>Payment</b>: {props.lot.value} {props.lot.asset}<br /></span>

                        :

                        null
                }

                {/* Displaying Harvest Date if it is harvest lot*/}
                {
                    props.lot.lotDetailType === "HarvestGeneral"

                        ?

                        <span><b>Harvest date</b>: {props.lot.harvestDate.split(' ')[0]}<br /></span>

                        :

                        null
                }
                {/* Displaying Number of bags*/}
                {
                    props.lot.numberOfBags

                        ?

                        <span><b>Number of bags</b>: {props.lot.numberOfBags}<br /></span>

                        :

                        null
                }
                {/* Displaying Import Lot Damage*/}
                {
                    props.lot.damage

                        ?

                        <span><b>Damage</b>: {props.lot.damage}<br /></span>

                        :

                        null
                }
                {/* Not Displaying Import Lot Transfer Date*/}
                {/* {
                    props.lot.transferDate && props.lotType !== 'roasterIntake'

                        ?

                        <span>Transfer Date: {props.lot.transferDate}<br /></span>

                        :

                        null
                } */}

                {/* Displaying Roaster Lot Received Date*/}
                {
                    props.lot.receivedDate

                        ?

                        <span><b>Received Date</b>: {props.lot.receivedDate}<br /></span>

                        :

                        null
                }
                {/* Rendering Cupping Score PDF if lotType is export */}
                {
                    props.lotType === 'export' && props.lot.documents

                        ?

                        <span><b>Cupping Score</b>: <a href={props.lot.documents[0]} target="_blank">download</a><br /></span>

                        :

                        null
                }

                {/* Roasting Lot attributes */}
                {
                    props.lotType === 'roasting' && props.lot.roastLossQuantity

                        ?

                        <span><b>Roast Loss Quantity</b>: {props.lot.roastLossQuantity} lbs<br /></span>

                        :

                        null
                }

                {/* Rendering Roast Date if lotType is roasting */}
                {
                    props.lotType === 'roasting' && props.lot.roastDate

                        ?

                        <span><b>Roast date</b>: {props.lot.roastDate}<br /></span>

                        :

                        null
                }

                {/* Rendering chargeTemperature if lotType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.chargeTemperature

                        ?

                        <span><b>Charge Temperature</b>: {props.lot.chargeTemperature} F<br /></span>

                        :

                        null
                }

                {/* Rendering dropTemperature if lotType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.dropTemperature

                        ?

                        <span><b>Drop Temperature</b>: {props.lot.dropTemperature} F<br /></span>

                        :

                        null
                }

                {/* Rendering totalRoastTime if lotType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.totalRoastTime

                        ?

                        <span><b>Total Roast Time</b>: {props.lot.totalRoastTime} min<br /></span>

                        :

                        null
                }

                {/* Rendering roastType if roastType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.roastType

                        ?

                        <span><b>Roast Level</b>: {props.lot.roastType}<br /></span>

                        :

                        null
                }

                {/* NOT Rendering cuppingScore if lotType is roasting and attribute is not null */}
                {/* {
                    props.lotType === 'roasting' && props.lot.cuppingScore

                        ?

                        <span>Cupping Score: {props.lot.cuppingScore}<br /></span>

                        :

                        null
                } */}

                {/* Rendering roasterActor if lotType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.roasterActor

                        ?

                        <span><b>Roasted by</b>: {props.lot.roasterActor}<br /></span>

                        :

                        null
                }

                {/* Rendering roastingNotes if lotType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.roastingNotes

                        ?

                        <span><b>Roasting Notes</b>: {props.lot.roastingNotes}<br /></span>

                        :

                        null
                }

                {/* Rendering tastingNotes if lotType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.tastingNotes

                        ?

                        <span><b>Tasting Notes</b>: {props.lot.tastingNotes}<br /></span>

                        :

                        null
                }

            </CardText>
            {/* <CardButton>Learn More</CardButton> */}
        </Card>
    )
}

export default LotCard;