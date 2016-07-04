import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import input from './input'
import counter from './counter'

const drivers = {
  DOM: makeDOMDriver('#root')
};

run(counter, drivers)

