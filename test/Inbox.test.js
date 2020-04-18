const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require ('../compile');

//
//
//
// let accounts;
let inbox;
beforeEach (async () => {
// //   // Get the list of all accounts
// //
 accounts = await web3.eth.getAccounts();
// //
// //   // Use one of the accounts to dploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: ['pay'] })
  .send({from: accounts[0], gas: '1000000'});

});
// //
describe('Inbox', () => {
 it('Proll Contract is Deployed', () => {

// console.log(inbox);
   assert.ok(inbox.options.address);
});

 it('Approve Payment', async () => {
   const message = await inbox.methods.message().call();
   assert.equal(message, 'pay');
 });
//
it('Approved', async () => {
  await inbox.methods.Approve('bye').send({from: accounts[0]});
  const message = await inbox.methods.message().call();
  assert.equal(message, 'bye');
});
});
