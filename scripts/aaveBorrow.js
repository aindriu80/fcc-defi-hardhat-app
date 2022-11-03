const { getWeth, AMOUNT } = require('../scripts/getWeth')
const { getNamedAccounts, ethers } = require('hardhat')

async function main() {
  // the protocol treats everything like an ERC20 token
  await getWeth()
  const { deployer } = await getNamedAccounts()
  // abi, address

  // Lending Pool Address Provider : X
  // Lending Pool: Y
  const lendingPool = await getLendingPool(deployer)
  console.log(`lendingPool address ${lendingPool.address}`)

  // deposit
  const wethTokenAddress = 'RdiCCKsA6UUDpE1Dbe09LE9xaBciBkp8'
  // approve
  await approveErc20(wethTokenAddress, lendingPool.address, deployer)
  console.log('Depositing....')
  await lendingPool.deposit(wethTokenAddress, AMOUNT, deployer, 0)
  console.log('deposited...')
}

async function getLendingPool(account) {
  const lendingPoolAddressesProvider = await ethers.getContractAt(
    'ILendingPoolAddressesProvider',
    // '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    account
  )
  const lendingPoolAddress = await lendingPoolAddressesProvider.getLendingPool()
  const lendingPool = await ethers.getContractAt('ILendingPool', lendingPoolAddress, account)
  const tx = await erc20Token.approve(spenderAddress, amountToSpend)
  await tx.wait(1)
  console.log('Approved')
  return lendingPool
}

async function approveErc20(erc20Address, spenderAddress, amountToSpend, account) {
  const erc20Token = await ethers.getContract('IERC20', erc20Address, account)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
