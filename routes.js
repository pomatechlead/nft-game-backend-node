const authApi = require('./api/auth');
const helperApi = require('./api/helper');
const houseApi = require('./api/house');

function routes(app, db, accounts, gameContract, houseContract, helperContract) {
    authApi(app, db, accounts);
    helperApi(app, db, accounts, helperContract);
    houseApi(app, db, accounts, houseContract);
}

module.exports = routes
