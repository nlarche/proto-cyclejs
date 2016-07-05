import xs from 'xstream'  // eslint-disable-line no-unused-vars
import {html} from 'snabbdom-jsx'; // eslint-disable-line no-unused-vars

const intent = sources => ({
  inputValue$: sources.DOM
    .select('input')
    .events('input')
    .map(e => e.target.value)
    .startWith('')
})

const model = action =>
  action.inputValue$
    .map(v => `Hello ${v}`)


const view = state =>
  state.map(sentence =>
    <div>
      <h1>{sentence}</h1>
      <input type="text" />
    </div>)

export default sources => ({
  DOM: view(model(intent(sources)))
})
