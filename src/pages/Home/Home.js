import React, { useEffect, useState } from 'react';

import './Home.css';

import HomePageCarousel from '../../components/HomePageCarousel/HomePageCarousel';

import { Link } from 'react-router-dom';
import FarmerCard from '../../components/FarmerCard/FarmerCard';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// Google Analytics
import ReactGA from 'react-ga';

import HomePageNavigation from '../../components/HomePageNavigation/HomePageNavigation';

import PartnersSection from '../../sections/partners/PartnersSection';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactPlayer from 'react-player';

// Context
import { useGlobalContext } from '../../context';

// Sections
import Farming from '../../components/Farming/Farming';
import ProcessingExport from '../../components/ProcessingExport/ProcessingExport';
import Import from '../../components/Import/Import';
import Roasting from '../../components/Roasting/Roasting';
import Economics from '../../components/EconomicsAndTransparency/EconomicsAndTransparency';
import Footer from '../../components/Footer/Footer';

import BarChart from '../../components/Chart/BarChart';

import Loading from '../../components/Loading/Loading';
import ScrollToTop from '../../components/ScrollToTop/ScrollTopTop';

// Importing default farm picture
import defaultPicture from '../../images/coffee_farm.JPG';

import claudiaAndJuan from '../../images/slideOne.jpg';

import JourneyMap from '../../components/JourneyMap/JourneyMap';

