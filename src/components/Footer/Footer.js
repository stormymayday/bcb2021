import React from 'react';

import { FaTwitterSquare, FaFacebookSquare, FaWhatsappSquare, FaLinkedin } from "react-icons/fa";

import { Nav } from 'react-bootstrap';

import {
    TwitterShareButton,
    FacebookShareButton,
    WhatsappShareButton,
    LinkedinShareButton
} from "react-share";


export default function Footer() {


    return (

        < div
            style={{
                'background-color': '#343A3F',
                'color': '#BEC1C2'
            }}
        >
            <p className="text-center pt-5 pb-3">Share on Social Media</p>
            <Nav className="justify-content-center" activeKey="/home">

                <Nav.Item>
                    <TwitterShareButton
                        url="https://www.blockchaincoffeebeans.com/"
                        title="Blockchain Coffee Beans"
                    >
                        <FaTwitterSquare size={40} style={{ 'margin-left': '0.5rem', 'margin-right': '0.5rem' }} />
                    </TwitterShareButton>
                </Nav.Item>

                <Nav.Item>
                    <FacebookShareButton
                        url="https://www.blockchaincoffeebeans.com/"
                        quote="Blockchain Coffee Beans"
                    >
                        <FaFacebookSquare size={40} style={{ 'margin-left': '0.5rem', 'margin-right': '0.5rem' }} />
                    </FacebookShareButton>
                </Nav.Item>

                <Nav.Item>
                    <WhatsappShareButton
                        url="https://www.blockchaincoffeebeans.com/"
                        title="Blockchain Coffee Beans"
                    >
                        <FaWhatsappSquare size={40} style={{ 'margin-left': '0.5rem', 'margin-right': '0.5rem' }} />
                    </WhatsappShareButton>
                </Nav.Item>

                <Nav.Item>
                    <LinkedinShareButton
                        url="https://www.blockchaincoffeebeans.com/"
                        title="Blockchain Coffee Beans"
                    >
                        <FaLinkedin size={40} style={{ 'margin-left': '0.5rem', 'margin-right': '0.5rem' }} />
                    </LinkedinShareButton>
                </Nav.Item>

            </Nav>

            <p className="text-center pt-3 pb-5 mb-0">
                <a
                    href="https://www.ideglobal.org/privacy-policy"
                    target="_blank"
                    style={{ 'color': '#BEC1C2' }}
                >
                    Privacy Policy
                </a>
            </p>

        </div>
    );
}