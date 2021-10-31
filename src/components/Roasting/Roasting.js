import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import qcclogo from '../../images/qc-logo-p-500.png';
import oldSoullogo from '../../images/oldsoullogo-trans.png';
import threeOneNineLogo from '../../images/3-19-logo.jpg';
import hedgeCoffeeLogo from '../../images/HedgeCoffeeLogo.png';
import andyTownLogoWhite from '../../images/AndytownLogo_white.png';
import exploradoraCoffeeLogo from '../../images/ExploradoraCoffeeLogo.jpg';
import HandSCoffeeRoastersLogo from '../../images/HandSLogo.png';
import abanicoLogo from '../../images/AbanicoLogo.png';
import backporchLogo from '../../images/BackporchLogo.jpg';
import highwireLogo from '../../images/HighwireLogo.jpg';
import sunsetRoastersLogo from '../../images/SunsetRoastersLogo.jpg';
import rubyColorfulCoffeesLogo from '../../images/RubyColorfulCoffeesLogo.png';

import Button from 'react-bootstrap/Button';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Pagination from '../../components/Pagination/Pagination';
import paginate from '../../utils';

import './Roasting.css';

export const Roasting = ({

    farmerName,
    roasterIntakeNode,
    roasterIntakeLots,
    roastingNode,
    roastingLots

}) => {

    // Summarizing Roasted Coffee Total Weight
    let roastedCoffeeTotalWeight = 0;

    if (roastingLots) {

        roastedCoffeeTotalWeight = roastingLots.reduce(function (acc, obj) { return acc + parseFloat(obj.absorbedWeight); }, 0);

    }

    return (

        <div className="roasting-section-bg" style={{ 'padding-top': '5em', 'padding-bottom': '4em' }} id='roasting'>

            <Container>

                <h2 style={{ 'padding-bottom': '0.1em', 'text-align': 'center', 'color': 'white' }}>Roasting</h2>
                <div className='underline' style={{ 'margin-bottom': '3em', 'background': '#fff' }}></div>

                <Card
                    className="text-center"
                    border="light"
                    text='light'
                    style={{ 'background-color': 'transparent', 'margin-bottom': '1rem' }}>

                    <Card.Body>

                        {/* Roasters */}

                        {/* QCCC - Claudia & Juan */}
                        {
                            farmerName === 'Claudia & Juan'

                                ?

                                <>

                                    <a href="https://queencitycollectivecoffee.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50"
                                            variant="top"
                                            src={qcclogo}
                                            style={{ 'padding-top': '2rem', 'padding-bottom': '2rem' }}
                                        />

                                    </a>

                                    <Card.Text>
                                        {/* <h3 style={{ color: 'white' }}>Queen City Collective Coffee</h3> */}
                                        "We believe that honest relationships, from farmers to consumers, achieve an equitable and sustainable coffee supply chain.
                                        Collective coffee means we’re doing this together - we have real, tangible connection with our coffee farmers; we know the conditions of their production; we then small-batch roast their coffee in the city we love and we proudly serve it in Denver’s historic Baker neighborhood. We believe everyone is welcome to this ragtag group because good coffee should build the collective good."
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://queencitycollectivecoffee.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null

                        }

                        {/* Old Soul - Luis */}
                        {
                            farmerName === 'Luis'

                                ?

                                <>

                                    <a href="https://oldsoulco.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50 img-thumbnail"
                                            variant="top"
                                            src={oldSoullogo}
                                            style={{ 'margin-bottom': '1rem', 'margin-top': '1rem', 'max-width': '40%' }}
                                        />

                                    </a>

                                    <Card.Text >
                                        {/* <h3 style={{ color: 'white' }}>Queen City Collective Coffee</h3> */}
                                        "We are skilled roasters, artisans, and neighbors. We are a platform for local farmers, brewers and purveyors. We are a community space and eatery that connects and celebrates its patrons."
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://oldsoulco.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>


                                </>

                                :

                                null

                        }

                        {/* 3-19 - Atanacio */}
                        {
                            farmerName === "Atanacio" || farmerName === "Gloria"

                                ?

                                <>

                                    <a href="https://319coffee.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50 img-thumbnail"
                                            variant="top"
                                            src={threeOneNineLogo}
                                            style={{ 'margin-bottom': '1rem', 'margin-top': '1rem', 'max-width': '40%' }}
                                        />

                                    </a>

                                    <Card.Text >
                                        <h3 style={{ color: 'white', 'margin-top': '2.5rem', 'margin-bottom': '1.5rem' }}>3-19 Coffee Roasters</h3>
                                        "3-19 Coffee was founded out of a passion for purpose and our love for memorable coffee experiences.
                                        We source coffee that we believe we can help the global coffee farmer community.We roast small, carefully curated selections of coffee to share and enjoy."
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://319coffee.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null
                        }

                        {/* Hedge Coffee - Jose Antonio */}
                        {
                            farmerName === "Jose Antonio"

                                ?

                                <>

                                    <a href="https://www.hedge.coffee/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50 img-thumbnail"
                                            variant="top"
                                            src={hedgeCoffeeLogo}
                                            style={{ 'margin-bottom': '1rem', 'margin-top': '1rem', 'max-width': '40%' }}
                                        />

                                    </a>

                                    <Card.Text >
                                        {/* <h3 style={{ color: 'white', 'margin-top': '2.5rem', 'margin-bottom': '1.5rem' }}>3-19 Coffee Roasters</h3> */}
                                        Hedge Coffee is an event coffee company and specialty coffee roaster based in San Francisco. Since 2015 we’ve been bringing specialty coffee experiences to places where it’s not available. There is no party small or big for us — we’ve done it all!
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://www.hedge.coffee/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null
                        }

                        {/* Andytown Coffee Roasters - Maria Adela */}
                        {
                            farmerName === "Maria Adela"

                                ?

                                <>

                                    <a href="https://www.andytownsf.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50"
                                            variant="top"
                                            src={andyTownLogoWhite}
                                            style={{ 'padding-top': '2rem', 'padding-bottom': '3rem' }}
                                        />

                                    </a>

                                    <Card.Text >
                                        {/* <h3 style={{ color: 'white', 'margin-top': '2.5rem', 'margin-bottom': '1.5rem' }}>Andytown Coffee Roasters</h3> */}
                                        Andytown Coffee Roasters was founded in 2014 by baristas Michael McCrory and Lauren Crabbe to bring specialty coffee roasting to the Outer Sunset in San Francisco.
                                        Andytown is built on a foundation of quality, approachability, and transparency. We are constantly working to improve ourselves, our product, and the world in which we live.
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://www.andytownsf.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null
                        }

                        {/* Exploradora Coffee - Fidelina */}
                        {
                            farmerName === "Fidelina"

                                ?

                                <>

                                    <a href="https://www.exploradoracoffee.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50 img-thumbnail"
                                            variant="top"
                                            src={exploradoraCoffeeLogo}
                                            style={{ 'margin-bottom': '1rem', 'margin-top': '1rem', 'max-width': '40%' }}
                                        />

                                    </a>

                                    <Card.Text >
                                        {/* <h3 style={{ color: 'white', 'margin-top': '2.5rem', 'margin-bottom': '1.5rem' }}>Andytown Coffee Roasters</h3> */}
                                        "Exploradora is the feminine form of “scout” in Spanish. We love all that Exploradora stands for: Learning, Growing, Dreaming, Exploring.
                                        We want to see communities from all over the world impact each other. Exploradora connects the dots - sourcing thoughtfully and empowering others. Taste our growing list of amazing women-grown coffees and know that your dollars are going to work in coffee country and main street America."
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://www.exploradoracoffee.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null
                        }

                        {/* H+S Coffee Roasters - Francis Omar */}
                        {
                            farmerName === "Francis Omar"

                                ?

                                <>

                                    <a href="https://hscoffeeroasters.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50"
                                            variant="top"
                                            src={HandSCoffeeRoastersLogo}
                                            style={{ 'padding-top': '2rem', 'padding-bottom': '3rem' }}
                                        />

                                    </a>

                                    <Card.Text >
                                        {/* <h3 style={{ color: 'white', 'margin-top': '2.5rem', 'margin-bottom': '1.5rem' }}>H+S Coffee Roasters</h3> */}
                                        "From its origins in the soil to the finished cup, we have a deep seeded love of coffee. Located at 7,200ft in the great plains of Wyoming, we roast smooth, sweet and accessible coffee blends enjoyable by everyone as well as intriguing single origins that challenge and excite your palate.
                                        We place a great deal of focus on sourcing coffees based not only on their quality in the cup, but also on the quality of life that every worker receives during a coffee's long journey from the origin to our roastery. Labor is important. We pledge that every coffee we offer has been vetted to ensure the best working conditions that we can hope for in any given origin."
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://hscoffeeroasters.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null
                        }

                        {/* Abanico Coffee Roasters - Mirian */}
                        {
                            farmerName === "Mirian"

                                ?

                                <>

                                    <a href="https://www.abanicocoffee.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50"
                                            variant="top"
                                            src={abanicoLogo}
                                            style={{}}
                                        />

                                    </a>

                                    <Card.Text >
                                        {/* <h3 style={{ color: 'white', 'margin-top': '2.5rem', 'margin-bottom': '1.5rem' }}>H+S Coffee Roasters</h3> */}
                                        "For us, a cafecito sparks sentiments of nostalgia, happiness, attitudes, connection to culture, love and family. We are committed to providing quality by sourcing a fine global selection of specialty coffee, roast in small batches and develop roasts for each unique coffee. Our goal is to provide lovely coffee and inspire you as you."
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://www.abanicocoffee.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null
                        }

                        {/* Backporch Coffee Roasters - Adan Hernández */}
                        {
                            farmerName === "Adan"

                                ?

                                <>

                                    <a href="https://www.backporchcoffeeroasters.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50 img-thumbnail"
                                            variant="top"
                                            src={backporchLogo}
                                            style={{ 'margin-bottom': '1rem', 'margin-top': '1rem', 'max-width': '40%' }}
                                        />

                                    </a>

                                    <Card.Text >
                                        {/* <h3 style={{ color: 'white', 'margin-top': '2.5rem', 'margin-bottom': '1.5rem' }}>H+S Coffee Roasters</h3> */}
                                        Backporch Coffee Roasters is born and raised Bend. Owner and operator, Dave Beach has been buying and roasting coffee for 16 years. Dave is passionate about bringing the best out in coffees (and people) and making sure that those who grow the coffee, are compensated fairly for their work.
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://www.backporchcoffeeroasters.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null

                        }

                        {/* Highwire Coffee Roasters - Gumercindo Ventura */}
                        {
                            farmerName === "Gumercindo"

                                ?

                                <>

                                    <a href="https://www.highwirecoffee.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50 img-thumbnail"
                                            variant="top"
                                            src={highwireLogo}
                                            style={{ 'margin-bottom': '1rem', 'margin-top': '1rem', 'max-width': '40%' }}
                                        />

                                    </a>

                                    <Card.Text >
                                        {/* <h3 style={{ color: 'white', 'margin-top': '2.5rem', 'margin-bottom': '1.5rem' }}>H+S Coffee Roasters</h3> */}
                                        "We started Highwire because we believe a coffee company can be a force for good. What does that mean to us? "Good" here means a place where people have jobs and spaces that nourish them. A place where our people develop professionally and have a sense of purpose at work. Where their voice matters. It also means we look out for one another, share what we have, partner with people that have similar values and make choices that promote sustainability."
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://www.highwirecoffee.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null

                        }

                        {/* Sunset Roasters - David Benitez */}
                        {
                            farmerName === "David"

                                ?

                                <>

                                    <a href="https://www.sunsetroasters.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50 img-thumbnail"
                                            variant="top"
                                            src={sunsetRoastersLogo}
                                            style={{ 'margin-bottom': '1rem', 'margin-top': '1rem', 'max-width': '40%' }}
                                        />

                                    </a>

                                    <Card.Text >
                                        {/* <h3 style={{ color: 'white', 'margin-top': '2.5rem', 'margin-bottom': '1.5rem' }}>H+S Coffee Roasters</h3> */}
                                        "We feel like a pound of coffee shouldn’t be so expensive that the everyday sipper or unofficial connoisseur would be restricted from enjoying it. Sunset Roasters is all about flavor, friendship, and community. Thank you for being a part of our community!"
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://www.sunsetroasters.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null

                        }

                        {/* Ruby Colorful Coffees - Rigoberto Rodríguez */}
                        {
                            farmerName === "Rigoberto"

                                ?

                                <>

                                    <a href="https://rubycoffeeroasters.com/" target="_blank">

                                        <Card.Img
                                            className="d-block mx-auto img-fluid w-50 img-thumbnail"
                                            variant="top"
                                            src={rubyColorfulCoffeesLogo}
                                            style={{ 'margin-bottom': '1rem', 'margin-top': '1rem', 'max-width': '40%' }}
                                        />

                                    </a>

                                    <Card.Text >
                                        {/* <h3 style={{ color: 'white', 'margin-top': '2.5rem', 'margin-bottom': '1.5rem' }}>H+S Coffee Roasters</h3> */}
                                        "We are guided by the notion that responsible business can do good and create value for everyone involved, from the producers we work with to our dear and valuable supporters drinking our coffees at home or preparing them in their shops. We are driven to present our menu in a way that celebrates the producer while also making the coffees inviting and accessible for everyday drinking."
                                    </Card.Text>

                                    <Button
                                        variant="outline-light"
                                        href={'https://rubycoffeeroasters.com/'}
                                        target="_blank"
                                    >
                                        <b>Shop</b>
                                    </Button>

                                </>

                                :

                                null

                        }

                    </Card.Body>
                </Card>

                {/* Roaster Intake */}
                {
                    roasterIntakeNode ?

                        <>

                            <Row>

                                <Col lg='12'>

                                    <h3 style={{ 'padding-top': '0.5em', 'color': 'white' }}>Roaster Intake</h3>

                                    <p style={{ 'color': 'white' }}>

                                        Location: <b>{roasterIntakeNode.city}, {roasterIntakeNode.state}, {roasterIntakeNode.country}</b><br />

                                        Green Coffee Total Weight: <b>

                                            {
                                                roasterIntakeLots

                                                    ?

                                                    roasterIntakeLots[0].absorbedWeight + ' ' +

                                                    (
                                                        roasterIntakeLots[0].absorbedWeightUnit.endsWith('s')

                                                            ?

                                                            roasterIntakeLots[0].absorbedWeightUnit

                                                            :

                                                            roasterIntakeLots[0].absorbedWeightUnit + 's'
                                                    )

                                                    :

                                                    `Coming Soon`
                                            }

                                        </b><br />

                                    </p>

                                    <Accordion style={{ 'margin-bottom': '1.5rem' }}>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                <button className='bttn bttn-primary'>Roaster Intake Lots</button>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>

                                                    <Pagination

                                                        lots={roasterIntakeLots ? paginate(roasterIntakeLots) : []}

                                                        lotType={'roasterIntake'}

                                                    />

                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>

                                    <p style={{ 'color': 'white' }}>The importer sends the bags of green coffee to the roastery where the coffee is roasted.</p>

                                </Col>
                            </Row>

                        </>

                        :

                        null

                }

                {/* Roasting */}
                {
                    roastingNode ?
                        <>
                            <Row>

                                <Col lg='12'>

                                    <h3 style={{ 'padding-top': '0.5em', 'color': 'white' }}>Roasting</h3>

                                    <p style={{ 'color': 'white' }}>

                                        Location: <b>{roastingNode.city}, {roastingNode.state}, {roastingNode.country}</b><br />

                                        Roasted Coffee Total Weight: <b>

                                            {
                                                roastingLots && roastedCoffeeTotalWeight != 0

                                                    ?

                                                    roastedCoffeeTotalWeight.toFixed(2) + ' ' +

                                                    (
                                                        roastingLots[0].absorbedWeightUnit.endsWith('s')

                                                            ?

                                                            roastingLots[0].absorbedWeightUnit

                                                            :

                                                            roastingLots[0].absorbedWeightUnit + 's'
                                                    )

                                                    :

                                                    `Coming Soon`
                                            }

                                        </b><br />

                                    </p>
                                    <Accordion style={{ 'margin-bottom': '3.5rem' }}>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                <button className='bttn bttn-primary'>Roasting Lots</button>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>

                                                    <Pagination

                                                        lots={roastingLots ? paginate(roastingLots) : []}

                                                        lotType={'roasting'}

                                                    />

                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Col>
                            </Row>
                        </>
                        :
                        null
                }

            </Container>
        </div>
    );
}

export default Roasting;