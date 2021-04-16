import React, { useState, useEffect } from 'react';

// Styled Components
import {
    Card,
    CardImage,
    CardText,
    CardHeader,
    CardButton
} from './ProcessingLotCard.styles';

const ProcessingLotCard = (props) => {

    // const [absorbedWeight, setAbsorbedWeight] = useState('');
    // const [absorbedWeightUnit, setAbsorbedWeightUnit] = useState('');
    // const [harvestDate, setHarvestDate] = useState('');

    // useEffect(() => {

    //     // Farmer Harvest
    //     fetch(`https://bext360api.azure-api.net/retaildev/v1/getlot/${props.harvestLot}`, {
    //         method: 'GET',
    //         headers: {
    //             'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //         }
    //     }).then(res => res.json())
    //         .then(json => {

    //             setAbsorbedWeight(json.absorbedWeight);
    //             setAbsorbedWeightUnit(json.absorbedWeightUnit);

    //         });
    // }, [props.harvestLot])

    console.log(props);

    return (
        <Card>
            {/* <CardImage src={`https://robohash.org/${Math.floor(Math.random() * 10) + 1}?set=set4`} /> */}
            <CardHeader>{props.harvestLot.id}</CardHeader>
            <CardText>
                {/* Absorbed weight: {absorbedWeight} {absorbedWeightUnit}<br /> */}
                Lot Name: {props.harvestLot.lotName}<br />
                Current Weight: {props.harvestLot.lotCurrentWeight} {props.harvestLot.lotCurrentWeightUnit}<br />
            </CardText>
            {/* <CardButton>Learn More</CardButton> */}
        </Card>
    )
}

export default ProcessingLotCard;