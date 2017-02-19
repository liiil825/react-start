const bundles = [
  {
    name: 'vendor',
    entry: ['react', 'react-dom'],
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
  entryNames[o.name] = o.entry
})

module.exports = {
  names,
  bundles,
  entryNames,
}
