import React from 'react'
import { renderToString } from 'react-dom/server'
import debug from 'debug'

import Error500 from '../templates/error-500'

const log = debug(':server.js')

export default function pageRenderers() {
  return async (ctx, next) => {
    ctx.renderPageToString = function(page) {
      return `<!doctype html>${renderToString(page)}`
    }
    ctx.render500 = function(e) {
      log('render500', e)
      ctx.response.status = 500
      return ctx.renderPageToString(<Error500 />)
    }
    await next()
  }
}

