// EconomicsAndTransparency
import React from 'react';
import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button';

import './EconomicsAndTransparency.css';

import Accordion from 'react-bootstrap/Accordion';
import Pagination from '../../components/Pagination/Pagination';
import paginate from '../../utils';


export const EconomicsAndTransparency = ({



    farmerName,
    harvestYear,
    exporterIntakeLots,
    exportLots,
    importLots,
    roastingNode,
    organizationName,
    roasterIntakeLots,
    finishedProductLots

}) => {

    let wetParchmentLots = 0;
    let firstPayment = 0;
    let secondPayment = 0;
    let spousePayment = 0;
    let ihcafePayment = 0;

    let thirdPayment = 0;

    let totalPerPound = 0;

    let catrachaFOBPrice = 0;
    let catrachaFOBPremium = 0;
    let catrachaCommunityFOB = 0;
    let catrachaFOBPerPound = 0;

    let totalRoastingCostNote = `/lb†
    † cost prior to packaging & distribution`;

    if (exporterIntakeLots) {

        // Filtering out the Wet Parchment lots
        wetParchmentLots = exporterIntakeLots.filter(function (exporterIntakeLot) {
            return exporterIntakeLot.productName === 'Wet Parchment';
        });

        // Summarizing First Payment from the Wet Parchmenet Lots on Exporter Intake Node
        firstPayment = Math.round(wetParchmentLots.reduce(function (acc, obj) { return acc + parseFloat(obj.value); }, 0) / 24.6);

    }


    if (exportLots) {

        // Extracting Second Payment
        secondPayment = exportLots[0].secondPaymentValue ? exportLots[0].secondPaymentValue : 0;

        // Extracting Payment to Spouse
        spousePayment = exportLots[0].spousePaymentValue ? exportLots[0].spousePaymentValue : 0;

        // Extracting IHCAFE Payment
        ihcafePayment = exportLots[0].ihcafePaymentValue ? exportLots[0].ihcafePaymentValue : 0;

        // Calculating Total per pound
        totalPerPound = ((parseFloat(firstPayment) + parseFloat(secondPayment) + parseFloat(spousePayment) + parseFloat(ihcafePayment) + parseFloat(thirdPayment)) / parseFloat(exportLots[0].absorbedWeight)).toFixed(2);

    }

    if (importLots) {

        // Extracting Catracha FOB Base value (FOB Price)
        catrachaFOBPrice = importLots[0].fobBasePaymentValue ? importLots[0].fobBasePaymentValue : 0;

        // Extracting Catracha FOB Premium value
        catrachaFOBPremium = importLots[0].fobPremiumPaymentValue ? importLots[0].fobPremiumPaymentValue : 0;

        // Extracting Catracha FOB Premium value
        catrachaCommunityFOB = importLots[0].catrachaCommunityContributionPaymentValue ? importLots[0].catrachaCommunityContributionPaymentValue : 0;

        // Calculating Catracha FOB Total per pound
        if (catrachaFOBPrice) {
            catrachaFOBPerPound = ((parseFloat(catrachaFOBPrice) + parseFloat(catrachaFOBPremium) + parseFloat(catrachaCommunityFOB)) / parseFloat(importLots[0].absorbedWeight)).toFixed(2);
        }



    }


    // Calculating Third Payment
    if (finishedProductLots) {

        thirdPayment = finishedProductLots.reduce(function (acc, obj) { return acc + parseFloat(obj.thirdPaymentValue); }, 0);

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
                            {/* Converting First Payment to USD by dividing it by 24.6 */}
                            Paid for Parchment: <b>{firstPayment ? firstPayment + ` USD` : `Coming Soon`}

                                {/* {firstPayment} {wetParchmentLots[0].asset} */}

                            </b><br />
                            {
                                (secondPayment && secondPayment !== 'N/A')

                                    ?

                                    <span>Second Payment: <b>{exportLots[0].secondPaymentValue ? exportLots[0].secondPaymentValue + ' ' + exportLots[0].secondPaymentAsset : `Coming Soon`}
                                    </b><br />
                                    </span>

                                    :

                                    null
                            }

                            {

                                (spousePayment && spousePayment !== 'N/A')

                                    ?

                                    <span>Payment to Spouse: <b>{exportLots ? exportLots[0].spousePaymentValue + ' ' + exportLots[0].spousePaymentAsset : `Coming Soon`}
                                    </b><br />
                                    </span>

                                    :

                                    null

                            }

                            {

                                (ihcafePayment && ihcafePayment !== 'N/A')

                                    ?

                                    <span>IHCAFE Payment: <b>{exportLots ? exportLots[0].ihcafePaymentValue + ' ' + exportLots[0].ihcafePaymentAsset : `Coming Soon`}
                                    </b><br />
                                    </span>

                                    :

                                    null

                            }

                            Third Payment: <b>{thirdPayment ? thirdPayment + ' ' + finishedProductLots[0].thirdPaymentAsset : `Coming Soon`} </b><br />

                            {

                                (totalPerPound && harvestYear !== '2021')

                                    ?

                                    <span>Payment Per Pound Exported: <b>{`${totalPerPound} USD`}
                                    </b><br />
                                    </span>

                                    :

                                    null

                            }

                        </p>

                    </Col>

                    <Col lg={4} sm={12}>

                        <h3 style={{ 'padding-bottom': '0.5em' }}>Catracha Coffee</h3>

                        <p>
                            {
                                (catrachaFOBPrice && catrachaFOBPrice !== 'N/A')

                                    ?

                                    <span>FOB Price: <b>{importLots ? importLots[0].fobBasePaymentValue + ' ' + importLots[0].fobBasePaymentAsset : `Coming Soon`}
                                    </b><br />
                                    </span>

                                    :

                                    null
                            }

                            {
                                (catrachaFOBPremium && catrachaFOBPremium !== 'N/A')

                                    ?

                                    <span>FOB Premium: <b>{importLots ? importLots[0].fobPremiumPaymentValue + ' ' + importLots[0].fobPremiumPaymentAsset : `Coming Soon`}
                                    </b><br />
                                    </span>

                                    :

                                    null
                            }

                            {
                                (catrachaCommunityFOB && catrachaCommunityFOB !== 'N/A')

                                    ?

                                    <span>FOB Catracha Community: <b>{importLots ? importLots[0].catrachaCommunityContributionPaymentValue + ' ' + importLots[0].catrachaCommunityContributionPaymentAsset : `Coming Soon`}
                                    </b><br />
                                    </span>

                                    :

                                    null
                            }

                            {
                                catrachaFOBPerPound

                                    ?

                                    <span>FOB Total Per Pound: <b>{`${catrachaFOBPerPound} USD`}
                                    </b><br />
                                    </span>

                                    :

                                    null
                            }

                        </p>

                    </Col>

                    {
                        roasterIntakeLots

                            ?

                            <Col lg={4} sm={12}>

                                <h3 style={{ 'padding-bottom': '0.5em' }}>{organizationName}</h3>

                                <p>

                                    FOB: <b>
                                        {

                                            roasterIntakeLots[0].fobPaymentValue && roasterIntakeLots[0].fobPaymentAsset

                                                ?

                                                roasterIntakeLots[0].fobPaymentValue + ' ' + roasterIntakeLots[0].fobPaymentAsset + `/lb`

                                                :

                                                `Coming Soon`

                                        }
                                    </b><br />

                                    Import Cost: <b>
                                        {

                                            roasterIntakeLots[0].importCostValue && roasterIntakeLots[0].importCostAsset

                                                ?

                                                roasterIntakeLots[0].importCostValue + ' ' + roasterIntakeLots[0].importCostAsset + `/lb`

                                                :

                                                `Coming Soon`

                                        }
                                    </b><br />

                                    Freight Cost: <b>
                                        {

                                            roasterIntakeLots[0].freightCostValue && roasterIntakeLots[0].freightCostAsset

                                                ?

                                                roasterIntakeLots[0].freightCostValue + ' ' + roasterIntakeLots[0].freightCostAsset + `/lb`

                                                :

                                                `Coming Soon`

                                        }
                                    </b><br />

                                    Roasting Labor: <b>
                                        {

                                            roasterIntakeLots[0].roastingCostValue && roasterIntakeLots[0].roastingCostAsset

                                                ?

                                                roasterIntakeLots[0].roastingCostValue + ' ' + roasterIntakeLots[0].roastingCostAsset + `/lb`

                                                :

                                                `Coming Soon`

                                        }
                                    </b><br />

                                    Total Cost At Roaster: <b>

                                        {

                                            roasterIntakeLots[0].fobPaymentValue && roasterIntakeLots[0].importCostValue && roasterIntakeLots[0].freightCostValue && roasterIntakeLots[0].roastingCostValue && roasterIntakeLots[0].roastingCostAsset

                                                ?

                                                (parseFloat(roasterIntakeLots[0].fobPaymentValue) + parseFloat(roasterIntakeLots[0].importCostValue) + parseFloat(roasterIntakeLots[0].freightCostValue) + parseFloat(roasterIntakeLots[0].roastingCostValue)).toFixed(2)
                                                + ' ' + roasterIntakeLots[0].roastingCostAsset +
                                                `/lb†`

                                                :

                                                `Coming Soon`

                                        }

                                        <p>
                                            {

                                                roasterIntakeLots[0].fobPaymentValue && roasterIntakeLots[0].importCostValue && roasterIntakeLots[0].freightCostValue && roasterIntakeLots[0].roastingCostValue && roasterIntakeLots[0].roastingCostAsset

                                                    ?

                                                    `† cost prior to packaging & distribution`

                                                    :

                                                    null

                                            }
                                        </p>

                                    </b><br />

                                </p>

                            </Col>

                            :

                            null

                    }


                </Row>


                {

                    finishedProductLots

                        ?

                        <Row>

                            {
                                finishedProductLots[0].images[0]

                                    ?

                                    <Col lg={4} sm={12} style={{ 'padding-bottom': '2em' }}>

                                        <Image src={finishedProductLots[0].images[0]} thumbnail />

                                    </Col>

                                    :

                                    null
                            }

                            {
                                finishedProductLots[0].images[1]

                                    ?

                                    <Col lg={4} sm={12} style={{ 'padding-bottom': '2em' }}>
                                        <Image src={finishedProductLots[0].images[1]} thumbnail />

                                    </Col>

                                    :

                                    null
                            }

                            {
                                finishedProductLots[0].images[2]

                                    ?

                                    <Col lg={4} sm={12}>
                                        <Image src={finishedProductLots[0].images[2]} thumbnail />
                                    </Col>

                                    :

                                    null
                            }

                        </Row>

                        :

                        null

                }

            </Container>

        </div >

    );
}

export default EconomicsAndTransparency;