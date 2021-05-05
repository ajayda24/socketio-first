const io = require('../socket')
const usersArray = []

exports.getIndex = (req, res, next) => {
  res.json({ users: usersArray })
}
exports.postIndex = (req, res, next) => {

  io.getIO().emit('newUser', { action: 'newUser', name: req.body.user })
  usersArray.push(req.body.user)
  res.json({status:true})
}