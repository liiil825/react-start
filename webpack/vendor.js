const clientBundles = [
  {
    name: 'vendor',
    entry: [
      'react',
      'react-dom',
      'debug',
    ],
  },
  {
    name: 'redux',
    entry: [
      'redux',
      'redux-saga',
    ],
  },
  {
    name: 'react-router',
    entry: [
      'react-router',
      'react-router-redux',
      'react-router-dom',
    ],
  },
  {
    name: 'lodash',
    entry: 'moment',
  },
  {
    name: 'moment',
    entry: 'moment',
  },
]
const serverBundles = []

const clicentNames = []
const clientEntryNames = {}
clientBundles.forEach((o) => {
  clicentNames.push(o.name)
  if (o.entry) clientEntryNames[o.name] = o.entry
})

const serverNames = []
const serverEntryNames = {}
serverBundles.forEach((o) => {
  serverNames.push(o.name)
  if (o.entry) serverEntryNames[o.name] = o.entry
})

module.exports = {
  clicentNames,
  clientBundles,
  clientEntryNames,
  serverNames,
  serverBundles,
  serverEntryNames,
}

