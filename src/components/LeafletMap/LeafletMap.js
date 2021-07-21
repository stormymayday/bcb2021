import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { L } from 'leaflet';

const LeafletMap = ({ name, longitude, latitude, nodeCoordinates, mapStyle }) => {

    let position = [latitude, longitude];

    console.log(nodeCoordinates);

    const monochromeStyle = process.env.REACT_APP_MAPBOX_STYLE;

    const mapRef = useRef();

    useEffect(() => {

    }, [nodeCoordinates]);

    return (
        <MapContainer style={{ 'border-radius': '0.3em' }} center={position} zoom={6} scrollWheelZoom={false} >
            <TileLayer

                attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
                url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERNAME}/ckr6jrmhs0tg218qk5ym975gf/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`}

            // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />

            <Marker position={[latitude, longitude]}>
                <Popup>
                    {name}
                </Popup>
            </Marker>


            {/* {
                nodeCoordinates ?
                    <>

                        {
                            nodeCoordinates.map(node => (

                                <Marker key={node.name} position={[node.latitude, node.longitude]} />

                            ))
                        }
                    </>

                    :

                    null

            } */}

        </MapContainer >
    );
};

export default LeafletMap;