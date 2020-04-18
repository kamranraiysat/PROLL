 const HDWalletProvider = require('truffle-hdwallet-provider');
 const Web3 = require('web3');
 const {interface, bytecode} = require('./compile');

 const provider = new HDWalletProvider('task rule poem sight obey diet install jewel sibling virus increase pen'
   ,  'https://rinkeby.infura.io/v3/79450ba4c0264207bc6d54cdcd57ba67'
 );

 const web3 = new Web3(provider);

 const deploy = async () => {
   const accounts = await web3.eth.getAccounts();

   console.log('Attempting to deploy from accounts', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({data:bytecode, arguments: ['Approved pay']})
   .send({gas:'1000000', from: accounts[0]});

   console.log('Proll Contract deployed to', result.options.address);
   //0x3B7E43298673cF3e65412B3e7378713De4dba8F2

 };

 deploy();
