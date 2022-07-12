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
import qcccBG from '../../images/NovemberDelivery_-14.jpg';
import oldSoulBG from '../../images/OldSoulRoasterImage.jpeg';
import ideBG from '../../images/ide-bg.webp';
import bextBG from '../../images/bext-bg.webp';


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
                {/* Catracha Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={'https://images.squarespace-cdn.com/content/v1/59e4f0f48c56a8b4f0ae1290/1508185258674-RQ6B5VK6LHEL7UDQKKQQ/identity-hero.png'}
                        alt="Catracha slide"
                    />
                    <Carousel.Caption>
                        <a href='https://www.catrachacoffee.com/' target='_blank'>
                            <Card.Img
                                className="d-block mx-auto img-fluid w-50"
                                style={{ 'margin-bottom': '2em', 'max-width': '35%', 'border-radius': '0.3em' }}
                                variant="top"
                                src={catratchalogo}
                            // style={{ 'padding-top': '2rem', 'padding-bottom': '2rem', 'border-radius': '2rem' }}
                            />
                        </a>
                        {/* <h3>Meet Blockchain Coffee Beans Partners</h3> */}
                        <p>Catracha Coffee Company was established in 2010 when Mayra Orellana-Powell realized her dream of starting a coffee business that would have an impact in the community where she was born and raised, in the municipality of Santa Elena, department of La Paz, Honduras.</p>
                        {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>

                {/* QCCC Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={qcccBG}
                        alt="QCCC slide"
                    />
                    <Carousel.Caption>
                        <Carousel.Caption>
                            <a href='https://queencitycollectivecoffee.com/' target='_blank'>
                                <Card.Img
                                    className="d-block mx-auto img-fluid"
                                    variant="top"
                                    src={qccclogo}
                                    style={{ 'margin-bottom': '2em', 'height': '60%', }}
                                />
                            </a>
                            {/* <h3>Meet Blockchain Coffee Beans Partners</h3> */}
                            <p>
                                We believe that honest relationships, from farmers to consumers, achieve an equitable and sustainable coffee supply chain.
                            </p>
                            {/* <p>
                                Collective coffee means we’re doing this together — we have real, tangible connection with our coffee farmers; we know the conditions of their production; we then small-batch roast their coffee in the city we love and we proudly serve it in Denver’s historic Baker neighborhood. We believe everyone is welcome to this ragtag group because good coffee should build the collective good.”
                            </p> */}
                            {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                        </Carousel.Caption>

                        {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Old Soul Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={oldSoulBG}
                        alt="Old Soul slide"
                    />
                    <Carousel.Caption>
                        <Carousel.Caption>
                            <a href='https://oldsoulco.com/' target='_blank'>
                                <Card.Img
                                    className="d-block mx-auto"
                                    style={{ 'margin-bottom': '1em', 'width': '65%' }}
                                    variant="top"
                                    src={oldsoullogo}
                                />
                            </a>
                            {/* <h3>Meet Blockchain Coffee Beans Partners</h3> */}
                            <p>
                                We are skilled roasters, artisans, and neighbors. We are a platform for local farmers, brewers and purveyors. We are a community space and eatery that connects and celebrates its patrons
                            </p>
                            {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                        </Carousel.Caption>

                        {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Bext 360 Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={bextBG}
                        alt="iDE slide"
                    />
                    <Carousel.Caption>
                        <Carousel.Caption>
                            <a href='https://www.bext360.com/' target='_blank'>
                                <Card.Img
                                    className="d-block mx-auto"
                                    style={{ 'margin-bottom': '1.5em', 'width': '65%' }}
                                    variant="top"
                                    src={bextlogo}
                                // style={{ 'padding-top': '2rem', 'padding-bottom': '2rem', 'border-radius': '2rem' }}
                                />
                            </a>
                            {/* <h3>Meet Blockchain Coffee Beans Partners</h3> */}
                            <p>Bext360 provides comprehensive and measurable accountability for critical supply chains. The SaaS platform provides unsurpassed blockchain traceability and quantifiable measurements for sustainability. </p>
                            {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                        </Carousel.Caption>

                        {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>

                {/* iDE Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={ideBG}
                        alt="iDE slide"
                    />
                    <Carousel.Caption>
                        <Carousel.Caption>
                            <a href='https://www.ideglobal.org/' target='_blank'>
                                <Card.Img
                                    className="d-block mx-auto"
                                    style={{ 'margin-bottom': '1.5em', 'width': '65%' }}
                                    variant="top"
                                    src={idelogo}
                                // style={{ 'padding-top': '2rem', 'padding-bottom': '2rem', 'border-radius': '2rem' }}
                                />
                            </a>
                            {/* <h3>Meet Blockchain Coffee Beans Partners</h3> */}
                            <p>We believe that the best way to end poverty is to empower entrepreneurs. iDE coaches businesses that improve their communities and stimulates the market ecosystems in which they operate, helping them to succeed and multiply.
                            </p>
                            {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                        </Carousel.Caption>

                        {/* <Button variant="light" onClick={onNextClick}>Next</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>

    )

}