import Koa from 'koa'
import debug from 'debug'
// import compress from 'koa-compress'

// import handleError from './middleware/handle-error'
// import logger from './middleware/logger'
// import responseTime from './middleware/response-time'
// import pageRenderers from './middleware/page-renderers'
// import hotReload from './middleware/hot-reload'
// import headers from './middleware/headers'
// import { setRoutes } from './router'
// import setRouterContext from './middleware/set-router-context'
import { router, setRoutes } from './router'

const server = new Koa()
const log = debug('lego:server.js')
log('starting')

// server.use(handleError('render500'))
// server.use(responseTime())
// server.use(compress({ threshold: 2048 }))
// server.use(logger())
// server.use(headers())
// server.use(pageRenderers())

// if (process.env.NODE_ENV === 'development') {
//   hotReload(server)
// }

export default function createServer(assets) {
  setRoutes(assets)
  server.use(router.routes())
  return server
}

