function routes(app, db, accounts, contactList) {
  app.post('/login', (req,res)=>{
    let email = req.body.email
    if(email){
        db.findOne({email}, (err, doc)=>{
            if(doc){
                res.json({"status":"success","id":doc.id})
            }else{
                res.status(400).json({"status":"Failed", "reason":"Not recognised"})
            }
        })
    }else{
        res.status(400).json({"status":"Failed", "reason":"wrong input"})
    }
  });

  app.post('/register', (req,res)=>{
      let email = req.body.email
      let idd = shortid.generate()
      if(email){
          db.findOne({email}, (err, doc)=>{
              if(doc){
                  res.status(400).json({"status":"Failed", "reason":"Already registered"})
              }else{
                  db.insertOne({email})
                  res.json({"status":"success","id":idd})
              }
          })
      }else{
          res.status(400).json({"status":"Failed", "reason":"wrong input"})
      }
  });
  
	app.get('/contacts', async (request, response) => {
		let cache = [];
		const COUNTER = await contactList.methods.count().call();

		for (let i = 1; i <= COUNTER; i++) {
      const contact = await contactList.methods.contacts(i).call();
      cache = [...cache, contact];
    }
    
    response.json(cache);
  });
}

module.exports = routes
