function helperApi(app, db, accounts, helperContract) {
    app.get('/contacts', async (request, response) => {
        let cache = [];
        const COUNTER = await gameContract.methods.count().call();

        for (let i = 1; i <= COUNTER; i++) {
            const contact = await gameContract.methods.contacts(i).call();
            cache = [...cache, contact];
        }

        response.json(cache);
    });

}

module.exports = helperApi
