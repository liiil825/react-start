import Router from 'koa-router'
import koaStatic from 'koa-static'
import debug from 'debug'

import setRouterContext from './middleware/set-router-context'
import renderApp from './middleware/render-app'
import apiRouter from './api'
import { DIST, PUBLIC } from '../config/path'

const log = debug(':router')
log('router hello world')

export const router = new Router()

const publicFiles = koaStatic(PUBLIC)
publicFiles._name = 'koaStatic /public' // eslint-disable-line no-underscore-dangle

const distFiles = koaStatic(DIST)
distFiles._name = 'koaStatic /dist' // eslint-disable-line no-underscore-dangle

export function setRoutes(assets) {
  log('adding react routes')
  console.log('set Routes')

  router
    .use(setRouterContext())
    .use(publicFiles)
    .use(distFiles)
    .use(apiRouter.routes())
    .use(apiRouter.allowedMethods())
    .get('/(.*)', renderApp(assets))
}

