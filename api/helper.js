var url = require('url');

function helperApi(app, db, accounts, helperContract) {
    app.get('/houseDetails/:id', async (req, res) => {
        const id = req.params.id;
        const data = await helperContract.methods.getHouseDetails(id).call();
        res.json(data);
    });

    app.get('/harvestCost/:id', async (req, res) => {
        const id = req.params.id;
        const harvestingReward = req.query.harvestingReward;
        console.log(req.query.harvestingReward);
        const data = await helperContract.methods.getHarvestCost(id, harvestingReward).call();
        res.json(data);
    });
}

module.exports = helperApi
   