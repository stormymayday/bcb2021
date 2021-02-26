import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading';
import { useParams, useHistory, Link } from 'react-router-dom';

const FarmerDetails = (props) => {

    const { id } = useParams();
    const { location } = useHistory();

    console.log(id, location.state.farmer.farmerName);

    return (
        <>
            <h1>Farmer Details Page</h1>
            <p>Node Id: {location.state.farmer.harvestGeneralNodeID}</p>
            <p>Farmer Name: {location.state.farmer.farmerName}</p>
        </>
    );
}

export default FarmerDetails;