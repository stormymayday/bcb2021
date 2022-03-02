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
                                date="Sep 30 2021"
                                iconStyle={{ background: '#D0A555', color: '#fff' }}
                                icon={<FaHandshake />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Old Soul Co. agreed to join!</h3>
                                <a href="https://oldsoulco.com/" target="_blank">
                                    <Image

                                        src={oldsoullogo}
                                        style={{
                                            'max-width': '75%',
                                            'margin-top': '2rem',
                                            'display': 'block',
                                            'margin-left': 'auto',
                                            'margin-right': 'auto'
                                        }}
                                    ></Image>
                                </a>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Sep 22 2021"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<IoMdCube />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >First roast of Luis' 2021 blockchained coffee by Old Soul Co.</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Sep 2 2021"
                                iconStyle={{ background: '#D72128', color: '#fff' }}
                                icon={<FaShip />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Majority of tracked coffee arrives at Royal Coffee</h3>
                                <p>Warehouse is in Oakland, CA</p>
                                <a href="https://royalcoffee.com/" target="_blank">
                                    <Image

                                        src={royalcoffeelogo}
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
                                date="Aug 23 2021"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaHandshake />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Third payment concept introduced by Catracha</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Aug 9 2021"
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<IoRocketSharp />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Version 2 of the blockchaincoffeebeans.com site launched</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Jul 15 2021"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaShip />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Majority of tracked coffee left Puerto Cortes, Honduras</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Feb 17 2021"
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<VscFileBinary />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Version 2 of the blockchaincoffeebeans.com site in development</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Feb 15 2021"
                                iconStyle={{ background: '#FFD700', color: '#fff' }}
                                icon={<FaDollarSign />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >3rd payment Money Reached Claudia and Juan in full</h3>
                                <Image
                                    rounded
                                    src={ClaudiaAndJuanThirdPayment}
                                    style={{
                                        'max-width': '75%',
                                        'margin-top': '2rem',
                                        'margin-bottom': '2rem',
                                        'display': 'block',
                                        'margin-left': 'auto',
                                        'margin-right': 'auto'
                                    }}
                                ></Image>
                                <p>Farmers in this case made $526 more, which is a 36% increase of the revenue normally would have earned!</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Nov 2 2020"
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<IoRocketSharp />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >blockchaincoffeebeans.com site launched</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Oct 1 2020"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaTruck />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Claudia's and Juan's coffee arrived at QCCC</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Aug 20 2020"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaShip />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Container of coffee arrives in US</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Jul 10 2020"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaShip />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Coffee exported from Puerto Cortes, Honduras</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Mar 1 2020"
                                iconStyle={{ background: '#D72128', color: '#fff' }}
                                icon={<RiVirusFill />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Coronavirus began to disrupt lives worldwide</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Feb 14 2020"
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<GiCoffeeBeans />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Last 2020 harvest for Claudia and Juan</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Feb 14 2020"
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<GiCoffeeBeans />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >First 2020 harvest for Claudia and Juan</h3>
                                <p>Information is recorded on a smart phone.</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Dec 20 2019"
                                iconStyle={{ background: '#654321', color: '#fff' }}
                                icon={<GiCoffeeBeans />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Last roast of 2019 batch</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Dec 3 2019"
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<VscFileBinary />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Data model confirmed</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Oct 9 2019"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaHandshake />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >All parties confirmed participation in blockchain coffee project!</h3>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="Aug 21 2019"
                                contentStyle={{ background: '#AF1115', color: '#fff' }}
                                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                contentArrowStyle={{ borderRight: '7px solid  #AF1115' }}
                                // iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                iconStyle={{ background: '#AF1115', color: '#fff' }}
                                icon={<FaHandshake />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Catracha agreed to join!</h3>
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
                                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                                date="Aug 07 2019"
                                // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                                icon={<FaHandshake />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >QCCC agreed to join!</h3>
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
                                <a href="https://queencitycollectivecoffee.com/" target="_blank">
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
                                date="Jun 18 2019"
                                iconStyle={{ background: '#654321', color: '#fff' }}
                                icon={<GiCoffeeBeans />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Friends-cupping event at iDE annual meeting</h3>
                                <Image
                                    rounded
                                    src="https://cdn.ideglobal.org/images/photo/_1440x810_crop_center-center/16x9-hero-coffee-cupping.jpg?mtime=20200720194050"
                                    style={{
                                        'max-width': '75%',
                                        'margin-top': '2rem',
                                        'margin-bottom': '2rem',
                                        'display': 'block',
                                        'margin-left': 'auto',
                                        'margin-right': 'auto'
                                    }}
                                ></Image>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="May 20 2019"
                                iconStyle={{ background: '#04B2DC', color: '#fff' }}
                                icon={<FaCheck />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Posner Center awarded grant to iDE and Bext360 for Blockchain Coffee Bean project</h3>
                                <a href="https://posnercenter.org/" target="_blank">
                                    <Image

                                        src={posnerlogo}
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
                                date="Jan 1 2019"
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<GiCoffeeBeans />}
                            >
                                <h3
                                    className="vertical-timeline-element-title"
                                    style={{
                                        'letter-spacing': 'normal',
                                        'font-size': '1.5em'
                                    }}
                                >Claudia and Juan picked their first cherries in 2019</h3>
                            </VerticalTimelineElement>

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