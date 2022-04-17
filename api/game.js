function helperApi(app, db, accounts, houseContract) {
    app.get('/getResource/:id', async (req, res) => {
        const id = req.params.id;
        const user = req.query.user;
        const data = await houseContract.methods.getResource(user, id).call();
        res.json(data);
    });

}

module.exports = helperApi
   