export const Home = () => {

    const googleAnalyicsEvent = () => {
        ReactGA.event({
            category: 'Follow the Coffee! button',
            action: `Follow the Coffee! button`
        })
    }

    const { timelineElements } = useGlobalContext();

    const [data, setData] = useState(timelineElements);

    const { farmersMongoDB } = useGlobalContext();

    const [farmer, setFarmer] = useState({});

    const mapStyle = `ckr6jrmhs0tg218qk5ym975gf`;

    console.log(farmersMongoDB);

    useEffect(() => {

        // Google Analytics initiazation
        // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
        // Google Analytics Page View report
        ReactGA.pageview(window.location.pathname + window.location.search);

        if (farmersMongoDB.length > 0) {

            // Filtering farmer based on farmerName
            const thisFarmer = farmersMongoDB.filter(function (value) {

                return value.farmerName === 'Claudia & Juan' && setFarmer(value);;

            });

        }

    }, [farmersMongoDB]);

    console.log(farmer);

    return (

        <main>


            <>
                <HomePageNavigation />

                {/* <HomePageCarousel></HomePageCarousel> */}

                <div
                    // className="blue-green-gradient-bg"
                    className="top-section-bg"
                    style={{
                        'padding-top': '10em',
                        'padding-bottom': '5em',
                        'color': '#fff',
                        'min-height': '90vh'
                    }} id=''>
                    <Container>

                        <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>About Blockchain Coffee Beans</h2>
                        <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#fff' }}></div>

                        <Row style={{ 'padding-top': '1em' }}>

                            <Col md='12' lg='6'>

                                <h3 style={{ 'padding-bottom': '0.5em' }}>What am I looking at?</h3>

                                <p>Here you can connect to your coffee in ways you never have before - see where it is picked and by who, trace its journey across the sea as it transforms from cherries to beans. Learn about the exporters and roasters that make your speciality coffee possible and the economics behind them. </p>

                                <p>
                                    The partners highlighted here are also participating in direct trade and sharing the proceed of their sales back to the farmers, laborers and the community in what we call the Third Payment! (see more below)
                                </p>

                            </Col>

                            <Col md='12' lg='6'>

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

                                        controls url='https://www.youtube.com/watch?v=28fG4T50iqU&t=165s' width='100%' height='100%' />

                                </div>
                            </Col>

                        </Row>



                        {/* <Row>
                            <Col md='12' lg='6'>
                                <h3 style={{ 'padding-top': '1em', 'padding-bottom': '0.5em' }}>Why are you doing this?</h3>
                            </Col>
                        </Row>

                        <Row>

                            <Col md='12' lg='6'>

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

                            

                        </Row> */}

                        {/* <Row>
                            <Col md='12' lg='6'>
                                <h3 style={{ 'padding-top': '1em', 'padding-bottom': '0.5em' }}>Our Impact</h3>
                            </Col>
                        </Row>

                        <Row>
                            <Col md='12' lg='6'>

                                <>
                                    <article className='cocktail'>
                                        <div className='img-contaienr'>
                                            <img
                                                src={claudiaAndJuan}
                                            />
                                        </div>
                                        <div className='cocktail-footer'>
                                            <h3 style={{ 'color': '#000' }}>Claudia & Juan</h3>
                                            <p>They earned an extra $974 by working with Queen City Collective Coffee and Catracha Coffee, increasing their revenue by 28%</p>
                                            <Link
                                                onClick={googleAnalyicsEvent}
                                                to={`/farmer-2021/Claudia%20&%20Juan`}
                                                className="bttn bttn-primary bttn-details"
                                                style={{ 'text-decoration': 'none' }}
                                            >
                                                Follow the Coffee!
                                            </Link>
                                        </div>
                                    </article >
                                </>

                            </Col>
                            <Col md='12' lg='6'>

                                <>
                                    <article className='cocktail'>
                                        <div className='img-contaienr'>
                                            <img
                                                src='https://bext360develop.blob.core.windows.net/bext-images/b984b4f2-94d5-40c0-8e51-75e3b42e97dc.jpg'
                                            />
                                        </div>
                                        <div className='cocktail-footer'>
                                            <h3 style={{ 'color': '#000' }}>Luis</h3>
                                            <p>He earned an extra $974 by working with Old Soul Co. and Catracha Coffee, increasing their revenue by 26%</p>
                                            <Link
                                                onClick={googleAnalyicsEvent}
                                                to={`/farmer-2021/Luis`}
                                                className="bttn bttn-primary bttn-details"
                                                style={{ 'text-decoration': 'none' }}
                                            >
                                                Follow the Coffee!
                                            </Link>
                                        </div>
                                    </article >
                                </>

                            </Col>
                        </Row> */}

                    </Container>
                </div>

                <div
                    className="blue-green-gradient-bg"
                // style={{ 'background': '#F1F5F8' }}
                >
                    <Container>

                        <Row id='' style={{ 'padding-top': '5em', }}>

                            <Col md='12' lg='12'>

                                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': '#fff' }}>Our Impact Harvest 2021</h2>
                                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#fff' }}></div>

                            </Col>

                            <Col md='12' lg='6'>
                                <>
                                    <article className='cocktail'>
                                        <div className='img-contaienr'>
                                            <img
                                                src={claudiaAndJuan}
                                            />
                                        </div>
                                        <div className='cocktail-footer'>
                                            <h3>Claudia & Juan</h3>
                                            <p>They earned an extra $974 by working with Queen City Collective Coffee and Catracha Coffee, increasing their revenue by 28%</p>
                                            <Link
                                                onClick={googleAnalyicsEvent}
                                                to={`/farmer-2021/Claudia%20&%20Juan`}
                                                className="bttn bttn-primary bttn-details"
                                                style={{ 'text-decoration': 'none' }}
                                            >
                                                Follow the Coffee!
                                            </Link>
                                        </div>
                                    </article >
                                </>
                            </Col>

                            <Col md='12' lg='6'>
                                <>
                                    <article className='cocktail'>
                                        <div className='img-contaienr'>
                                            <img
                                                src='https://bext360develop.blob.core.windows.net/bext-images/b984b4f2-94d5-40c0-8e51-75e3b42e97dc.jpg'
                                            />
                                        </div>
                                        <div className='cocktail-footer'>
                                            <h3>Luis</h3>
                                            <p>He earned an extra $958 by working with Old Soul Co. and Catracha Coffee, increasing their revenue by 26%</p>
                                            <Link
                                                onClick={googleAnalyicsEvent}
                                                to={`/farmer-2021/Luis`}
                                                className="bttn bttn-primary bttn-details"
                                                style={{ 'text-decoration': 'none' }}
                                            >
                                                Follow the Coffee!
                                            </Link>
                                        </div>
                                    </article >
                                </>
                            </Col>
                        </Row>

                        <Row style={{ 'padding-top': '2em', 'padding-bottom': '5em' }}>

                            <Col md='12' lg='12'>

                                <h3 style={{ 'padding-bottom': '0.5em', 'color': '#fff' }}>Where is the extra money coming from and going to</h3>

                                <p style={{ 'color': '#fff' }}>
                                    “We want to start a customer driven initiative called "third payment." Currently we make two payments to producers, the first when Catracha buys the coffee here in Honduras, and the second when we sell the coffee and receive a premium from the roaster.

                                    With Third Payment, roasters could add $1 to the roasted price of a pound of coffee and let the customer know that you will send that extra dollar back to the producer.
                                </p>

                                <p style={{ 'color': '#fff' }}>
                                    The plan is to split this "third payment" three ways.  One part would go straight to the producer who produces the coffee.  One part would be used to increase the wages of coffee pickers.  And the third part would be used to create an emergency medical care response fund to help producers who are dealing with unexpected expenses from a medical emergency.
                                </p>

                            </Col>

                        </Row>

                    </Container>

                </div>

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

                        <Row style={{ 'padding-top': '1em' }}>

                            <Col md='12' lg='12'>

                                <HomePageCarousel></HomePageCarousel>

                            </Col>


                        </Row>

                    </Container>

                </div >

                {/* <HomePageCarousel></HomePageCarousel> */}

                {/* <div style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id=''>

                    <Container>

                        <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center' }}>Meet Blockchain Coffee Beans Partners</h2>
                        <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#000' }}></div>

                        <Row style={{ 'padding-top': '1em' }}>

                            <Col md='12' lg='12'>

                                <h3 style={{ 'padding-bottom': '0.5em' }}>Meet Blockchain Coffee Beans Partners</h3>

                                <p>Doing something new is not easy; It takes trust and daring to put your brand and data out into the world. Here is the motley crew that is making it work and their role in merging great coffee with hard numbers, and bringing it to you.</p>


                            </Col>

                            <Col md='12' lg='12'>
                                <HomePageCarousel></HomePageCarousel>
                            </Col>

                        </Row>

                    </Container>

                </div > */}





                {/* <div
                    className="blue-green-gradient-bg"
                >

                    <Container>

                        <Row id='' style={{ 'padding-top': '5em', 'padding-bottom': '5em' }}>

                            <Col md='12' lg='12'>

                                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': '#fff' }}>Learn About Our Partnership</h2>
                                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#fff' }}></div>

                            </Col>
                            <Col md='12' lg='12'>

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

                                        controls url='https://www.youtube.com/watch?v=28fG4T50iqU&t=165s' width='100%' height='100%' />

                                </div>
                            </Col>
                        </Row>

                    </Container>

                </div> */}

                {
                    timelineElements

                        ?

                        <div
                            className="blue-green-gradient-bg"
                            style={{
                                'padding-top': '5em',
                                'padding-bottom': '4em',
                                // 'background': '#F1F5F8'
                            }}
                            id=''>
                            <Container>

                                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': '#fff' }}>Blockchain Coffee Beans Milestones</h2>
                                <div className='underline' style={{ 'margin-bottom': '4em', 'background': '#fff' }}></div>

                                <div class="col-md-12 text-center">
                                    <Button
                                        style={{ 'margin-bottom': '4em' }}
                                        variant="light"
                                        onClick={() => {

                                            setData(data.slice(0).reverse());

                                        }}
                                    >
                                        Reverse
                                    </Button>
                                </div>

                                <Row>

                                    <VerticalTimeline>
                                        {
                                            data.map(element => {

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

                                <div class="col-md-12 text-center">
                                    <Button
                                        style={{ 'margin-top': '4em' }}
                                        variant="light"
                                        onClick={() => {

                                            setData(data.slice(0).reverse());

                                        }}
                                    >
                                        Reverse
                                    </Button>
                                </div>

                            </Container>

                        </div>

                        :

                        null

                }

                {/* <BootstrapCarousel farmerPicture={farmer.harvestNode ? farmer.harvestNode.images[0] : defaultPicture} /> */}
                {/* <Hero farmerPicture={farmer.harvestNode ? farmer.harvestNode.images[0] : defaultPicture} /> */}


                {/* <Farming

                            farmerName={farmer.farmerName}
                            producerName={farmer.producerName}

                            harvestNode={farmer.harvestNode ? farmer.harvestNode : null}
                            farmerPicture={farmer.harvestNode ? farmer.harvestNode.images[0] : null}
                            harvestCity={farmer.harvestNode ? farmer.harvestNode.city : null}
                            harvestState={farmer.harvestNode ? farmer.harvestNode.state : null}
                            harvestCountry={farmer.harvestNode ? farmer.harvestNode.country : null}
                            harvestElevation={farmer.harvestNode ? farmer.harvestNode.elevation : null}
                            harvestElevationUnit={farmer.harvestNode ? farmer.harvestNode.elevationUnit : null}
                            longitude={farmer.harvestNode ? farmer.harvestNode.longitude : null}
                            latitude={farmer.harvestNode ? farmer.harvestNode.latitude : null}
                            harvestTotalAbsorbedWeight={farmer.harvestNode ? farmer.harvestNode.totaAbsorbedWeight : null}
                            harvestTotalAbsorbedWeightUnit={farmer.harvestNode ? farmer.harvestNode.totalAbsorbedWeightUnit : null}
                            harvestLots={farmer.harvestNode ? farmer.harvestNode.harvestLots : null}
                            numberOfHarvestLots={farmer.harvestNode ? farmer.harvestNode.harvestLots.length : null}

                            wetMillNode={farmer.wetMillNode ? farmer.wetMillNode : null}
                            wetMillCity={farmer.wetMillNode ? farmer.wetMillNode.city : null}
                            wetMillState={farmer.wetMillNode ? farmer.wetMillNode.state : null}
                            wetMillCountry={farmer.wetMillNode ? farmer.wetMillNode.country : null}
                            wetMillElevation={farmer.wetMillNode ? farmer.wetMillNode.elevation : null}
                            wetMillElevationUnit={farmer.wetMillNode ? farmer.wetMillNode.elevationUnit : null}
                            wetMilltTotalAbsorbedWeight={farmer.wetMillNode ? farmer.wetMillNode.totaAbsorbedWeight : null}
                            wetMillTotalAbsorbedWeightUnit={farmer.wetMillNode ? farmer.wetMillNode.totalAbsorbedWeightUnit : null}
                            wetMillLots={farmer.wetMillNode ? farmer.wetMillNode.wetMillLots : null}
                            numberOfWetMillLots={farmer.wetMillNode ? farmer.wetMillNode.wetMillLots.length : null}
                        >
                        </Farming> */}


                {/* <ProcessingExport

                            exporterIntakeNode={farmer.exporterIntakeNode ? farmer.exporterIntakeNode : null}
                            exporterLogo={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.images[0] : null}
                            exporterIntakeCity={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.city : null}
                            exporterIntakeState={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.state : null}
                            exporterIntakeCountry={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.country : null}
                            exporterIntakeElevation={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.elevation : null}
                            exporterIntakeElevationUnit={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.elevationUnit : null}

                            dryMillNode={farmer.dryMillNode ? farmer.dryMillNode : null}
                            dryMillIntakeCity={farmer.dryMillNode ? farmer.dryMillNode.city : null}
                            dryMillIntakeState={farmer.dryMillNode ? farmer.dryMillNode.state : null}
                            dryMillIntakeCountry={farmer.dryMillNode ? farmer.dryMillNode.country : null}
                            dryMillIntakeElevation={farmer.dryMillNode ? farmer.dryMillNode.elevation : null}
                            dryMillIntakeElevationUnit={farmer.dryMillNode ? farmer.dryMillNode.elevationUnit : null}

                            dryParchmentAbsorbedWeight={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots[1].absorbedWeight : null}
                            dryParchmentAbsorbedWeightUnit={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots[1].absorbedWeightUnit : null}
                            greenCoffeeAbsorbedWeight={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots[0].absorbedWeight : null}
                            greenCoffeeAbsorbedWeightUnit={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots[0].absorbedWeightUnit : null}

                            dryMillLots={farmer.dryMillNode ? farmer.dryMillNode.dryMillLots : null}

                            exportNode={farmer.exportNode ? farmer.exportNode : null}
                            exportLots={farmer.exportNode ? farmer.exportNode.exportLots : null}

                        >
                        </ProcessingExport> */}




                {/* <Import



                            // mapStyle={mapStyle}
                            // farmerName={farmer.farmerName}
                            // longitude={farmer.harvestNode.longitude}
                            // latitude={farmer.harvestNode.latitude}

                            importerLogo={farmer.importNode ? farmer.importNode.images[0] : null}
                            importNode={farmer.importNode ? farmer.importNode : null}
                            importLots={farmer.importNode ? farmer.importNode.importLots : null}

                        >
                        </Import> */}

                {/* <Roasting

                            farmerName={farmer.farmerName}
                            roasterIntakeNode={farmer.roasterIntakeNode ? farmer.roasterIntakeNode : null}
                            roasterIntakeLots={farmer.roasterIntakeNode ? farmer.roasterIntakeNode.roasterIntakeLots : null}

                            roastingNode={farmer.roastingNode ? farmer.roastingNode : null}
                            roastingLots={farmer.roastingNode ? farmer.roastingNode.roastingLots : null}

                        ></Roasting> */}

                {/* <Economics

                            farmerName={farmer.farmerName}

                            exporterIntakeLots={farmer.exporterIntakeNode ? farmer.exporterIntakeNode.exporterIntakeLots : null}

                            exportLots={farmer.exportNode ? farmer.exportNode.exportLots : null}

                            importLots={farmer.importNode ? farmer.importNode.importLots : null}

                            organizationName={farmer.roasterIntakeNode ? farmer.roasterIntakeNode.organizationName : null}

                            roasterIntakeLots={farmer.roasterIntakeNode ? farmer.roasterIntakeNode.roasterIntakeLots : null}

                        ></Economics> */}

                {/* {

                            farmer.harvestNode &&
                                farmer.wetMillNode &&
                                farmer.dryMillNode ?

                                <>

                                    <Container>

                                        <Row id='' style={{ 'padding-top': '5em' }}>


                                            <Col md='12' lg='6'>

                                                <h3>Webinar: Efficiency in Coffee Processing</h3>

                                                <p>Dr. Irwin Ronaldo Donis-Gonzalez of the UC Davis Department of Biological and Argricultural Engineering and Evan Gilman and Chris Kornman of The Crown discuss efficiency in post-harvest processing in coffee. Dr. Donis-Gonzalez presents his exhaustive research focusing on the loss of mass from each stage of washed process coffee.</p>

                                            </Col>
                                            <Col md='12' lg='6'>

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
                                                            'height': '100 %'

                                                        }}

                                                        controls url='https://vimeo.com/526315128' width='100%' height='100%' />

                                                </div>
                                            </Col>
                                        </Row>

                                        <BarChart

                                            data={{

                                                labels: ['Coffee Cherry', 'Wet Parchment', 'Dry Parchment', 'Green Coffee', 'Roasting (Coming Soon)'],

                                                datasets: [
                                                    {
                                                        label: 'Weight of Coffee at Main Processing Stages',

                                                        data: [
                                                            farmer.harvestNode.totaAbsorbedWeight,
                                                            farmer.wetMillNode.totaAbsorbedWeight,
                                                            farmer.dryMillNode.dryMillLots[1].absorbedWeight,
                                                            farmer.dryMillNode.dryMillLots[0].absorbedWeight,
                                                            0
                                                        ],
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.6)',
                                                            'rgba(54, 162, 235, 0.6)',
                                                            'rgba(255, 206, 86, 0.6)',
                                                            'rgba(75, 192, 192, 0.6)',
                                                            'rgba(153, 102, 255, 0.6)',
                                                            'rgba(255, 159, 64, 0.6)'
                                                        ]
                                                    }
                                                ]

                                            }}

                                        />

                                    </Container>

                                </>

                                :

                                null

                        } */}


                {/* <PartnersSection /> */}

                <Footer />

                <ScrollToTop />

            </>

        </main >
    )
}

export default Home;