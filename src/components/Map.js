import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWVzbGFtaSIsImEiOiJjam9uZm81OHIwdmFrM3JyeXR1MXVwbDNpIn0.tkTVTlVgOXkfbcWseGSuNg';
    var map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [this.props.lon, this.props.lat],
      zoom: 6,
      interactive: false,
      pitchWithRotate: false
    });
  }

  render() {
    return (
      <div
        ref={el => (this.mapContainer = el)}
        style={{
          width: '100px',
          height: '100px',
          margin: '0 auto'
        }}
      />
    );
  }
}

export default Map;
