function helperApi(app, db, accounts, houseContract) {
    app.get('/getHouse/:id', async (req, res) => {
        const id = req.params.id;
        const data = await houseContract.methods.getHouse(id).call();
        res.json(data);
    });
}

module.exports = helperApi
   