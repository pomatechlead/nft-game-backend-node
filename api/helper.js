function helperApi(app, db, account, helperContract) {
    app.get('/getHouseDetails/:id', async (req, res) => {
        const id = req.params.id;
        const data = await helperContract.methods.getHouseDetails(id).call();
        res.json(data);
    });

    app.get('/getHarvestCost/:id', async (req, res) => {
        const id = req.params.id;
        const harvestingReward = req.query.harvestingReward;
        console.log(req.query.harvestingReward);
        const data = await helperContract.methods.getHarvestCost(id, harvestingReward).call();
        res.json(data);
    });

    app.get('/getRepairCost/:id', async (req, res) => {
        const id = req.params.id;
        const percent = req.query.percent
        const data = await helperContract.methods.getRepairCost(id, percent).call();
        res.json(data);
    });
}

module.exports = helperApi
   