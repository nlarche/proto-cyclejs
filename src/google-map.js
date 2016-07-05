import fromEvent from 'xstream/extra/fromEvent'

export default function makeGoogleMapDriver(selector) {

  const elem = document.querySelector(selector)

  const map = new google.maps.Map(elem, {
    zoom: 4
  });

  function update(value) {
    map.panTo(value.center);
    new google.maps.Marker({
      position: value.center,
      map: map,
    });
  }

  function createEvent(evName) {
    return fromEvent(el, evName)
      .filter(() => map)
      .map((ev) => map.getElementsAtEvent(ev))
  }

  return function googleMapDriver(sink$) {
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
