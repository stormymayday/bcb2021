// EconomicsAndTransparency
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import slideOne from '../images/slideOne.jpg';
import slideTwo from '../images/slideTwo.jpg';

import './EconomicsAndTransparency.css';


export const EconomicsAndTransparency = () => {
    return (
        <div className="economics-section-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='economics'>

            <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Economics & Transparency</h2>
            <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#fff' }}></div>

            <Container>
                <p style={{ color: 'white' }}>Technology can revolutionize the way coffee growers sell their product by authenticating direct trade claims, tracking supply chain activities and facilitating economic transparency. And research shows this yields increased profits, feedback and capital access for global producers. Below, stakeholders share economic data for financial transparency.</p>

                <Row style={{ 'color': 'white' }}>

                    <Col lg={4} sm={12}>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Claudia & Juan</h3>

                        <p>
                            Paid for Parchment: <b>Coming Soon</b><br />
                            Profit Share: <b>Coming Soon</b><br />
                            Total Payment: <b>Coming Soon</b><br />
                            Total Payment Price: <b>Coming Soon</b>
                        </p>

                    </Col>

                    <Col lg={4} sm={12}>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Catracha Coffee</h3>

                        <p>
                            FOB base: <b>Coming Soon</b><br />
                            FOB premium: <b>Coming Soon</b><br />
                            FOB Catracha Community contribution: <b>Coming Soon</b><br />
                            FOB total: <b>Coming Soon</b><br />
                        </p>

                    </Col>

                    <Col lg={4} sm={12}>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Queen City</h3>

                        <p>
                            QC FOB: <b>Coming Soon</b><br />
                            QC import cost: <b>Coming Soon</b><br />
                            QC freight: <b>Coming Soon</b><br />
                            QC roasting labor: <b>Coming Soon</b><br />
                            QC total cost at roaster: <b>Coming Soon</b><br />
                        </p>

                    </Col>

                </Row>


            </Container>
        </div>
    );
}

export default EconomicsAndTransparency;