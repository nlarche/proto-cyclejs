import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import input from './exemples/input'

function mapDriver(selector){
    const elem = document.querySelector(selector)
    new google.maps.Map(elem) 
}

const drivers = {
  DOM: makeDOMDriver('#root'),
  MAP: mapDriver('#map')
};

run(input, drivers)

