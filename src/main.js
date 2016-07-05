import xs from 'xstream'  // eslint-disable-line no-unused-vars
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'

import input from './exemples/input'
import fromEvent from 'xstream/extra/fromEvent'

function mapDriver(selector) {
  const elem = document.querySelector(selector)

  function create() {
    console.log('create');
    new google.maps.Map(elem, {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  }

  function update() {
    console.log('update');
  }

  function createEvent(evName) {
    return fromEvent(el, evName)
      .filter(() => instance)
      .map((ev) => instance.getElementsAtEvent(ev))
  }

  return function chartDriver(sink$) {
    sink$.take(1).addListener({
      next: create,
      error: () => { },
      complete: () => { }
    })
    sink$.addListener({
      next: update,
      error: () => { },
      complete: () => { }
    })

    return {
      events: createEvent,
    }
  }
}

function main() {
  return {
    MAP: xs.of({})
  }
}

const drivers = {
  MAP: mapDriver('#map')
};

run(main, drivers)

