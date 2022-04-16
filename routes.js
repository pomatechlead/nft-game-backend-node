const authApi = require('./api/auth');
const helperApi = require('./api/helper');

function routes(app, db, accounts, gameContract, houseContract, helperContract) {
    authApi(app, db, accounts);
    helperApi(app, db, accounts, helperContract);
}

module.exports = routes
