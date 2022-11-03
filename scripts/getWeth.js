const { getNamedAccounts, ethers } = require('hardhat')

const AMOUNT = ethers.utils.parseEther('0.02')

async function getWeth() {
  const { deployer } = await getNamedAccounts()
  console.log(deployer)
  // call the "deposit" function on the weth contract
  // abi :white_check_mark: , contract address
  const iWeth = await ethers.getContractAt(
    'IWeth',
    // '0XC02aaA39b223FE8D0Ae5C4F27eAD9083C756Cc2',
    // '0x994b342dd87fc825f66e51ffa3ef71ad818b6893',
    // '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    'RdiCCKsA6UUDpE1Dbe09LE9xaBciBkp8',
    deployer
  )
  const tx = await iWeth.deposit({ value: AMOUNT })
  await tx.wait(1)
  const wethBalance = await iWeth.balanceOf(deployer)
  // const wethBalance = 0
  console.log(`Got ${wethBalance.toString()} WETH`)
}

module.exports = { getWeth, AMOUNT }
