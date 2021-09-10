import React from 'react';
import './Slider.css';

// Bootstrap components
import Carousel from 'react-bootstrap/Carousel'

export default function Slider({ image }) {
    // style={{'height': '100vh'}}

    // className="d-block w-100"
    return (
        <>
            <Carousel>

                <Carousel.Item interval={5000} >
                    <div style={{

                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        height: `93vh`

                    }}
                    // className='slide1' 
                    />
                    <Carousel.Caption>
                        <h3>Adding transparency to your cup of coffee</h3>
                        <p>Thank you for being a coffee pioneer! You are one of the first who have this level of visibility at the wave of your hand. The link that took you here is tied to a specific batch of roasted coffee, and you can see some highlights of its origin and how it got to you, recorded using blockchain technology.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000} >
                    <div className='slide2' />
                    <Carousel.Caption>
                        <h3>Adding transparency to your cup of coffee</h3>
                        <p>Thank you for being a coffee pioneer! You are one of the first who have this level of visibility at the wave of your hand. The link that took you here is tied to a specific batch of roasted coffee, and you can see some highlights of its origin and how it got to you, recorded using blockchain technology.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    );
}