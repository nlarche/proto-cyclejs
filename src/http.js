import xs from 'xstream'  // eslint-disable-line no-unused-vars
import {html} from 'snabbdom-jsx'; // eslint-disable-line no-unused-vars

const url = "http://jsonplaceholder.typicode.com/users/1"

export default sources => {
  const clickEvent$ = sources.DOM.select('button').events('click')
  const request$ = clickEvent$.map(() => {
    return {
      url: url,
      category: 'test',
      method: 'GET'
    }
  })

  const user$ = sources.HTTP
    .select('test')
    .flatten()
    .map(response => response.body)
    .startWith(null); 

  return {
    DOM: user$.map(user =>
      <div>
        <button>click</button>
        { user ? (<div>
          <div>{user.name}</div>
          <div>{user.mail}</div>
        </div>) : '' }
      </div>

    ),
    HTTP: request$
  }
}
