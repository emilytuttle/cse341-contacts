const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongodb = require('./data/database.js')
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.use('/', require('./routes/index.js'))



mongodb.initDb((err) => {
    if(err) {
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Database listening and running on port ${port}`)})
    }
})

