import React, { useEffect, useState } from 'react';

import './FarmerList.css';

import FarmerCard from '../FarmerCard/FarmerCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const FarmerList = (props) => {

    return (
        <>
            <h1 style={{ 'margin-bottom': '3rem', 'text-align': 'center' }}>Farmers</h1>
            <section className="farmer-list">
                {(props.farmers.length !== 0)
                    ? props.farmers.map(farmer => (
                        <FarmerCard key={farmer.harvestGeneralNodeID} farmer={farmer} />
                    ))
                    : <p>fetching data from BEXT</p>
                }
            </section>
        </>
    );
}

export default FarmerList;