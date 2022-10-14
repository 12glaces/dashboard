import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';

const Openmap = () => {
    return (
        <div>
            <div className='map'>
            <MapContainer 
  center={[43.38621, -79.83713]} 
  zoom="13" 
  scrollWheelZoom={false}
  style={{height: "100vh"}}
>
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