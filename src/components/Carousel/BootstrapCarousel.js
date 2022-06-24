import React, { useRef, useState, useEffect } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './BootstrapCarousel.css';


import defaultPicture from '../../images/coffee_farm.JPG';
import slideTwo from '../../images/3rd payment edited.jpeg';
import slideThree from '../../images/slideTwo.jpg';
import slideFour from '../../images/oldsoulpin.jpg';



import { Switch, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Bootstrap components
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default function BootstrapCarousel({
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

            >
                {/* First Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={`${farmerPicture ? farmerPicture : defaultPicture}`}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Thank you</h3>
                        <p>For joining us on this journey of coffee, transparency, and equity.</p>
                        <Button variant="light" onClick={onNextClick}>Swipe to Continue</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Second Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={slideTwo}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                        {
                            thirdPayment
                                ?
                                <div>
                                    <h3>{farmerName}'s family increased their sale revenue by ${thirdPayment} this year</h3>
                                    <p>This is made possible by collaboration between Catracha, {finishedProductLots[0].organizationName} and you!</p>
                                </div>
                                :
                                <div>
                                    <h3>Be a part of something special</h3>
                                    <p>Your roaster and exporter struck up a unique partnership to boost the income of farmers and laborers that made your specialty coffee possible.</p>
                                </div>
                        }

                        <Button variant="light" href="/about">Learn more</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Third Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={slideThree}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Learn where your coffee came from</h3>
                        <p>Trace the origin of your coffee and how it reached you, recorded using blockchain technology. Learn about economics openly shared by key players in the chain.</p>
                        <Nav.Link
                            as={HashLink}
                            to={`#farming`}
                            smooth
                            scroll={el => scrollWidthOffset(el)}
                        >
                            <Button variant="light">Start Journey</Button>
                        </Nav.Link>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Fourth Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={slideFour}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Come meet us</h3>
                        <p>Being transparent and making impactful changes takes people open to doing things differently and taking risks.</p>
                        <Button variant="light" href="/partners">Check us out</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Fifth Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Learn more</h3>
                        <p>See all the articles, press releases and videos on this innovative joint endeavor!</p>
                        <Button variant="light" href="/media">View and Share</Button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>

    )

}