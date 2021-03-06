import React from 'react'
import Html from '../templates/html'

export default function renderApp(assets) {
  return async (ctx, next) => {
    await next()
    try {
      ctx.body = ctx.renderPageToString(
        <Html
          initialState={ctx.initialState}
          scripts={assets.javascript}
          stylesheets={assets.styles}
          content={ctx.routerContext}
        />
      )
    } catch (error) {
      ctx.body = ctx.render500(error)
    }
  }
}

