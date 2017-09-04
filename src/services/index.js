const users = require('./users/users.service.js')
const accounts = require('./accounts/accounts.service.js')
const posts = require('./posts/posts.service.js')
const pages = require('./pages/pages.service.js')
module.exports = function () {
  const app = this // eslint-disable-line no-unused-vars
  app.configure(users)
  app.configure(accounts)
  app.configure(posts)
  app.configure(pages)
}
