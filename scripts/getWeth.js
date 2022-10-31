const { getNamedAccounts, ethers } = require('hardhat')

const AMOUNT = ethers.utils.parseEther('0.02')
async function getWeth() {
  const { deployer } = await getNamedAccounts()
  // call the "deposit" function on the weth contract
  // abi :white_check_mark: , contract address
  const iWeth = await ethers.getContractAt('IWeth', 'x', deployer)
  const tx = await iWeth.deposit({ value: AMOUNT })
  await tx.wait(1)
  const webBalance = await iWeth.balanceOf(deployer)
  console.log(`Got ${wethBalance.toString()}WETH`)
}

module.exports = { getWeth }
