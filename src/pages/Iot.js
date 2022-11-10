import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaCamera, FaCarAlt, FaCloudflare, FaInbox, FaInstalod, FaLightbulb, FaLock, FaMobileAlt, FaWifi } from 'react-icons/fa';
const Iot = () => {
    const [internetofthings, setinternetofthings] = useState([
        { id: 0, title: "Phone", icon: <FaMobileAlt size={100} />},
        { id: 1,title: "Car", icon: <FaCarAlt size={100} /> },
        { id: 2,title: "BackUp", icon: <FaCloudflare size={100} /> },
        { id: 3,title: "Lights", icon: <FaLightbulb size={100} /> },
        { id: 4,title: "Wifi", icon: <FaWifi size={100} /> },
        { id: 5, title: "Livebox", icon: <FaInbox size={100} />},
        { id: 6,title: "Storage", icon: <FaInstalod size={100} /> },
        { id: 7,title: "Safety camera", icon: <FaCamera size={100} /> },
        { id: 8,title: "Securty lock", icon: <FaLock size={100} /> },
        { id: 9,title: "Wifi 2", icon: <FaWifi size={100} /> },
    ])
    const removeKey = (index) => {
        setinternetofthings(oldArray => {
            return oldArray.filter((value, i) => i !== index)});
      };
    return (
        <div className="container">
            {console.log(internetofthings)}
            {internetofthings.map((iots, index) => 
                <div className="card">
                    {iots.icon}
                    <h1 className="card--title">{iots.title}</h1>
                    <Button className="card--link" onClick={()=>removeKey(index)} >Remove</Button>
                </div>
            )}
        </div>
    );
};

export default Iot;