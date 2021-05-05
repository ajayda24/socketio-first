const express = require('express')
const indexController = require('../controllers/index')

const router = express.Router()


router.get('/', indexController.getIndex)
router.post('/', indexController.postIndex)

module.exports = router