const bundles = [
  {
    name: 'vendor',
    entry: ['react', 'react-dom', 'moment'],
  },
  {
    name: 'moment',
    entry: 'moment',
  },
]

const entryNames = {}
const names = []

bundles.forEach((o) => {
  names.push(o.name)
  if (o.entry) entryNames[o.name] = o.entry
})

module.exports = {
  names,
  bundles,
  entryNames,
}
