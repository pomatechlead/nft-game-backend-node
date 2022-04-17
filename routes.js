const authApi = require('./api/auth');
const helperApi = require('./api/helper');
const houseApi = require('./api/house');
const gameApi = require('./api/game');

function routes(app, db, accounts, gameContract, houseContract, helperContract) {
    authApi(app, db, accounts);
    helperApi(app, db, accounts, helperContract);
    houseApi(app, db, accounts, houseContract);
    gameApi(app, db, accounts, gameContract);
}

module.exports = routes
