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

                src={props.lot.images[0] ? props.lot.images[0] : logo}

            />
            <CardHeader>

                {/* {props.harvestLot.harvestLotId} */}

            </CardHeader>
            <CardText>

                Product: {props.lot.productName}<br />

                Weight: {props.lot.absorbedWeight} {props.lot.absorbedWeightUnit.endsWith('s') ? props.lot.absorbedWeightUnit : props.lot.absorbedWeightUnit + 's'}<br />

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

                        <span>Received Date: {props.lot.receivedDate}<br /></span>

                        :

                        null
                }
                {/* Rendering Cupping Score PDF if lotType is export */}
                {
                    props.lotType === 'export' && props.lot.documents

                        ?

                        <span><a href={props.lot.documents[0]} target="_blank">Cupping Score</a><br /></span>

                        :

                        null
                }

                {/* Roasting Lot attributes */}
                {/* NOT Rendering roastLossPercentage if lotType is roasting and attribute is not null */}
                {/* {
                    props.lotType === 'roasting' && props.lot.roastLossPercentage

                        ?

                        <span>Roast Loss Percentage: {props.lot.roastLossPercentage}<br /></span>

                        :

                        null
                } */}

                {/* NOT Rendering roastLossQuantity if lotType is roasting and attribute is not null */}
                {/* {
                    props.lotType === 'roasting' && props.lot.roastLossQuantity

                        ?

                        <span>Roast Loss Quantity: {props.lot.roastLossQuantity}<br /></span>

                        :

                        null
                } */}

                {/* Rendering Roast Date if lotType is roasting */}
                {
                    props.lotType === 'roasting' && props.lot.roastDate

                        ?

                        <span>Roast date: {props.lot.roastDate}<br /></span>

                        :

                        null
                }

                {/* NOT Rendering varietal if lotType is roasting and attribute is not null */}
                {/* {
                    props.lotType === 'roasting' && props.lot.varietal

                        ?

                        <span>Varietal: {props.lot.varietal}<br /></span>

                        :

                        null
                } */}

                {/* Rendering roastType if lotType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.roastType

                        ?

                        <span>Roast Level: {props.lot.roastType}<br /></span>

                        :

                        null
                }

                {/* Rendering cuppingScore if lotType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.cuppingScore

                        ?

                        <span>Cupping Score: {props.lot.cuppingScore}<br /></span>

                        :

                        null
                }

                {/* NOT Rendering cuppersNotes if lotType is roasting and attribute is not null */}
                {/* {
                    props.lotType === 'roasting' && props.lot.cuppersNotes

                        ?

                        <span>Cuppers Notes: {props.lot.cuppersNotes}<br /></span>

                        :

                        null
                } */}

                {/* Rendering roasterActor if lotType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.roasterActor

                        ?

                        <span>Roasted by: {props.lot.roasterActor}<br /></span>

                        :

                        null
                }

                {/* Rendering roastingNotes if lotType is roasting and attribute is not null */}
                {
                    props.lotType === 'roasting' && props.lot.roastingNotes

                        ?

                        <span>Notes: {props.lot.roastingNotes}<br /></span>

                        :

                        null
                }


            </CardText>
            {/* <CardButton>Learn More</CardButton> */}
        </Card>
    )
}

export default LotCard;