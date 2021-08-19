import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from "leaflet";
import PropTypes from "prop-types";
import "leaflet.polyline.snakeanim/L.Polyline.SnakeAnim.js";
import icon from "./constants";

const JourneyMap = ({ nodeCoordinates }) => {

    const SnakeAnim = ({ startAnimation }) => {

        const map = useMap();

        useEffect(() => {

            const portOfExport = [15.845310, -87.943893];
            const PortHouston = [29.768000, -95.2809805];
            const portOfImport = [37.804363, -122.271111];
            const roasterIntake = [39.742043, -104.991531];

            const route = L.featureGroup([
                L.marker(portOfExport, { icon }).bindPopup('<p>Puerto Cortes</p>').openPopup(),
                L.polyline([portOfExport, PortHouston], { snakingSpeed: 100 }),
                L.marker(PortHouston, { icon }).bindPopup('<p>Port Houston</p>').openPopup(),
                L.polyline([PortHouston, portOfImport], { snakingSpeed: 100 }),
                L.marker(portOfImport, { icon }).bindPopup('<p>Oakland</p>').openPopup(),
                L.polyline([portOfImport, roasterIntake], { snakingSpeed: 100 }),
                L.marker(roasterIntake, { icon }).bindPopup('<p>Denver</p>').openPopup()
            ], { snakingPause: 1000 });


            if (!startAnimation) {

                var osmUrl = `https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERNAME}/${process.env.REACT_APP_MAPBOX_STYLE}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`;

                map.eachLayer(function (layer) {
                    if (osmUrl != layer._url) { map.removeLayer(layer) };
                });

            }

            else {

                // map.fitBounds(route.getBounds());

                map.addLayer(route);

                route.snakeIn();

                // route.on("snakestart snake snakeend", ev => {
                //     console.log(ev.type);
                // });

                // console.log(map);

            }

        }, [startAnimation]);

        return null;
    };

    SnakeAnim.propTypes = {
        startAnimation: PropTypes.bool.isRequired
    };

    const [startAnimation, setStartAnimation] = useState(false);

    const startSnake = () => {

        setStartAnimation(true);

    };

    const resetSnake = () => {

        setStartAnimation(false);

    }

    const monochromeStyle = process.env.REACT_APP_MAPBOX_STYLE;

    const mapRef = useRef();

    useEffect(() => {

    }, [nodeCoordinates]);

    return (
        <>
            <button className='bttn bttn-primary' style={{ 'margin-top': '1rem', 'margin-bottom': '1rem', 'margin-right': '1rem', }} onClick={startSnake}>Play</button>

            <button className='bttn bttn-white' style={{ 'margin-top': '1rem', 'margin-bottom': '1rem' }} onClick={resetSnake}>Reset</button>

            <MapContainer style={{ 'border-radius': '0.3em', 'z-index': '0', 'height': '60vh' }} center={[31.000000, -100.000000]} zoom={3} scrollWheelZoom={false}>
                <TileLayer
                    attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
                    url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERNAME}/${process.env.REACT_APP_MAPBOX_STYLE}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`}

                />
                <SnakeAnim startAnimation={startAnimation} />

            </MapContainer >

        </>
    );
};

export default JourneyMap;