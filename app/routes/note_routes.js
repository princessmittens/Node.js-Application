
module.exports = function(app, db) {


  
  app.post('/cats', (req, res) => {
    db.collection('cats').save(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      res.redirect('/')
    })
  })


  app.get('/', (req, res) => {
    db.collection('cats').find().toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      res.render('index.ejs', {cats: result})
    })
  })


  
}
  