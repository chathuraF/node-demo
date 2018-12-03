const users = require('./routes/users');
const maths = require('./routes/maths');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/users/', users)
app.use('/api/maths/', maths)

app.listen(2000, ()=>{
    console.log('app is listening..')
})

module.exports = app;
