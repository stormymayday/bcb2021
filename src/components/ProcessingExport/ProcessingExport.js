import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import Accordion from 'react-bootstrap/Accordion';

import './ProcessingExport.css';

import Pagination from '../Pagination/Pagination';
import paginate from '../../utils';

import catrachaBG from '../../images/mural-min.JPG';


export const ProcessingExport = ({

    exporterIntakeNode,
    exporterLogo,
    exporterIntakeCity,
    exporterIntakeState,
    exporterIntakeCountry,
    exporterIntakeElevation,
    exporterIntakeElevationUnit,

    dryMillNode,
    dryMillIntakeCity,
    dryMillIntakeState,
    dryMillIntakeCountry,
    dryMillIntakeElevation,
    dryMillIntakeElevationUnit,

    dryParchmentAbsorbedWeight,
    dryParchmentAbsorbedWeightUnit,
    greenCoffeeAbsorbedWeight,
    greenCoffeeAbsorbedWeightUnit,

    dryMillLots,

    exportNode,
    exportLots

}) => {

    let dryParchmentLots = 0;

    let coffeeGreenLots = 0;

    if (dryMillLots) {

        // Filtering out the Dry Parchment lots
        dryParchmentLots = dryMillLots.filter(function (dryMillLot) {
            return dryMillLot.productName === 'Dry Parchment';
        });

        // Filtering out the Coffee Green lots
        coffeeGreenLots = dryMillLots.filter(function (dryMillLot) {
            return dryMillLot.productName === 'Coffee Green';
        });

    }

    const test = 0;

    return (

        <div style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='processing-export'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>Processing & Export</h2>
                <div className='underline' style={{ 'margin-bottom': '3em', 'background': '#000' }}></div>

                <Card

                    className="text-center"
                    border="light"
                    text='light'
                    style={{ 'background-color': 'transparent', 'margin-bottom': '1rem' }}>

                    <Card.Body

                        style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${catrachaBG})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}

                    >

                        {
                            exporterIntakeNode

                                ?

                                <a href="https://www.catrachacoffee.com/" target="_blank">


                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50 img-thumbnail"
                                        variant="top"
                                        src={exporterIntakeNode ? exporterLogo : null}
                                        style={{ 'margin-bottom': '1rem', 'margin-top': '1rem', 'max-width': '15rem' }}
                                    />

                                </a>

                                :

                                null

                        }


                        <Card.Text>
                            {
                                exporterIntakeNode

                                    ?

                                    null

                                    :

                                    <h3 style={{ color: 'white', 'padding-top': '2rem', 'padding-bottom': '2rem' }}>Catracha Coffee</h3>

                            }
                            A social enterprise dedicated to accessing the specialty coffee market for coffee farmers in Santa Elena, La Paz, Honduras.
                        </Card.Text>
                        <Button
                            variant="outline-light"
                            href={'https://www.catrachacoffee.com/'}
                            target="_blank"
                        >
                            <b>Learn More</b>
                        </Button>
                    </Card.Body>
                </Card>

                <Row>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-top': '0.5em' }}>Exporter Intake</h3>


                        <p>

                            Location: <b>{exporterIntakeNode ? exporterIntakeCity + ', ' + exporterIntakeState : `Coming Soon`}</b><br />

                            Dry Parchment Total Weight: <b>

                                {
                                    dryParchmentLots != 0

                                        ?

                                        dryParchmentLots[0].absorbedWeight + ' ' +

                                        (
                                            dryParchmentLots[0].absorbedWeightUnit.endsWith('s')

                                                ?

                                                dryParchmentLots[0].absorbedWeightUnit

                                                :

                                                dryParchmentLots[0].absorbedWeightUnit + 's'
                                        )

                                        :

                                        `Coming Soon`
                                }

                            </b><br />

                        </p>


                        <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <button className='bttn bttn-primary'>{dryMillLots ? `Dry Parchment Lots` : `Dry Parchment Lots (Coming Soon)`}</button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        <Pagination

                                            lots={dryParchmentLots ? paginate(dryParchmentLots) : []}

                                        />

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p>The producer dries the wet parchment at their mill and then sells the dry parchment to Catracha Coffee.   After the moisture is removed, the remaining weight of the seed inside the thin membrane is called dry parchment.  The producer is paid based on the weight of the dry parchment delivered to Catracha Coffee.</p>

                    </Col>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-top': '0.5em' }}>Dry Mill</h3>

                        <p>

                            Location: <b> {dryMillNode ? dryMillIntakeCity + ', ' + dryMillIntakeState : `Coming Soon`}</b><br />

                            Green Coffee Total Weight: <b>

                                {
                                    coffeeGreenLots != 0

                                        ?

                                        coffeeGreenLots[0].absorbedWeight + ' ' +

                                        (
                                            coffeeGreenLots[0].absorbedWeightUnit.endsWith('s')

                                                ?

                                                coffeeGreenLots[0].absorbedWeightUnit

                                                :

                                                coffeeGreenLots[0].absorbedWeightUnit + 's'
                                        )

                                        :

                                        `Coming Soon`
                                }

                            </b><br />

                        </p>

                        <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <button className='bttn bttn-primary'>
                                        {dryMillLots ? `Coffee Green Lots` : `Coffee Green Lots (Coming Soon)`}
                                    </button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        <Pagination

                                            lots={coffeeGreenLots ? paginate(coffeeGreenLots) : []}

                                        />

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p>The coffee seeds are removed from the thin membrane (parchment) and sorted to remove lower quality seeds.  After this process of dehulling and sorting, the remaining weight of the seed is called green coffee.</p>


                    </Col>

                    <Col md='12' lg='4'>

                        <h3 style={{ 'padding-top': '0.5em' }}>Export</h3>

                        <p>

                            Location: <b>
                                {exportNode ? exportNode.city : `Coming Soon`}
                            </b><br />

                            Green Coffee Total Weight: <b>

                                {
                                    exportLots != null

                                        ?

                                        exportLots[0].absorbedWeight + ' ' +

                                        (
                                            exportLots[0].absorbedWeightUnit.endsWith('s')

                                                ?

                                                exportLots[0].absorbedWeightUnit

                                                :

                                                exportLots[0].absorbedWeightUnit + 's'
                                        )

                                        :

                                        `Coming Soon`
                                }

                            </b><br />

                        </p>

                        <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <button className='bttn bttn-primary'>
                                        {exportLots ? `Export Lots` : `Export Lots (Coming Soon)`}
                                    </button>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        <Pagination

                                            lots={exportLots ? paginate(exportLots) : []}

                                            lotType={'export'}

                                        />

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p>The green coffee is packaged in 69 kg bags and placed inside of a shipping container for export. A container can hold up to 275 bags of green coffee.</p>

                    </Col>

                </Row>

            </Container>
        </div >
    );
}

export default ProcessingExport;