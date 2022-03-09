import React, { useEffect, useState } from 'react'

import { useGlobalContext } from '../../context';

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
import { FaHandshake, FaShip, FaDollarSign, FaTruck, FaCheck } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { BsStarFill } from 'react-icons/bs';
import { MdSettingsRemote } from 'react-icons/md';
import { GiCoffeeBeans } from 'react-icons/gi';
import { IoMdCube } from 'react-icons/io';
import { IoRocketSharp } from 'react-icons/io5';
import { VscFileBinary } from 'react-icons/vsc';
import { RiVirusFill } from 'react-icons/ri';

//Logos
import qccclogo from '../../images/qc-logo-p-500.png';
import catratchalogo from '../../images/catracha-logo.jpg';
import oldsoullogo from '../../images/oldsoullogo-trans.png';
import royalcoffeelogo from '../../images/royalcoffeelogo.png';
import posnerlogo from '../../images/posner-logo.png';

// Images
import ClaudiaAndJuanThirdPayment from '../../images/WhatsApp Image 2021-02-15 at 12.39.06 PM.jpeg';

import './About.css';

export const About = () => {

    const { timelineElements } = useGlobalContext();

    useEffect(() => {

        // Google Analytics initiazation
        // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
        // Google Analytics Page View report
        ReactGA.pageview(window.location.pathname + window.location.search);

    }, [])

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

                            <p>Here you can connect to your coffee in ways you never have before - see where it is picked and by who, trace its journey across the sea as it transforms from cherries to beans. Learn about the exporters and roasters that make your speciality coffee possible and the economics behind them. </p>

                            <p>
                                The partners highlighted here are also participating in direct trade and sharing the proceed of their sales back to the farmers, laborers and the community in what we call the Third Payment! (see more below)
                            </p>

                            <h3 style={{ 'padding-top': '1em', 'padding-bottom': '0.5em' }}>Why are you doing this?</h3>

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

            {
                timelineElements

                    ?

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
                                    {
                                        timelineElements.slice(0).reverse().map(element => {

                                            return (
                                                <VerticalTimelineElement

                                                    key={element.id}

                                                    className="vertical-timeline-element--work"
                                                    contentStyle={element.contentStyle}
                                                    contentArrowStyle={element.contentArrowStyle}
                                                    date={element.date}
                                                    iconStyle={element.iconStyle}
                                                    icon={< element.icon />}

                                                >

                                                    <h3
                                                        className="vertical-timeline-element-title"
                                                        style={{
                                                            'letter-spacing': 'normal',
                                                            'font-size': '1.5em'
                                                        }}
                                                    >
                                                        {element.title}
                                                    </h3>

                                                    {
                                                        element.subTitle
                                                            ?
                                                            <h4 className="vertical-timeline-element-subtitle"
                                                                style={{
                                                                    'letter-spacing': 'normal',
                                                                    'font-size': '1.2em',
                                                                    'margin-top': '0.6em'
                                                                }}
                                                            >
                                                                {element.subTitle}
                                                            </h4>
                                                            :
                                                            null
                                                    }

                                                    {
                                                        element.media
                                                            ?
                                                            <a
                                                                href={
                                                                    element.mediaURL
                                                                        ?
                                                                        element.mediaURL
                                                                        :
                                                                        null
                                                                }
                                                                target="_blank"
                                                            >
                                                                <Image
                                                                    rounded
                                                                    src={element.media}
                                                                    style={{
                                                                        'max-width': '100%',
                                                                        'margin-top': '2rem',
                                                                        'margin-bottom': '1.5rem',
                                                                        'display': 'block',
                                                                        'margin-left': 'auto',
                                                                        'margin-right': 'auto'
                                                                    }}
                                                                ></Image>
                                                            </a>
                                                            :
                                                            null
                                                    }

                                                    {
                                                        element.text
                                                            ?
                                                            <p>{element.text}</p>
                                                            :
                                                            null
                                                    }

                                                </VerticalTimelineElement>
                                            )
                                        })
                                    }
                                </VerticalTimeline>

                            </Row>

                        </Container>

                    </div>

                    :

                    null

            }

            <Footer />

            <ScrollToTop />

        </main >
    )

}

export default About;