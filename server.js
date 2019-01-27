const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const dblk            = 'mongodb://mittens:bigdemon1@ds113855.mlab.com:13855/lab1'
const app            = express();
const port = 3000
app.use(bodyParser.urlencoded({extended: true}))


// require('../../../app/routes')(app, {});
// app.listen(port, () => {
//   console.log('We are live on ' + port);
// });

MongoClient.connect(dblk, (err, database) => {
    if (err) return console.log(err)
    db = database.db("lab1")
    require('./app/routes')(app, database);
    
    app.listen(process.env.PORT || 3000, () => {
      console.log('We are live on ' + port);
    });               
  })
  