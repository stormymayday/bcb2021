import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

import Button from 'react-bootstrap/Button';

import slideOne from '../../images/slideOne.jpg';
import slideTwo from '../../images/slideTwo.jpg';

import './Roasting.css';

export const Roasting = (props) => {

    // Converting image
    // const source = 'data:image/jpeg;base64,' + props.roastingImage;

    return (
        <div className="roasting-section-bg" style={{ 'padding-top': '4em', 'padding-bottom': '4em', 'min-height': '50vh' }} id='roasting'>
            <Container>
                <h2 style={{ color: 'white' }}>Roasting</h2>
                <p style={{ color: 'white' }}>Coming Soon</p>
                <Row>

                </Row>
            </Container>
        </div>
    );
}

export default Roasting;