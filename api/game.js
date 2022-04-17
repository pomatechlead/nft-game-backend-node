function gameApi(app, db, account, gameContract, houseContract) {
    app.get('/getResource/:id', async (req, res) => {
        const id = req.params.id;
        const user = req.query.user;
        const data = await gameContract.methods.getResource(user, id).call();
        res.json(data);
    });

    app.post('/activateHouse', async (req,res) => {
        const tokenId = req.body.tokenId;
        const user = req.body.user;
        const data = await houseContract.methods.getOwnerAndStatus(1).call();

        if (data[0] != user) {
            res.status(400).json({"status": "Failed", "reason": "Activate permission denied"});
        }
        if (data[1] == true) {
            res.status(400).json({"status": "Failed", "reason": "Already activated"});
        }

        if (data[2] != 0) {
            res.status(400).json({"status": "Failed", "reason": "Dead houseNFT"});
        }

        await gameContract.methods
            .activateHouse(tokenId)
            .send({ from: account })
            .on("receipt", async (receipt) => {
                res.status(400).json({"status": "success", "reason": "House activated!"});
            })
            .on("error", (error, receipt) => {
                res.status(400).json({"status": "error", "reason": error});
            });

    });

}

module.exports = gameApi
   