import React, { useEffect, useState } from 'react'

// Google Analytics
import ReactGA from 'react-ga';

import RoastersPageNavigation from '../../components/RoastersPageNavigation/RoastersPageNavigation';

import PartnersSection from '../../sections/partners/PartnersSection';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

import ReactPlayer from 'react-player';

// Sections
import Farming from '../../components/Farming/Farming';
import ProcessingExport from '../../components/ProcessingExport/ProcessingExport';
import Import from '../../components/Import/Import';
import Roasting from '../../components/Roasting/Roasting';
import Economics from '../../components/EconomicsAndTransparency/EconomicsAndTransparency';
import Footer from '../../components/Footer/Footer';

import Loading from '../../components/Loading/Loading';
import ScrollToTop from '../../components/ScrollToTop/ScrollTopTop';

// Importing default farm picture
import defaultPicture from '../../images/coffee_farm.JPG';

import bextlogo from '../../images/BextLogoWhite.png';
import idelogo from '../../images/IDE_logo_white.png';
import catratchalogo from '../../images/catracha-logo.jpg';
import oldsoullogo from '../../images/oldsoullogo-trans.png';
import qccclogo from '../../images/qc-logo-p-500.png';
import qcccSmallImage from '../../images/NovemberDelivery_-14.jpg';

import Button from 'react-bootstrap/Button';

import './PartnersPage.css';

