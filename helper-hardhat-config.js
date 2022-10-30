const { ethers } = require('hardhat')

const networkConfig = {
  default: {
    name: 'hardhat',
    keepersUpdateInterval: '30',
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
}

const developmentChains = ['hardhat', 'localhost']
module.exports = {
  networkConfig,
  developmentChains,
}
