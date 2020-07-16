require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stomach response spice modify grace person off tomato'; 
let testAccounts = [
"0x921d6d1ad912036f36fe4f54d0fd59daacae5a8302db959bc90e7ab5cf7ed7ef",
"0xd62eeedd4de4eb59668c3d9b4ad6e92029c45db1f73d25f26a5f043ce50f62a9",
"0x9c38e6d3d1320c37e110fdbb10a9773b7e191918f08b4270e97dfdf8f6cc43bb",
"0xcabc6baf38c2a53e21d663c9a1b8e9ba44fa3d6cec36a9eb37eaef2bf9bc43cd",
"0x3c8d4b5d868bd651e8a1bb0b1290787927fefa8376957955063be6c042163bd6",
"0xebcc4c93606e7538486811beaea7706a59f53d8c1d91933a06933202b414c5fe",
"0x437dbfbe1179e01e216c7f49db1c9853477f4a759104b6f546b714c5b3451755",
"0x2b26ab7fb82572b00fa04e742d1f0c75c5654633d7bfc0420115682e95ef6646",
"0x9d3afbab95a629a07b5a00dba4cf32ff3985bf577add466ef39305c392f1ff2e",
"0xac1df3b466ea5c5e3c52e06050e845901928586dbb363fea62aaf940de49b0dc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
