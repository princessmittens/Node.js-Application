
module.exports = function(app, db) {
  
  app.post('/cats', (req, res) => {
    db.collection('cats').save(req.body, (err, result) => {
      if (err) { 
        return console.log(err)
      } else { 
        console.log('saving the cats!')
      res.redirect('/')
      }
    })
  })


  // app.post('/cats', (req, res) => {
  //   res.send("testing 1, 2, 3")
  // })


  app.get('/', (req, res) => {
    db.collection('cats').find().toArray((err, result) => {
      if (err) { 
        return console.log(err) 
      } else { 
      console.log('rendering')
      res.render('index.ejs', {cats: result})
      }
    })
  })


  
}
  