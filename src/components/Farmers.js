import React, { useEffect, useState } from 'react';

import FarmerList from './FarmerList/FarmerList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const Farmers = (props) => {

    return (
        <div style={{ 'padding-top': '4em', 'padding-bottom': '4em' }} id='farming'>
            <Container>

                <h2 style={{ 'margin-bottom': '3rem' }}>Farmers</h2>

                {(props.farmers.length !== 0)
                    ? <div>
                        {props.farmers.map(farmer => (
                            <React.Fragment key={farmer.harvestGeneralNodeID}>
                                <p>{farmer.farmerName}</p>
                                <p>{farmer.harvestGeneralNodeID}</p>
                                <img src={farmer.farmerPicture}></img>
                            </React.Fragment>
                        ))}
                    </div>

                    : <h2>fetching data from BEXT</h2>
                }

                <FarmerList>
                </FarmerList>

            </Container>
        </div >
    );
}

export default Farmers;