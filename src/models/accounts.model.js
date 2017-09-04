// accounts-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const accounts = new Schema({
    createdAt: { type: Date, default: Date.now },
    name: { type: String, required: true },
    users: [{ type: mongooseClient.Schema.Types.ObjectId, ref: 'users' }],
    updatedAt: { type: Date, default: Date.now },
  })

  return mongooseClient.model('accounts', accounts)
}
