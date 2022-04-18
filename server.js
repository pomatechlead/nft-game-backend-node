const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const Web3 = require('web3');
const mongodb = require('mongodb').MongoClient;
const contract = require('@truffle/contract');
const lsHelpers = require('./helpers/lsHelpers');
const gameArtifacts = require('./build/contracts/Game.json');
const houseArtifacts = require('./build/contracts/HouseNFT.json');
const helperArtifacts = require('./build/contracts/Helper.json');
const CONFIG = require('./config');

app.use(cors());
app.use(express.json());

if (typeof web3 !== 'undefined') {
	var web3 = new Web3(web3.currentProvider);
} else {
	var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

// const LMS = contract(artifacts);

// LMS.setProvider(web3.currentProvider);

mongodb.connect('mongodb://127.0.0.1:27017/lsnft_backend',
	{
		useUnifiedTopology: true,
	}, async (err, client) => {
	const db =client.db('Cluster0');

	// set accounts
	const privateKey = CONFIG.PRIVATE_KEY;
	const account = await web3.eth.accounts.privateKeyToAccount('0x'+ privateKey);
	console.log(lsHelpers.getName());
	
	// set contract wit abi
	const gameContract = new web3.eth.Contract(gameArtifacts.abi, CONFIG.GAME_ADDRESS);
	const houseContract = new web3.eth.Contract(houseArtifacts.abi, CONFIG.HOUSE_ADDRESS);
	const helperContract = new web3.eth.Contract(helperArtifacts.abi, CONFIG.HELPER_ADDRESS);
	
	routes(app, db, account, gameContract, houseContract, helperContract);
	app.listen(process.env.PORT || 3001, () => {
		console.log('listening on port '+ (process.env.PORT || 3001));
	});
});
