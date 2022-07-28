const express = require ('express')
const router = express.Router()
const {db} = require('../database/index')

router.get('/', async(res, req)=>{
//get all inventory
const inventories = await db.inventories.find({}).toArray()
res.json(inventories)
})

router.get('/low100', async(res, req)=>{
    //get all inventory
    const inventories = await db.inventories.find({}).toArray()
    res.json(inventories)
    })

module.exports = router