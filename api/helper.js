function helperApi(app, db, accounts, helperContract) {
    app.get('/houseDetails/:id', async (req, res) => {
        const id = req.params.id;
        const data = await helperContract.methods.getHouseDetails(id).call();
        res.json(data);
    });

}

module.exports = helperApi
