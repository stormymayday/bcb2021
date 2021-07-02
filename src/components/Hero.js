import React from 'react';

// Bootstrap components
import Container from 'react-bootstrap/Container';

import Slider from './Slider';

export const Hero = ({ farmerPicture }) => {
    return (
        <div id='hero'>

            <Slider image={farmerPicture} id='hero' />

        </div>
    );
}

export default Hero;