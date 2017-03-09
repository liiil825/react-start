import React, { PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import matchPath from 'react-router-dom/matchPath'

import { StaticRouter as Router } from 'react-router-dom'

import configureStore from '../../app/store/create-store'
import { makeRoutes, routes } from '../../routes'

function getMatch(url) {
  return routes
    .find(route => matchPath(
      url,
      {
        path: route.path,
        exact: true,
        strict: false,
      },
    ))
}

function Markup({
  location,
  store,
}) {
  return (
    <Provider store={store}>
      <Router
        location={location}
        context={{}}
      >
        {makeRoutes(
          location,
        )}
      </Router>
    </Provider>
  )
}
Markup.propTypes = {
  location: PropTypes.string,
  store: PropTypes.object,
}

async function getData(dispatch, req) {
  const needs = []
  routes
    .filter(route => route.component.needs)
    .forEach((route) => {
      const match = getMatch(req.url)
      if (match) {
        route.component.needs.map(need => needs.push(dispatch(need(match.params))))
      }
    })
  await Promise.all(needs)
}

export default function setRouterContext() {
  return async (ctx, next) => {
    console.log('set router context')
    console.log({ ctx })
    console.log({ next })
    const store = configureStore()
    const markup = renderToString(
      <Markup location={ctx.request.url} store={store} />
    )
    await getData(store.dispatch, ctx.request)
    const match = getMatch(ctx.request.url)
    console.log({ match })
    ctx.status = match ? 200 : 404
    ctx.initialState = store.getState()
    console.log(ctx.initialState)
    ctx.body = markup
    ctx.markup = markup
    await next()
  }
}
