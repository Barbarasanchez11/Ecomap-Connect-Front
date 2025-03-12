import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import '../Styles/MyMap.css'

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
console.log(customIcon)

const MyMap = () => {
  return (
    <main className="main-mymap">
        <section className="section-mymap">
            <div className="container-mymap">

        <MapContainer center={[40.7128, -74.006]} zoom={13} style={{ height: "500px", width: "100%" }}>
      {/* Capa base de OpenStreetMap */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Marcador con popup */}
      <Marker position={[40.7128, -74.006]} icon={customIcon}>
        <Popup>¡Hola! Este es un marcador en Nueva York.</Popup>
      </Marker>
    </MapContainer>
            </div>

        </section>
    </main>
  );
};

export default MyMap;
