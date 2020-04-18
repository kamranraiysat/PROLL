import web3 from 'web3';

let web3;

if(typeof window !== 'undfined' && typeof window.web3 !== 'undefined'){
// we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else{
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/79450ba4c0264207bc6d54cdcd57ba67'
  );
web3 = new Web3(provider);
}

export default web3;
