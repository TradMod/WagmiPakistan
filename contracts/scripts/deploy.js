const {ethers} = require("hardhat");

async function main() {
  const wagmiPakistanContract = await ethers.getContractFactory("WagmiPakistan");
  const deployedWagmiPakistan = await wagmiPakistanContract.deploy();
  await deployedWagmiPakistan.deployed();
  console.log(`WagmiPakistan Contract Address: ${deployedWagmiPakistan.address}`);

  // if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations & Verifying...")
    await deployedWagmiPakistan.deployTransaction.wait(5)
    await verify(deployedWagmiPakistan.address, [])
  // } else {
  //   console.log("Verification Falied");
  // }
}

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
