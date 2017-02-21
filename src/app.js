import React from 'react'
import moment from 'moment'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default function App() {
  return (
    <div>
      <button
        onClick={
          () => {}
        }
      >hello ,world!,</button>
      <i
        className="fa fa-hand-spock-o fa-1g"
      />
      <br />
      { moment().format('dddd lll') }
    </div>
  )
}

