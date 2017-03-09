import router from 'koa-router'
// import koaBody from 'koa-body'

import handleError from '../middleware/handle-error'

// const parseBody = koaBody()
const apiRouter = router({ prefix: '/api' })

apiRouter.get('/', (ctx) => {
  ctx.type = 'json'
  ctx.status = 200
  ctx.response.body = { status: 'healthy' }
})

apiRouter.use(handleError())

export default apiRouter