export const PartnersPage = () => {


    return (

        <main>

            <RoastersPageNavigation />

            <div style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id=''>

                <Container>

                    <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>Meet Blockchain Coffee Beans Partners</h2>
                    <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#000' }}></div>

                    <Row style={{ 'padding-top': '1em' }}>

                        <Col md='12' lg='12'>

                            {/* <h3 style={{ 'padding-bottom': '0.5em' }}>Meet Blockchain Coffee Beans Partners</h3> */}

                            <p>Doing something new is not easy; It takes trust and daring to put your brand and data out into the world. Here is the motley crew that is making it work and their role in merging great coffee with hard numbers, and bringing it to you.</p>


                        </Col>

                    </Row>

                </Container>

            </div >



            {/* iDE */}
            <div className="blue-green-gradient-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id=''>

                <Container>

                    <Row style={{ 'padding-top': '2rem' }} className="align-items-center">

                        <Col lg={4} sm={12}>

                            <h3 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Project Coordinator</h3>


                            <a href='https://www.ideglobal.org/' target='_blank'>
                                <Card.Img
                                    className="d-block mx-auto img-fluid w-50"
                                    variant="top"
                                    src={idelogo}
                                    style={{ 'max-width': '9.3rem', 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                />
                            </a>

                            <p style={{ color: 'white', 'text-align': 'center' }}>Powering entrepreneurs to end poverty.</p>

                        </Col>

                        <Col lg={4} sm={12}>

                            <p style={{ color: 'white' }}>We believe that the best way to end poverty is to empower entrepreneurs. iDE coaches businesses that improve their communities and stimulates the market ecosystems in which they operate, helping them to succeed and multiply. In addition to economic prosperity, we ensure these sustainable businesses create gender equity, protect the natural environment, and build resilience to climate change. By scaling up our model, these entrepreneurs will change the world.</p>

                        </Col>

                        <Col lg={4} sm={12}>

                            <div
                                style={{
                                    'position': 'relative',
                                    'padding-top': '56.25%'
                                }}
                            >
                                <ReactPlayer

                                    style={{

                                        'position': 'absolute',
                                        'top': '0',
                                        'left': '0',
                                        'width': '100 %',
                                        'height': '100 %',
                                        'border': '0.3em solid #fff',
                                        'border-radius': '0.3em'
                                    }}

                                    controls url='https://www.youtube.com/watch?v=agNxd7l0tyQ' width='100%' height='100%' />

                            </div>


                        </Col>

                    </Row>

                </Container>
            </div>
            {/* iDE */}

            {/* BEXT */}
            <div className="bext-section-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id=''>

                <Container>

                    <Row style={{ 'padding-top': '2rem' }} className="align-items-center">

                        <Col lg={4} sm={12}>

                            <h3 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Technology Partner</h3>


                            <a href='https://www.bext360.com/' target='_blank'>
                                <Card.Img
                                    className="d-block mx-auto img-fluid w-50"
                                    variant="top"
                                    src={bextlogo}
                                    style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                />
                            </a>

                            {/* <p style={{ color: 'white', 'text-align': 'center' }}>Powering entrepreneurs to end poverty.</p> */}

                        </Col>

                        <Col lg={4} sm={12}>

                            <p style={{ color: 'white' }}>Bext360 provides comprehensive and measurable accountability for critical supply chains. The SaaS platform provides unsurpassed blockchain traceability and quantifiable measurements for sustainability. Bext360 focuses on supply chains such as coffee, seafood, timber, minerals, cotton and palm oil to provide a traceable fingerprint from producer to consumer. After all, how can you prove sustainability without traceability?</p>
                            <p style={{ color: 'white' }}>In this collaboration, Bext360 implement product tracking on their  and trains users to store the technology</p>

                        </Col>

                        <Col lg={4} sm={12}>

                            <div
                                style={{
                                    'position': 'relative',
                                    'padding-top': '56.25%'
                                }}
                            >
                                <ReactPlayer

                                    style={{

                                        'position': 'absolute',
                                        'top': '0',
                                        'left': '0',
                                        'width': '100 %',
                                        'height': '100 %',
                                        'border': '0.3em solid #fff',
                                        'border-radius': '0.3em'

                                    }}

                                    controls url='https://www.youtube.com/watch?v=nCp-7XGZkvE' width='100%' height='100%' />

                            </div>


                        </Col>

                    </Row>
                </Container>
            </div>
            {/* BEXT */}

            {/* Catracha */}
            <div className="catracha-section-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id=''>

                <Container>

                    <Row style={{ 'padding-top': '2rem' }}>

                        <Col lg={4} sm={12}>

                            <h3 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Exporter</h3>


                            <a href="https://www.catrachacoffee.com/" target="_blank">
                                <Card.Img
                                    className="d-block mx-auto img-fluid w-50"
                                    variant="top"
                                    src={catratchalogo}
                                    style={{ 'max-width': '9.3rem', 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                />
                            </a>

                            <p style={{ color: 'white', 'text-align': 'center' }}>Investing in the community of Santa Elena through the power of specialty coffee.</p>

                        </Col>

                        <Col lg={4} sm={12}>

                            <p style={{ color: 'white' }}>Catracha Coffee Company was established in 2010 when Mayra Orellana-Powell realized her dream of starting a coffee business that would have an impact in the community where she was born and raised, in the municipality of Santa Elena, department of La Paz, Honduras.</p>
                            <p style={{ color: 'white' }}>Mayra named her business Catracha Coffee Co. because “Catracha” is the nickname for a Honduran woman.</p>
                            <p style={{ color: 'white' }}>In 2011, from her home in the United States, Mayra made the first connections to the specialty coffee market for 13 small coffee producers from Santa Elena. In 2016, sixty producers sold their coffee in the specialty market through Catracha Coffee.</p>

                        </Col>

                        <Col lg={4} sm={12}>

                            <Image thumbnail src='https://images.squarespace-cdn.com/content/v1/59e4f0f48c56a8b4f0ae1290/1550634814653-IAZ32XG1PP5ABETM5ME8/20180225_093228.jpg?format=1000w'></Image>


                        </Col>

                    </Row>
                </Container>
            </div>
            {/* Catracha */}

            {/* QCCC */}
            <div className="qccc-section-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id=''>

                <Container>

                    <Row style={{ 'padding-top': '2rem' }}>

                        <Col lg={4} sm={12}>

                            <h3 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Roaster</h3>


                            <a href="https://queencitycollectivecoffee.com/" target="_blank">
                                <Card.Img
                                    className="d-block mx-auto img-fluid w-100"
                                    variant="top"
                                    src={qccclogo}
                                    style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                />
                            </a>

                            {/* <p style={{ color: 'white', 'text-align': 'center' }}>Investing in the community of Santa Elena through the power of specialty coffee.</p> */}

                        </Col>

                        <Col lg={4} sm={12}>

                            <p style={{ color: 'white' }}>
                                “We believe that honest relationships, from farmers to consumers, achieve an equitable and sustainable coffee supply chain.
                            </p>
                            <p style={{ color: 'white' }}>
                                Collective coffee means we’re doing this together — we have real, tangible connection with our coffee farmers; we know the conditions of their production; we then small-batch roast their coffee in the city we love and we proudly serve it in Denver’s historic Baker neighborhood. We believe everyone is welcome to this ragtag group because good coffee should build the collective good.”
                            </p>

                        </Col>

                        <Col lg={4} sm={12}>

                            <Image thumbnail src={qcccSmallImage}></Image>


                        </Col>

                    </Row>
                </Container>
            </div>
            {/* QCCC */}

            {/* Old Soul */}
            <div className="blue-green-gradient-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id=''>

                <Container>

                    <Row style={{ 'padding-top': '2rem' }}>

                        <Col lg={4} sm={12}>

                            <h3 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Roaster</h3>


                            <a href="https://oldsoulco.com/" target="_blank">
                                <Card.Img
                                    className="d-block mx-auto img-fluid w-100"
                                    variant="top"
                                    src={oldsoullogo}
                                    style={{ 'padding-bottom': '2rem' }}
                                />
                            </a>

                            {/* <p style={{ color: 'white', 'text-align': 'center' }}>Investing in the community of Santa Elena through the power of specialty coffee.</p> */}

                        </Col>

                        <Col lg={4} sm={12}>

                            <p style={{ color: 'white' }}>
                                We are skilled roasters, artisans, and neighbors. We are a platform for local farmers, brewers and purveyors. We are a community space and eatery that connects and celebrates its patrons
                            </p>
                            <p style={{ color: 'white' }}>
                                At the heart of Old Soul Co. is telling the stories of farmers and artisans around the world by providing a platform for them to be recognized for the hard work, passion and unparalleled artistry they put into their craft. These are the unsung heroes of the world and we celebrate them. Without them, we couldn’t bring customers fresh, locally-sourced ingredients.
                            </p>

                        </Col>

                        <Col lg={4} sm={12}>



                            <Image thumbnail src='https://oldsoulco.com/wp-content/uploads/2018/01/685Z2945-2-1-1440x780-c-default.webp'></Image>


                        </Col>

                    </Row>
                </Container>
            </div>
            {/* Old Soul */}

            <Footer />

            <ScrollToTop />



        </main >
    )

}

export default PartnersPage;