const { Router } = require("express")
const { createMessage, allMessages } = require('../services/message.service.js')

const router = Router()

router.get('/', (req, res) => {
  allMessages()
    .then(messages => res.send(messages))
    .catch(err => res.status(500).send('Error on get data'))
})

router.post('/', (req, res) => {
  const { author, message } = req.body
  
  createMessage(author, message)
    .then(message => res.send(message))
    .catch(err => { res.status(500).send('Error on post data') })
})

module.exports = router