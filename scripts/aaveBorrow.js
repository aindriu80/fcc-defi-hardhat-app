const { getWeth } = require('../scripts/getWeth')
const { getNamedAccounts, ethers } = require('hardhat')

async function main() {
  // the protocol treats everything like an ERC20 token
  await getWeth()
  const { deployer } = await getNamedAccount()
  // abi, address

  // Lending Pool Address Provider : X
  // Lending Pool: Y
  const lendingPool = await getLendingPool(deployer)
  console.log(`lendingPool address ${lendingPool.address}`)
}

async function getLendingPool(account) {
  const lendingPoolAddressesProvider = await ethers.getContractAt(
    'ILendingPoolAddressesProvider',
    'x',
    account
  )
  const lendingPoolAddress = await lendingPoolAddressesProvider.getLendingPool()
  const lendingPool = await ethers.getContractAt('ILendingPool', lendingPoolAddress, account)
  return lendingPool
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
