import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import input from './input'
import counter from './counter'
import http from './http'
import httpMvi from './http-mvi'

const drivers = {
  DOM: makeDOMDriver('#root'),
  HTTP: makeHTTPDriver()
};

run(httpMvi, drivers)

