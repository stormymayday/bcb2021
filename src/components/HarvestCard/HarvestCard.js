import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HarvestCard = (props) => {

    // Harvest Lot
    // const [currentWeight, setCurrentWeight] = useState('');
    // const [currentWeightUnit, setCurrentWeightUnit] = useState('');
    const [absorbedWeight, setAbsorbedWeight] = useState('');
    const [absorbedWeightUnit, setAbsorbedWeightUnit] = useState('');
    const [harvestDate, setHarvestDate] = useState('');
    // const [collectionDate, setCollectionDate] = useState('');

    useEffect(async () => {

        // Farmer Harvest
        fetch(`https://bext360api.azure-api.net/retaildev/v1/getlot/${props.harvestLot}`, {
            method: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
            }
        }).then(res => res.json())
            .then(json => {

                // setCurrentWeight(json.currentWeight);
                // setCurrentWeightUnit(json.currentWeightUnit);
                setAbsorbedWeight(json.absorbedWeight);
                setAbsorbedWeightUnit(json.absorbedWeightUnit);

                setHarvestDate(json.customData['HarvestDate.MeasureTime'].value);
                // setCollectionDate(json.customData['CollectionDate.MeasureTime'].value);

            });
    }, [])

    // console.log(`Hello from Harvest Card`);

    return (
        <article className='cocktail'>
            <div className='img-contaienr'>
                <img src={`https://robohash.org/${Math.floor(Math.random() * 10) + 1}?set=set4`} />
            </div>
            <div className='cocktail-footer'>
                <p>{props.harvestLot}</p>
                <p>Absorbed weight: {absorbedWeight} {absorbedWeightUnit}</p>
                <p>Harvest date: {harvestDate}</p>
            </div>
        </article >
    );
}

export default HarvestCard;