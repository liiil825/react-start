// const { hook } = require('node-hook')
// const SvgLoader = require('svg-inline-loader')
import debug from 'debug'

import createServer from './create-server'
// import webpackConfig from '../../webpack'

// const webpackEntries = Object.keys(webpackConfig.entry)
const log = debug('react-start:server.js')
log('start')

// hook('.scss', () => '')
// hook('.svg', (source) => {
//   const markup = SvgLoader.getExtractedSVG(source, { removeSVGTagAttrs: false })
//   return `module.exports =  ${JSON.stringify(markup)}`
// })

const assets = {
  javascript: ['server.js'],
  styles: []
}

const server = createServer(assets)
server.listen(process.env.PORT, () => {
  console.log(`listening at http://localhost:${process.env.PORT}`) // eslint-disable-line
})

