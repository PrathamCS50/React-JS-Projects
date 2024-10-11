// import logo from "./logo.svg";
// import "./App.css";
// import Accordian from "./Components/Accordian/index";
// import RandomColor from "./Components/Random-color";
// import StarRating from "./Components/Star-Rating/StarRating";

// function App() {
//   return (
//     <div className="App">
//       <Accordian />
//       <RandomColor />
//       <StarRating noOfStars={10} />
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import { useState } from 'react';
import Map, { Marker, ViewStateChangeEvent } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const MAP_STYLE = 'https://api.maptiler.com/maps/streets-v2/style.json?key=YOUR_MAPTILER_API_KEY_HERE';

// Define coordinates as a tuple [number, number]
const cities: { name: string; coordinates: [number, number] }[] = [
  { name: 'Delhi', coordinates: [77.1025, 28.7041] },
  { name: 'London', coordinates: [0.11, 51.49] },
  { name: 'Tokyo', coordinates: [139.65, 35.6764] },
  { name: 'New York', coordinates: [74.0, 40.7041] },
  { name: 'Mexico City', coordinates: [99.1332, 19.4326] },
  { name: 'Cairo', coordinates: [30.05, 31.2357] },
  { name: 'Beijing', coordinates: [116.4025, 39.9041] },
  { name: 'Kinshasa', coordinates: [15.2663, -4.4419] },
  { name: 'Boston', coordinates: [71.059, 42.3601] }
];


const App = () => {
  const [viewState, setViewState] = useState({
    longitude: 0.11,
    latitude: 51.49,
    zoom: 2
  });

  // Function to zoom in when marker is clicked
  const zoomInToCity = (coordinates: [number, number]) => {
    setViewState({
      longitude: coordinates[0],
      latitude: coordinates[1],
      zoom: 10
    });
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Map
        viewState={viewState}
        mapStyle={MAP_STYLE}
        onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
      >
        {cities.map((city, index) => (
          <Marker key={index} longitude={city.coordinates[0]} latitude={city.coordinates[1]}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => zoomInToCity(city.coordinates)}
            >
              📍
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default App;