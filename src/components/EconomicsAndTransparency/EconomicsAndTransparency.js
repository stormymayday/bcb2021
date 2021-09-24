// EconomicsAndTransparency
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import './EconomicsAndTransparency.css';

import Accordion from 'react-bootstrap/Accordion';
import Pagination from '../../components/Pagination/Pagination';
import paginate from '../../utils';


export const EconomicsAndTransparency = ({

    farmerName,
    exporterIntakeLots,
    exportLots,
    importLots,
    roastingNode

}) => {


    let wetParchmentLots = 0;

    let firstPayment = 0;

    if (exporterIntakeLots) {

        // Filtering out the Wet Parchment lots
        wetParchmentLots = exporterIntakeLots.filter(function (exporterIntakeLot) {
            return exporterIntakeLot.productName === 'Wet Parchment';
        });

        // Summarizing First Payment from the Wet Parchmenet Lots on Exporter Intake Node
        firstPayment = wetParchmentLots.reduce(function (acc, obj) { return acc + parseFloat(obj.value); }, 0);

    }

    return (
        <div className="economics-section-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='economics'>

            <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Economics & Transparency</h2>
            <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#fff' }}></div>

            <Container>
                <p style={{ color: 'white' }}>Technology can revolutionize the way coffee growers sell their product by authenticating direct trade claims, tracking supply chain activities and facilitating economic transparency. And research shows this yields increased profits, feedback and capital access for global producers. Below, stakeholders share economic data for financial transparency.</p>

                <Row style={{ 'color': 'white' }}>

                    <Col lg={4} sm={12}>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>{farmerName ? farmerName : `Farmer`}</h3>

                        <p>
                            Paid for Parchment: <b>{firstPayment ? firstPayment + ' ' + wetParchmentLots[0].asset : `Coming Soon`}

                                {/* {firstPayment} {wetParchmentLots[0].asset} */}

                            </b><br />
                            Second Payment: <b>{exportLots ? exportLots[0].secondPaymentValue + ' ' + exportLots[0].secondPaymentAsset : `Coming Soon`}

                                {/* {exportLots[0].secondPaymentValue ? exportLots[0].secondPaymentValue : "N/A"} {exportLots[0].secondPaymentAsset ? exportLots[0].secondPaymentAsset : ""} */}

                            </b><br />
                            Payment to spouse: <b>{exportLots ? exportLots[0].spousePaymentValue + ' ' + exportLots[0].spousePaymentAsset : `Coming Soon`}
                                {/* {exportLots[0].spousePaymentValue ? exportLots[0].spousePaymentValue : "N/A"} {exportLots[0].spousePaymentAsset ? exportLots[0].spousePaymentAsset : ""} */}
                            </b><br />
                            IHCAFE Payment: <b>{exportLots ? exportLots[0].ihcafePaymentValue + ' ' + exportLots[0].ihcafePaymentAsset : `Coming Soon`}
                                {/* {exportLots[0].ihcafePaymentValue ? exportLots[0].ihcafePaymentValue : "N/A"} {exportLots[0].ihcafePaymentAsset ? exportLots[0].ihcafePaymentAsset : ""} */}
                            </b>
                        </p>

                    </Col>

                    <Col lg={4} sm={12}>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Catracha Coffee</h3>

                        <p>
                            FOB base: <b>{importLots ? importLots[0].fobBasePaymentValue + ' ' + importLots[0].fobBasePaymentAsset : `Coming Soon`}</b><br />
                            FOB premium: <b>{importLots ? importLots[0].fobPremiumPaymentValue + ' ' + importLots[0].fobPremiumPaymentAsset : `Coming Soon`}</b><br />
                            FOB Catracha Community contribution: <b>{importLots ? importLots[0].catrachaCommunityContributionPaymentValue + ' ' + importLots[0].catrachaCommunityContributionPaymentAsset : `Coming Soon`}</b><br />
                            FOB total: <b>{importLots ? parseFloat(importLots[0].fobBasePaymentValue) + parseFloat(importLots[0].fobPremiumPaymentValue) + parseFloat(importLots[0].catrachaCommunityContributionPaymentValue) + ' ' + importLots[0].fobBasePaymentAsset : `Coming Soon`}</b><br />
                        </p>

                    </Col>

                    {
                        farmerName === `Claudia & Juan`

                            ?

                            <Col lg={4} sm={12}>

                                <h3 style={{ 'padding-bottom': '0.5em' }}>Roaster</h3>

                                <p>
                                    QC FOB: <b>Coming Soon</b><br />
                                    QC import cost: <b>Coming Soon</b><br />
                                    QC freight: <b>Coming Soon</b><br />
                                    QC roasting labor: <b>Coming Soon</b><br />
                                    QC total cost at roaster: <b>Coming Soon</b><br />
                                </p>

                            </Col>

                            :

                            null

                    }


                </Row>

                {/* Testing the Lots */}
                {/* <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <button className='bttn bttn-primary'>Test</button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>

                                <Pagination

                                    lots={wetParchmentLots ? paginate(wetParchmentLots) : []}

                                />

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion> */}


            </Container>
        </div>
    );
}

export default EconomicsAndTransparency;