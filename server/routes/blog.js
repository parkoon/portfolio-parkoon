const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blog')

router.post('/', blogController.createBlog)

module.exports = router
