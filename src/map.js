import xs from 'xstream'  // eslint-disable-line no-unused-vars
import {run} from '@cycle/xstream-run'
import {h, h1, makeDOMDriver} from '@cycle/dom';

import GoogleMapWidget from './google-map'

const map = function () {
  return {
    DOM: xs.of({}).map(() =>
      h('div', [
        h1('Map'),
        new GoogleMapWidget({ x: 0, y: 0 })
      ])
    )
  }
}

const drivers = {
  DOM: makeDOMDriver('#root')
};

run(map, drivers)
