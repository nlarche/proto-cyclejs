import xs from 'xstream'  // eslint-disable-line no-unused-vars
import {run} from '@cycle/xstream-run'

import makeGoogleMapDriver from './google-map'

function main() {
  return {
    MAP: xs.periodic(1000).fold((acc, x) => {
      acc.center.lat += (x /100)
      acc.center.lng += (x /100)
      return  acc;

    }
    , { center: { lat: -34.397, lng: 150.644 }})
  }
}

const drivers = {
  MAP: makeGoogleMapDriver('#map')
};

run(main, drivers)

