// Initializes the `accounts` service on path `/accounts`
const createService = require('feathers-mongoose')
const createModel = require('../../models/accounts.model')
const hooks = require('./accounts.hooks')
const filters = require('./accounts.filters')

module.exports = function () {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'accounts',
    Model,
    paginate,
  }

  // Initialize our service with any options it requires
  app.use('/accounts', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('accounts')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
