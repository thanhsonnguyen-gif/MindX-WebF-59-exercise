const express = require ('express')
const router = express.Router()
const {db} = require('../database/index')

router.get('/', async(res, req)=>{
const inventories = await db.inventories.find({}).toArray()
res.json(inventories)
})

module.exports = router