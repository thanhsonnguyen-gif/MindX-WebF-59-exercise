const express = require ('express');
const app = express();
const {connectToDb, db} = require('./database')
connectToDb();
const router = require('./router')
app.use(router)


app.listen(3000,()=>{
    console.log('app running in port 3000')
})