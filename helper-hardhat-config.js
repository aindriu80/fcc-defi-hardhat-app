const { ethers } = require('hardhat')

const networkConfig = {
  default: {
    name: 'hardhat',
    chainId: '31337',
    forking: {
      url: MAINNET_RPC_URL,
    },
  },
  31337: {
    name: 'localhost',
    subscriptionId: '588',
    keepersUpdateInterval: '30',
  },
  4: {
    name: 'goerli',
    subscriptionId: '4120',
    keepersUpdateInterval: '30',
    vrfCoordinatorV2: '0x271682DEB8C4E0901D1a1550aD2e64D568E69909',
  },
  1: {
    name: 'mainnet',
    keepersUpdateInterval: '30',
  },
  42: {
    name: 'kovan',
    ethUsdPriceFeed: '0x9326BFA02ADD2366b30bacB125260Af641031331',
    wethToken: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    lendingPoolAddressesProvider: '0x88757f2f99175387aB4C6a4b3067c77A695b0349',
    daiEthPriceFeed: '0x22B58f1EbEDfCA50feF632bD73368b2FdA96D541',
    daiToken: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
  },
}

const developmentChains = ['hardhat', 'localhost']
module.exports = {
  networkConfig,
  developmentChains,
}
