const client = require("../config/database.js")

function createMessage(author, message) {
  return client.messages.create( {
    data: {
      author: author,
      message: message
    }
  })
}

function allMessages() {
  return client.messages.findMany()
}

module.exports = {
  createMessage,
  allMessages
}