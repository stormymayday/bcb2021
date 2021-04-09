import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import './ProcessingExport.css';

// Components
import ProcessingSectionPagination from '../ProcessingSectionPagination/ProcessingSectionPagination';



export const ProcessingExport = (props) => {


    const paginate = (items) => {
        const itemsPerPage = 4
        const numberOfPages = Math.ceil(items.length / itemsPerPage)

        const newItems = Array.from({ length: numberOfPages }, (_, index) => {
            const start = index * itemsPerPage
            return items.slice(start, start + itemsPerPage)
        })

        return newItems
    }





    return (
        <div className="processing-section-bg" style={{ 'padding-top': '4em', 'padding-bottom': '1em' }} id='processing-export'>
            <Container>

                <h2 style={{ color: 'white' }}>Processed and Exported by Catracha Coffee</h2>
                <p style={{ color: 'white' }}>A social enterprise dedicated to accessing the specialty coffee market for coffee farmers in Santa Elena, La Paz, Honduras.</p>
                <p style={{ color: 'white' }}>Test data:</p>

                <ProcessingSectionPagination numberOfLots={props.numberOfLots} processingLotIds={paginate(props.processingLotIds)} ></ProcessingSectionPagination>

            </Container>
        </div>
    );
}

export default ProcessingExport;