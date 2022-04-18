const authApi = require('./api/auth');
const helperApi = require('./api/helper');
const houseApi = require('./api/house');
const gameApi = require('./api/game');

function routes(app, db, account, gameContract, houseContract, helperContract) {
    authApi(app, db, account);
    helperApi(app, db, account, helperContract);
    houseApi(app, db, account, houseContract);
    gameApi(app, db, account, gameContract, houseContract);
}

module.exports = routes
