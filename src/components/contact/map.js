import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, withScriptjs} from 'react-google-maps';

class Map extends Component {
    render() {
        const {children} = this.props;

        return (
            <GoogleMap defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}>
                {children}
              </GoogleMap>
        );
    }
}

export default withScriptjs(withGoogleMap(Map));