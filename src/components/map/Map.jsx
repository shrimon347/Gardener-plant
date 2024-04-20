import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
const Map = () => {
  const position = [23.8041, 90.4152];

  return (
      <MapContainer
        style={{ height: "72vh", width: "100%" }}
        center={position}
        zoom={13}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=E4oyIf9lItCnPD3sKD8O"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
};

export default Map;
