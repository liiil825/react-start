import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import debug from 'debug'

import Homepage from './modules/homepage/containers'
import Counter from './modules/counter/containers/'
import NotFound from './modules/not-found/containers'

debug('lego:routes')

export function hello() {
}

export function makeRoutes() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/count">count</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/count" component={Counter} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

