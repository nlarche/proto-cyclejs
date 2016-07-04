import xs from 'xstream'  // eslint-disable-line no-unused-vars
import {html} from 'snabbdom-jsx'; // eslint-disable-line no-unused-vars

const intent = sources => {
  const plus$ = sources.DOM.select('#button-plus').events('click').map(() => +1)
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
  state.map(count =>
    <div>
      <button id="button-plus" >plus</button>
      <button id="button-moins" >moins</button>
      <h1>{count}</h1>
    </div>)

export default sources => ({
  DOM: view(model(intent(sources)))
})
