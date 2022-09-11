const {ethers} = require("hardhat");

async function main() {
  const wagmiPakistanContract = await ethers.getContractFactory("WagmiPakistan");

  const deployedWagmiPakistan = await wagmiPakistanContract.deploy();

  await deployedWagmiPakistan.deployed();

  console.log(`WagmiPakistan Contract Address: ${deployedWagmiPakistan.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
