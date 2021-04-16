import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { L } from 'leaflet';

const LeafletMap = ({ farmer, nodeId, longitude, latitude }) => {

    console.log(longitude, latitude);

    // const position = [14.113686, -88.108736];
    // let position = [14.113686, -88.108736];
    let position = [latitude, longitude];

    const mapRef = useRef();
    // const [longitude, setLongitude] = useState(0);
    // const [latitude, setLatitude] = useState(0);

    // useEffect(() => {
    //     position = [14.113686, -88.108736];
    // }, [position]);



    // useEffect(() => {

    //     fetch(`https://bext360api.azure-api.net/retaildev/v1/getnode/${props.nodeId}`, {
    //         method: 'GET',
    //         headers: {
    //             'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //         }
    //     }).then(res => {
    //         return res.json();
    //     })
    //         .then(json => {
    //             setLatitude(json.defaultLocation.latitude);
    //             setLongitude(json.defaultLocation.longitude);
    //         });

    // }, [latitude, longitude])

    // console.log(`Lat: ${props.latitude}, Long: ${props.longitude}`);

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