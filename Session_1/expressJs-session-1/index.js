const { application } = require('express');
const express = require('express')

const App =  express();

const port = 3000;

App.post('/', (req, res) => {
    res.send('hello Son');
})

App.listen(port, ()=>{
    console.log(`Application is running in port ${port}`)
})