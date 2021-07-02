import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import './ProcessingExport.css';

import Pagination from '../components/Pagination/Pagination';
import paginate from '../utils';


export const ProcessingExport = ({

    dryParchmentAbsorbedWeight,
    dryParchmentAbsorbedWeightUnit,

    greenCoffeeAbsorbedWeight,
    greenCoffeeAbsorbedWeightUnit,

    wetMillLots

}) => {

    return (
        <div className="processing-section-bg" style={{ 'padding-top': '4em', 'padding-bottom': '4em' }} id='processing-export'>
            <Container>

                <h2 style={{ color: 'white' }}>Catracha Coffee</h2>
                <p style={{ color: 'white' }}>A social enterprise dedicated to accessing the specialty coffee market for coffee farmers in Santa Elena, La Paz, Honduras.</p>
                <Row>
                    {/* <Col lg={3} md={6} sm={12}>
                        <Button variant="outline-light" size="lg" block style={{ 'margin-bottom': '2rem' }}>LEARN MORE</Button>
                    </Col> */}
                </Row>

                <Row>

                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-bottom': '0.5em', 'color': 'white' }}>Intake</h3>

                        <p style={{ color: 'white' }}>
                            Dry Parchment Total Absorbed Weight: {dryParchmentAbsorbedWeight} {dryParchmentAbsorbedWeightUnit}
                        </p>

                    </Col>

                    <Col md='12' lg='6'>

                        <h3 style={{ 'padding-bottom': '0.5em', 'color': 'white' }}>Dry Mill</h3>

                        <p style={{ color: 'white' }}>
                            Green Coffee Total Absorbed Weight: {greenCoffeeAbsorbedWeight} {greenCoffeeAbsorbedWeightUnit}
                        </p>

                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default ProcessingExport;