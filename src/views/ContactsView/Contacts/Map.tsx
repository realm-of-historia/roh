'use client'

import React from 'react';
import GoogleMap from 'google-map-react';

const AnyReactComponent = ({ text }: {text: any}) => (
  <div style={{ backgroundColor: 'white', color: 'black', padding: '5px', borderRadius: '50%' }}>
    {text}
  </div>
);

const Map = (props: any) => {
  const center = {
    lat: 40.2510101,
    lng: 70.0242205,
  };


  const mapOptions = {
    mapId: '50e6da863b3a2bcd',
    key: 'AIzaSyD29cTxkGM8BgG7Yb-4zvpJrcOpKcttvTc'
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMap
        bootstrapURLKeys={{ ...mapOptions}}
        defaultCenter={center}
        defaultZoom={7}
      >
        {/* <AnyReactComponent
          lat={center.lat}
          lng={center.lng}
          text="Your Location"
        /> */}
      </GoogleMap>
    </div>
  );
};

export default Map;