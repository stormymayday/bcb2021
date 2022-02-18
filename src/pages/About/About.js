import React, { useEffect, useState } from 'react'

// Google Analytics
import ReactGA from 'react-ga';

import RoastersPageNavigation from '../../components/RoastersPageNavigation/RoastersPageNavigation';

import PartnersSection from '../../sections/partners/PartnersSection';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// Sections
import Farming from '../../components/Farming/Farming';
import ProcessingExport from '../../components/ProcessingExport/ProcessingExport';
import Import from '../../components/Import/Import';
import Roasting from '../../components/Roasting/Roasting';
import Economics from '../../components/EconomicsAndTransparency/EconomicsAndTransparency';
import Footer from '../../components/Footer/Footer';

import Loading from '../../components/Loading/Loading';
import ScrollToTop from '../../components/ScrollToTop/ScrollTopTop';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import Button from 'react-bootstrap/Button';

//Icons
import { FaHandshake } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { BsStarFill } from 'react-icons/bs';
import { MdSettingsRemote } from 'react-icons/md';
import { GiCoffeeBeans } from 'react-icons/gi';

//Logos
import qccclogo from '../../images/qc-logo-p-500.png';
import catratchalogo from '../../images/catracha-logo.jpg';

import './About.css';

export const About = () => {


    return (

        <main>

            <RoastersPageNavigation />

            {/* <div className='about-bg' style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} /> */}

            <div
                className="blue-green-gradient-bg"
                style={{
                    'padding-top': '5em',
                    'padding-bottom': '4em',
                    'color': '#fff'
                }} id=''>
                <Container>

                    <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>About Blockchain Coffee Beans</h2>
                    <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#fff' }}></div>

                    <Row style={{ 'padding-top': '1em' }}>

                        <Col md='12' lg='12'>

                            <h3 style={{ 'padding-bottom': '0.5em' }}>What am I looking at?</h3>

                            <p>Here you can connect to your coffee like in ways you have never before - see where it is picked and by who, trace its journey across the sea as it transforms from cherries to beans. Learn about the exporters and roasters that make your speciality coffee possible and the economics behind them. </p>

                            <p>
                                The partners highlighted here are also participating in direct trade and sharing the proceed of their sales back to the farmers, laborers and the community in what we call the Third Payment! (see more below)
                            </p>

                            <h3 style={{ 'padding-top': '1em', 'padding-bottom': '0.5em' }}>Why are we doing this?</h3>

                            <p>Making great coffee is hard. Together we, a group of exporters, roasters, technologist and impact experts who care about sustainability of the people and the land joined together to see if we can do better. The project aims to answer the following questions:</p>

                            <ul>
                                <li style={{
                                    'list-style': 'inside',
                                    'margin-left': '0.5em'
                                }}>
                                    What does it take to implement blockchain technology to track goods in the specialized coffee value chain?
                                </li>
                                <li style={{
                                    'list-style': 'inside',
                                    'margin-left': '0.5em'
                                }}>
                                    What level of transparency can be achieved and is trust created?
                                    Is that valuable to exporters, roasters and end customers along the coffee value chain?
                                </li>
                                <li style={{
                                    'list-style': 'inside',
                                    'margin-left': '0.5em'
                                }}>
                                    Finally, if indeed people did find this transparency to be valuable, how might we translate this into meaningful benefits for producers around the world?
                                </li>
                            </ul>

                        </Col>

                    </Row>
                </Container>
            </div>

            <div
                style={{
                    'padding-top': '5em',
                    'padding-bottom': '4em'
                }}
                id=''>
                <Container>

                    <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>Third Payment</h2>
                    <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#000' }}></div>

                    <Row style={{ 'padding-top': '1em' }}>

                        <Col md='12' lg='12'>

                            <h3 style={{ 'padding-bottom': '0.5em' }}>Lowell, co-founder of Catracha Coffee put it this way:</h3>

                            <p>“We want to start a customer driven initiative called "third payment." Currently we make two payments to producers, the first when Catracha buys the coffee here in Honduras, and the second when we sell the coffee and receive a premium from the roaster.  This second payment is called profit sharing and payment happens in August.</p>

                            <p>
                                With Third Payment, roasters could add $1 to the roasted price of a pound of coffee and let the customer know that you will send that extra dollar back to the producer.  This is a customer driven payment so a customer feels part of improving our supply chain.
                            </p>

                            <p>
                                The plan is to split this "third payment" three ways.  One part would go straight to the producer who produces the coffee.  One part would be used to increase the wages of coffee pickers.  And the third part would be used to create an emergency medical care response fund to help producers who are dealing with unexpected expenses from a medical emergency.
                            </p>

                            <p>
                                Paying pickers would happen in the next harvest.  The third payment fund would add to what the farmer pays the pickers.  The goal would be to add 25%.  We can use the blockchain platform and landing page for data so we can track payment to every picker, and customers would see the increase.  We hope to pay pickers better and avoid increased upfront labor costs for producers.  The quality of the pick would likely improve too, positively impacting the quality of the green coffee.
                            </p>

                            <p>
                                The emergency medical care fund will need some ground rules that can be developed later.  Our first thought is to deposit funds into the rural bank that we formed with producers and use the same board members who approve credit to also approve emergency funds.
                            </p>

                        </Col>

                    </Row>
                </Container>
            </div>

            <div
                className="blue-green-gradient-bg"
                style={{
                    'padding-top': '5em',
                    'padding-bottom': '4em',
                }}
                id=''>
                <Container>

                    <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': '#fff' }}>Blockchain Coffee Beans Milestones</h2>
                    <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#fff' }}></div>

                    <Row>

                        <VerticalTimeline>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                                date="2019-08-07"
                                // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                                icon={<FaHandshake />}
                            >
                                <h3 className="vertical-timeline-element-title">QCCC agreed in principle to participate!</h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">Nibh, Tortor</h4>
                                <p>
                                    Varius morbi enim nunc faucibus a pellentesque
                                </p> */}
                                {/* <a href="https://queencitycollectivecoffee.com/" target="_blank">
                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50"
                                        variant="top"
                                        src={qccclogo}
                                        style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                    />
                                </a> */}
                                <a href="https://www.catrachacoffee.com/" target="_blank">
                                    <Image

                                        src={qccclogo}
                                        style={{
                                            'background-color': '#000',
                                            'max-width': '75%',
                                            'margin-top': '2rem',
                                            'margin-bottom': '2rem',
                                            'display': 'block',
                                            'margin-left': 'auto',
                                            'margin-right': 'auto'
                                        }}
                                    ></Image>
                                </a>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2019-08-21"
                                contentStyle={{ background: '#AF1115', color: '#fff' }}
                                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                contentArrowStyle={{ borderRight: '7px solid  #AF1115' }}
                                // iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                iconStyle={{ background: '#AF1115', color: '#fff' }}
                                icon={<FaHandshake />}
                            >
                                <h3 className="vertical-timeline-element-title">Catracha agreed in principle to participate!</h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">Nibh, Tortor</h4>
                                <p>
                                    Varius morbi enim nunc faucibus a pellentesque
                                </p> */}
                                {/* <a href="https://www.catrachacoffee.com/" target="_blank">
                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50"
                                        variant="top"
                                        src={catratchalogo}
                                        style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                    />
                                </a> */}
                                <a href="https://www.catrachacoffee.com/" target="_blank">
                                    <Image
                                        thumbnail
                                        src={catratchalogo}
                                        style={{
                                            'max-width': '75%',
                                            'margin-top': '2rem',
                                            'margin-bottom': '2rem',
                                            'display': 'block',
                                            'margin-left': 'auto',
                                            'margin-right': 'auto'
                                        }}
                                    ></Image>
                                </a>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2019-10-09"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<HiUserGroup />}
                            >
                                <h3 className="vertical-timeline-element-title">First call with all 4 parties - confirm match</h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">Nibh, Tortor</h4>
                                <p>
                                    Varius morbi enim nunc faucibus a pellentesque
                                </p> */}
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2020-01-06"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<MdSettingsRemote />}
                            >
                                <h3 className="vertical-timeline-element-title">Remote training for Lowell @ Catracha</h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">Nibh, Tortor</h4>
                                <p>
                                    Varius morbi enim nunc faucibus a pellentesque
                                </p> */}
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2020-01-13"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<GiCoffeeBeans />}
                            >
                                <h3 className="vertical-timeline-element-title">First harvest for Claudia and Juan</h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">Nibh, Tortor</h4>
                                <p>
                                    Varius morbi enim nunc faucibus a pellentesque
                                </p> */}
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2020-02-14"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<GiCoffeeBeans />}
                            >
                                <h3 className="vertical-timeline-element-title">Last harvest for Claudia and Juan</h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">Nibh, Tortor</h4>
                                <p>
                                    Varius morbi enim nunc faucibus a pellentesque
                                </p> */}
                            </VerticalTimelineElement>

                            {/* <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2006 - 2008"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                <p>
                                    User Experience, Visual Design
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="April 2013"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            // icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Sagittis Aliquam</h3>
                                <h4 className="vertical-timeline-element-subtitle">Nibh, Tortor</h4>
                                <p>
                                    Varius morbi enim nunc faucibus a pellentesque
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="November 2012"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            // icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Sagittis Aliquam</h3>
                                <h4 className="vertical-timeline-element-subtitle">Nibh, Tortor</h4>
                                <p>
                                    Varius morbi enim nunc faucibus a pellentesque
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2002 - 2006"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            // icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Sagittis Aliquam</h3>
                                <h4 className="vertical-timeline-element-subtitle">Nibh, Tortor</h4>
                                <p>
                                    Varius morbi enim nunc faucibus a pellentesque
                                </p>
                            </VerticalTimelineElement> */}
                            <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<BsStarFill />}
                            />
                        </VerticalTimeline>


                    </Row>
                </Container>
            </div>


            <Footer />

            <ScrollToTop />



        </main >
    )

}

export default About;