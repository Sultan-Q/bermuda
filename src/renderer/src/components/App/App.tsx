import React, { useState } from 'react';
import Map from './Map/Map';
import Titlebar from './Titlebar/Titlebar';
import Controls from './Controls/Controls';
import { LatLngLiteral } from 'leaflet';
import { Toaster } from 'react-hot-toast';
import { useStatusMessages } from '../../hooks/useStatusMessage';

import './App.css';

const App = () => {
  const [location, setLocation] = useState<LatLngLiteral>({
    lat: 38.878544,
    lng: -77.22932,
  });

  useStatusMessages();

  return (
    <div id='app-container'>
      <Titlebar />
      <div id='app-content'>
        <Controls location={location} setLocation={setLocation} />
        <Map location={location} setLocation={setLocation} />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
