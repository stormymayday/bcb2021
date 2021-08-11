import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from "leaflet";
import PropTypes from "prop-types";
import "leaflet.polyline.snakeanim/L.Polyline.SnakeAnim.js";
import icon from "./constants";

const JourneyMap = ({ name, longitude, latitude, nodeCoordinates, mapStyle }) => {

    const SnakeAnim = ({ startAnimation }) => {

        const map = useMap();

        useEffect(() => {

            if (!startAnimation) return;
            const PuertoCortes = [15.845310, -87.943893];
            const QueenCityCollectiveCoffee = [39.742043, -104.991531];
            const Oakland = [37.804363, -122.271111];
            const PortHouston = [29.768000, -95.2809805];

            const route = L.featureGroup([
                L.marker(PuertoCortes, { icon }),
                L.polyline([PuertoCortes, PortHouston], { snakingSpeed: 100 }),
                L.marker(PortHouston, { icon }),
                L.polyline([PortHouston, Oakland], { snakingSpeed: 100 }),
                L.marker(Oakland, { icon }),
                L.polyline([Oakland, QueenCityCollectiveCoffee], { snakingSpeed: 100 }),
                L.marker(QueenCityCollectiveCoffee, { icon })
            ], { snakingPause: 1000 });

            // map.fitBounds(route.getBounds());

            map.addLayer(route);

            route.snakeIn();

            route.on("snakestart snake snakeend", ev => {
                console.log(ev.type);
            });

            console.log(map);

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

    let position = [latitude, longitude];

    const monochromeStyle = process.env.REACT_APP_MAPBOX_STYLE;

    const mapRef = useRef();

    useEffect(() => {

    }, [nodeCoordinates]);

    return (
        <>
            <MapContainer style={{ 'border-radius': '0.3em', 'z-index': '0' }} center={[31.000000, -100.000000]} zoom={3} scrollWheelZoom={false}>
                <TileLayer

                    attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
                    url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERNAME}/${process.env.REACT_APP_MAPBOX_STYLE}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`}

                />
                <SnakeAnim startAnimation={startAnimation} />

            </MapContainer >
            <button className='bttn bttn-primary' onClick={startSnake}>Play</button>
        </>
    );
};

export default JourneyMap;