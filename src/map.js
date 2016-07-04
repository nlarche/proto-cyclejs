import xs from 'xstream'  // eslint-disable-line no-unused-vars
import {html} from 'snabbdom-jsx'; // eslint-disable-line no-unused-vars

const intent = sources => {
  const map$ = sources.DOM.select('#map').events('click').map(() => +1).startWith()
  const moins$ = sources.DOM.select('#button-moins').events('click').map(() => -1)
  return {
    inputValue$: xs.merge(plus$, moins$)
  }
}

const model = action =>
  action.inputValue$
    .fold((acc, x) =>  (acc + x), 0)
    .debug(d => console.log(d))
    .map(c => `count ${c}`)


const view = state =>
  state.map(() =>
    <div id="map">
      
    </div>)

export default sources => ({
  DOM: view(model(intent(sources)))
})

initMap()


function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
}
