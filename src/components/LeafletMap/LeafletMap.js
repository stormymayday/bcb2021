import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { L } from 'leaflet';

const LeafletMap = ({ farmer, longitude, latitude }) => {

    let position = [latitude, longitude];

    const mapRef = useRef();

    return (
        <MapContainer center={position} zoom={9} scrollWheelZoom={false} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                    {farmer}
                </Popup>
            </Marker>
        </MapContainer >
    );
};

export default LeafletMap;