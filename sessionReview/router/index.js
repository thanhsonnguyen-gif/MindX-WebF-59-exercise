const express = require('express')
const router = express();
const inventoryRouter = require('./invertories')

router.use('/inventory', inventoryRouter)

module.exports = router