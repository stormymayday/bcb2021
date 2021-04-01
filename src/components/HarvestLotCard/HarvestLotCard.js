import React, { useState, useEffect } from 'react';

// Styled Components
import {
    Card,
    CardImage,
    CardText,
    CardHeader,
    CardButton
} from './HarvestLotCard.styles';

const HarvestLotCard = (props) => {

    const [absorbedWeight, setAbsorbedWeight] = useState('');
    const [absorbedWeightUnit, setAbsorbedWeightUnit] = useState('');
    const [harvestDate, setHarvestDate] = useState('');

    const [paymentAmount, setPaymentAmount] = useState('');

    const [paymentRatio, setPaymentRatio] = useState('');

    useEffect(() => {

        // Farmer Harvest
        fetch(`https://bext360api.azure-api.net/retaildev/v1/getlot/${props.harvestLot}`, {
            method: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
            }
        }).then(res => res.json())
            .then(json => {

                setAbsorbedWeight(json.absorbedWeight);
                setAbsorbedWeightUnit(json.absorbedWeightUnit);
                setHarvestDate(json.customData['HarvestDate.MeasureTime'].value.split(' ')[0]);

                setPaymentAmount(`${Object.values(json.values)[0].value} ${Object.values(json.values)[0].asset}`);
                setPaymentRatio(`${Object.values(json.values)[1].value} ${Object.values(json.values)[1].asset}`);

            });
    }, [props.harvestLot])

    return (
        <Card>
            <CardImage src={`https://robohash.org/${Math.floor(Math.random() * 10) + 1}?set=set4`} />
            <CardHeader>{props.harvestLot}</CardHeader>
            <CardText>Absorbed weight: {absorbedWeight} {absorbedWeightUnit}<br />
                Total Payment: {paymentAmount}<br />
                Payment Ratio: {paymentRatio}<br />
                Harvest date: {harvestDate}
            </CardText>
            {/* <CardButton>Learn More</CardButton> */}
        </Card>
    )
}

export default HarvestLotCard;