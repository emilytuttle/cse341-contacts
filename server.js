const express = require('express');
const app = express();

const mongodb = require('./data/database.js')
const port = 3000;

app.use('/', require('./routes/index.js'))





mongodb.initDb((err) => {
    if(err) {
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Database listening and running on port ${port}`)})
    }
})

