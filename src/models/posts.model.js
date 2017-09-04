// posts-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const posts = new Schema({
    accountId: { type: mongooseClient.Schema.Types.ObjectId, ref: 'accounts' },
    body: { type: String },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongooseClient.Schema.Types.ObjectId, ref: 'users' },
    title: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
  })

  return mongooseClient.model('posts', posts)
}
