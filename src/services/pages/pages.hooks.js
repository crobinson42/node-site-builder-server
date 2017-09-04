const { authenticate } = require('feathers-authentication').hooks
const { restrictToOwner } = require('feathers-authentication-hooks')
const accountId = require('../../hooks/accountId')

const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: 'accountId',
    ownerField: 'accountId',
  }),
]

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ authenticate('jwt'), accountId() ],
    update: [ ...restrict ],
    patch: [ ...restrict ],
    remove: [ ...restrict ],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
