const { authenticate } = require('feathers-authentication').hooks
const commonHooks = require('feathers-hooks-common')
const { restrictToOwner } = require('feathers-authentication-hooks')

const { hashPassword } = require('feathers-authentication-local').hooks
const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: '_id',
  }),
]

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ ...restrict ],
    create: [ hashPassword() ],
    update: [ ...restrict, hashPassword() ],
    patch: [ ...restrict, hashPassword() ],
    remove: [ ...restrict ],
  },

  after: {
    all: [
      commonHooks.when(
        hook => hook.params.provider,
        commonHooks.discard('password')
      ),
    ],
    find: [],
    get: [],
    create: [
      hook => {
        // add user to account.users list
        const accounts = hook.app.service('accounts')
        const { accountId, _id } = hook.result

        return accounts.get(accountId).then(account => {
          account.users.push(_id)

          accounts.update(accountId, account)

          return hook
        })
      },
    ],
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
