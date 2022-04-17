const authApi = require('./api/auth');
const helperApi = require('./api/helper');
const houseApi = require('./api/house');
const gameApi = require('./api/game');

function routes(app, db, accounts, gameContract, houseContract, helperContract) {
    authApi(app, db, accounts[0]);
    helperApi(app, db, accounts[0], helperContract);
    houseApi(app, db, accounts[0], houseContract);
    gameApi(app, db, accounts[0], gameContract, houseContract);
}

module.exports = routes
