import web3 from './web3.js;
const address = '0x3B7E43298673cF3e65412B3e7378713De4dba8F2';
const abi = [{
  "constant": false,
  "inputs": [{
    "name": "Approved",
    "type": "string"
  }],
  "name": "Approve",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "message",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "name": "pay",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}];

export default new web3.eth.Contract(abi, address);
