// const { hook } = require('node-hook')
// const SvgLoader = require('svg-inline-loader')
import createServer from './create-server'

require('environment')

// hook('.scss', () => '')
// hook('.svg', (source) => {
//   const markup = SvgLoader.getExtractedSVG(source, { removeSVGTagAttrs: false })
//   return `module.exports =  ${JSON.stringify(markup)}`
// })

// const assets = {
  // javascript: ['/vendor.dll.js', '/app.js'],
  // styles: ['/app.css'],
// }

const server = createServer()
server.listen(process.env.PORT, () => {
  console.log(`listening at http://localhost:${process.env.PORT}`) // eslint-disable-line
})

