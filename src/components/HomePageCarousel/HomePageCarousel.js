import React, { useRef, useState, useEffect } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './HomePageCarousel.css';

import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Logos
import bextlogo from '../../images/BextLogoWhite.png';
import idelogo from '../../images/IDE_logo_white.png';
import catratchalogo from '../../images/catracha-logo.jpg';
import qccclogo from '../../images/qc-logo-p-500.png';
import oldsoullogo from '../../images/oldsoullogo-trans.png';

// Backgrounds
import defaultPicture from '../../images/coffee_farm.JPG';
import slideTwo from '../../images/3rd payment edited.jpeg';
import slideThree from '../../images/slideTwo.jpg';
import slideFour from '../../images/oldsoulpin.jpg';

import qcccSmallImage from '../../images/NovemberDelivery_-14.jpg';

import { Switch, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Bootstrap components
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default function HomePageCarousel({
    farmerName,
    farmerPicture,
    finishedProductLots
}) {

    let firstPayment = 0;
    let thirdPayment = 0;

    // Calculating Third Payment
    if (finishedProductLots) {

        thirdPayment = finishedProductLots.reduce(function (acc, obj) { return acc + parseFloat(obj.thirdPaymentValue); }, 0);

    }

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -55;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const ref = useRef(null);

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

    return (

        <div>

            <Carousel

                ref={ref}
                fade
                interval={null}
            // style={{ 'height': '50vh' }}
            // style={{ 'margin-bottom': '3rem' }}

            >
                {/* First Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={`${defaultPicture}`}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Meet Blockchain Coffee Beans Partners</h3>
                        <p>Doing something new is not easy; It takes trust and daring to put your brand and data out into the world.Here is the motley crew that is making it work and their role in merging great coffee with hard numbers, and bringing it to you.</p>
                        <Button variant="light" onClick={onNextClick}>Next</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* iDE Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={`https://bext360.com/wp-content/uploads/2020/02/901941-black-wallpaper-desktop-1920x1080-mobile.jpg`}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <Row style={{ 'padding-bottom': '3rem' }}>
                            <Col md='12' lg='12'>
                                <h3>Project Coordinator</h3>
                            </Col>
                        </Row>

                        <Row style={{ 'padding-bottom': '3rem' }}>

                            <Col md='12' lg='6'>

                                <a href='https://www.bext360.com/' target='_blank'>
                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-25"
                                        variant="top"
                                        src={idelogo}
                                        style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                    />
                                </a>

                                <p>Powering entrepreneurs to end poverty.</p>


                            </Col>

                            <Col md='12' lg='6'>

                                <p>We believe that the best way to end poverty is to empower entrepreneurs. iDE coaches businesses that improve their communities and stimulates the market ecosystems in which they operate, helping them to succeed and multiply. In addition to economic prosperity, we ensure these sustainable businesses create gender equity, protect the natural environment, and build resilience to climate change. By scaling up our model, these entrepreneurs will change the world.</p>


                            </Col>

                        </Row>

                        {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                    </Carousel.Caption>

                </Carousel.Item>

                {/* Bext Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={`https://bext360.com/wp-content/uploads/2020/02/901941-black-wallpaper-desktop-1920x1080-mobile.jpg`}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <Row style={{ 'padding-bottom': '3rem' }}>
                            <Col md='12' lg='12'>
                                <h3>Technology Partner</h3>
                            </Col>
                        </Row>

                        <Row style={{ 'padding-bottom': '3rem' }}>

                            <Col md='12' lg='6'>

                                <a href='https://www.bext360.com/' target='_blank'>
                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50"
                                        variant="top"
                                        src={bextlogo}
                                        style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                    />
                                </a>


                            </Col>

                            <Col md='12' lg='6'>

                                <p>Bext360 provides comprehensive and measurable accountability for critical supply chains. The SaaS platform provides unsurpassed blockchain traceability and quantifiable measurements for sustainability. Bext360 focuses on supply chains such as coffee, seafood, timber, minerals, cotton and palm oil to provide a traceable fingerprint from producer to consumer. After all, how can you prove sustainability without traceability?</p>
                                {/* <p>In this collaboration, Bext360 implement product tracking on their  and trains users to store the technology</p> */}


                            </Col>

                        </Row>

                        {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Catracha Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={'https://images.squarespace-cdn.com/content/v1/59e4f0f48c56a8b4f0ae1290/1508185258674-RQ6B5VK6LHEL7UDQKKQQ/identity-hero.png'}
                        alt="Catracha slide"
                    />
                    <Carousel.Caption>

                        <Row style={{ 'padding-bottom': '3rem' }}>
                            <Col md='12' lg='12'>
                                <h3>Exporter</h3>
                            </Col>
                        </Row>

                        <Row style={{ 'padding-bottom': '3rem' }}>

                            <Col md='12' lg='6'>

                                <a href='https://www.bext360.com/' target='_blank'>
                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50"
                                        variant="top"
                                        src={catratchalogo}
                                    // style={{ 'padding-top': '2rem', 'padding-bottom': '2rem', 'border-radius': '2rem' }}
                                    />
                                </a>


                            </Col>

                            <Col md='12' lg='6'>

                                <p>Catracha Coffee Company was established in 2010 when Mayra Orellana-Powell realized her dream of starting a coffee business that would have an impact in the community where she was born and raised, in the municipality of Santa Elena, department of La Paz, Honduras.</p>
                                {/* <p>Mayra named her business Catracha Coffee Co. because “Catracha” is the nickname for a Honduran woman.</p>
                                <p>In 2011, from her home in the United States, Mayra made the first connections to the specialty coffee market for 13 small coffee producers from Santa Elena. In 2016, sixty producers sold their coffee in the specialty market through Catracha Coffee.</p> */}


                            </Col>

                        </Row>
                        {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>

                {/* QCCC Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={qcccSmallImage}
                        alt="QCCC slide"
                    />
                    <Carousel.Caption>

                        <Row style={{ 'padding-bottom': '3rem' }}>
                            <Col md='12' lg='12'>
                                <h3>Roaster</h3>
                            </Col>
                        </Row>

                        <Row style={{ 'padding-bottom': '3rem' }}>

                            <Col md='12' lg='6'>

                                <a href='https://www.bext360.com/' target='_blank'>
                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50"
                                        variant="top"
                                        src={qccclogo}
                                        style={{ 'padding-top': '2rem', 'padding-bottom': '2rem', 'border-radius': '2rem' }}
                                    />
                                </a>


                            </Col>

                            <Col md='12' lg='6'>

                                <p style={{ color: 'white' }}>
                                    “We believe that honest relationships, from farmers to consumers, achieve an equitable and sustainable coffee supply chain.
                                </p>
                                <p style={{ color: 'white' }}>
                                    Collective coffee means we’re doing this together — we have real, tangible connection with our coffee farmers; we know the conditions of their production; we then small-batch roast their coffee in the city we love and we proudly serve it in Denver’s historic Baker neighborhood. We believe everyone is welcome to this ragtag group because good coffee should build the collective good.”
                                </p>


                            </Col>

                        </Row>

                        {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Old Soul Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={qcccSmallImage}
                        alt="Old Soul slide"
                    />
                    <Carousel.Caption>

                        <Row style={{ 'padding-bottom': '3rem' }}>
                            <Col md='12' lg='12'>
                                <h3>Roaster</h3>
                            </Col>
                        </Row>

                        <Row style={{ 'padding-bottom': '3rem' }}>

                            <Col md='12' lg='6'>

                                <a href='https://www.bext360.com/' target='_blank'>
                                    <Card.Img
                                        className="d-block mx-auto img-fluid w-50"
                                        variant="top"
                                        src={oldsoullogo}
                                        style={{ 'padding-top': '2rem', 'padding-bottom': '2rem', 'border-radius': '2rem' }}
                                    />
                                </a>


                            </Col>

                            <Col md='12' lg='6'>

                                <p style={{ color: 'white' }}>
                                    We are skilled roasters, artisans, and neighbors. We are a platform for local farmers, brewers and purveyors. We are a community space and eatery that connects and celebrates its patrons
                                </p>
                                <p style={{ color: 'white' }}>
                                    At the heart of Old Soul Co. is telling the stories of farmers and artisans around the world by providing a platform for them to be recognized for the hard work, passion and unparalleled artistry they put into their craft. These are the unsung heroes of the world and we celebrate them. Without them, we couldn’t bring customers fresh, locally-sourced ingredients.
                                </p>


                            </Col>

                        </Row>

                        {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>

    )

}