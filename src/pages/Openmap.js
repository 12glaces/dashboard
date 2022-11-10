import { Marker, Popup, MapContainer, TileLayer, useMapEvents, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import L from 'leaflet';
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Openmap = () => {
    const [markers, setMarkers] = useState([
        {
          lat: 45.227,
          lng: 3.213,
        }
    ]);
    const MyComponent = () => {
        useMapEvents({
            click: (e) => {
                setMarkers([...markers, e.latlng]);
            }
        })
        return null
    }
    return (
        <div>
            <div className='map'>
            <MapContainer center={[45.227, 2.213]} zoom={8} >
            <MyComponent/>
            {markers.map((marker, i) => (
            <Marker key={`marker-${i}`} position={marker}>
                <Popup>
                <span>
                    Yes this marker is in france. <br /> Oui Oui Oui Baguette hon hon hon
                </span>
                </Popup>
            </Marker>
            ))}
            <Marker position={[45.227, 2.213]}>
                <Popup>
                <span>
                    Yes this marker is in france. <br /> Oui Oui Oui Baguette hon hon hon
                </span>
                </Popup>
                <Tooltip direction="bottom" offset={[-15, 40]} opacity={1} permanent>
                    Click on the map to add a marker!!
                </Tooltip>
            </Marker>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            </div>
        </div>
    );
};

export default Openmap;