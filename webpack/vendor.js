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

const entry = {}
const names = []

bundles.forEach(o => {
  names.push(o.name)
  entry[o.name] = o.entry
})

module.exports = {
  names,
  bundles,
  entry,
}

