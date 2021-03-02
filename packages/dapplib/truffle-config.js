require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'include clinic tail sugar blame birth spike essay grid neck fox two'; 
let testAccounts = [
"0xcb887f2414ceb9a60c77ef4e598a17e6868cc006ad4fd1712401418ba7dd2c89",
"0x75dbeec06f7089b4c0b8d4ec01fc57654303710a6c9fa51dd577bfbe674290ae",
"0xce11d74c1956178a0e9e37e960711391e0f39ffc115016d10eb7408a95ff0602",
"0x0c46bbff809e8f942108be5f5acfd53b9f14e64f5e82134a6bd6eaff717b4ba0",
"0x7be523a4f52370f072d0bb41bf5254b4390f167293c30c42c24b23ccd72bb400",
"0xc062ffa42a9ebba968aa8ba8994a8f4e2220b6ae12e48b8629ebfa70800e9060",
"0x3aee35dbda07ecf6d71fc246be8f6493d966c43a6046499944d2029ed494b2ae",
"0x9b8612a06f3a965a6f02f793f0b9319719dae55afa60445cc55638717e1a258c",
"0x020575925d6075eb968ec6cacb58473519b5892c66a96e657396cecd340aa069",
"0x86a5e63cd01f3dab87d87dcd4ec0531750e9c6947ae60865b21b983a3d258c17"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

