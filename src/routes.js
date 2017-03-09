import React from 'react'
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import debug from 'debug'

import Homepage from './modules/homepage/containers'
import Counter from './modules/counter/containers/'
import NotFound from './modules/not-found/containers'

debug(':routes')

export const routes = [
  {
    name: 'homepage',
    exact: true,
    path: '/',
    label: 'About React Lego',
    component: Homepage,
  },
  {
    name: 'count',
    path: '/count',
    label: 'Star Wars Trivia',
    component: Counter,
  }
]

export function makeRoutes() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/count">count</Link></li>
      </ul>
      <Switch>
        {
          routes.map(
            route => (
              <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            )
          )
        }
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
