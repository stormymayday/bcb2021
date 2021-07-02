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

    }, [props.lot])

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
                Value: {props.lot.value} {props.lot.asset}<br />
                Product: {props.lot.productName}<br />
                {
                    props.lot.harvestDate ?
                        <p>Harvest date: {props.lot.harvestDate.split(' ')[0]}<br /></p>
                        :
                        <p>Processing date: { }</p>
                }
                {/* Harvest date: {props.lot.harvestDate.split(' ')[0]}<br /> */}

            </CardText>
            {/* <CardButton>Learn More</CardButton> */}
        </Card>
    )
}

export default HarvestLotCard;