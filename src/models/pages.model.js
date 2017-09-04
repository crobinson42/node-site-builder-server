// pages-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const pages = new Schema({
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    title: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
  })

  return mongooseClient.model('pages', pages)
}
