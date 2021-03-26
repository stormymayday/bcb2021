import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import './ProcessingExport.css';


export const ProcessingExport = (props) => {

    return (
        <div className="processing-section-bg" style={{ 'padding-top': '4em', 'padding-bottom': '4em', 'min-height': '50vh' }} id='processing-export'>
            <Container>

                <h2 style={{ color: 'white' }}>Processed and Exported by Catracha Coffee</h2>
                <p style={{ color: 'white' }}>A social enterprise dedicated to accessing the specialty coffee market for coffee farmers in Santa Elena, La Paz, Honduras.</p>
                <p style={{ color: 'white' }}>Coming Soon</p>

            </Container>
        </div>
    );
}

export default ProcessingExport;