// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const users = new mongooseClient.Schema({
    accountId: { type: mongooseClient.Schema.Types.ObjectId, ref: 'accounts', required: true },
    users: [{ type: mongooseClient.Schema.Types.ObjectId, ref: 'users' }],
    createdAt: { type: Date, default: Date.now },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
  })

  return mongooseClient.model('users', users)
}
