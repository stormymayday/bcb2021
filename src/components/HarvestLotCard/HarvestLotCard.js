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

    const [lotImage1, setLotImage1] = useState('');
    const [lotImage2, setLotImage2] = useState('');

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

                if (json.images[0]) {

                    setLotImage1(json.images[0].urls[0]);

                } else {

                    setLotImage1(`https://robohash.org/${Math.floor(Math.random() * 10) + 1}?set=set4`);

                }
                // if (json.images[1]) {

                //     setLotImage2(json.images[1].urls[0]);

                // }

                setAbsorbedWeight(json.absorbedWeight);
                setAbsorbedWeightUnit(json.absorbedWeightUnit);

                if (json.customData['HarvestDate.MeasureTime'].value) {
                    setHarvestDate(json.customData['HarvestDate.MeasureTime'].value.split(' ')[0]);
                }

                if (json.values) {
                    setPaymentAmount(`${Object.values(json.values)[0].value} ${Object.values(json.values)[0].asset}`);
                    setPaymentRatio(`${Object.values(json.values)[1].value} ${Object.values(json.values)[1].asset}`);
                }

            });
    }, [props.harvestLot])

    // console.log(lotImage1, lotImage2);

    return (
        <Card>
            <CardImage

                // src={`https://robohash.org/${Math.floor(Math.random() * 10) + 1}?set=set4`}
                src={lotImage1}

            />
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