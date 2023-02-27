// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// imports
const { ethers, run, network } = require("hardhat");

// async main
async function main() {
  const UrlContractFactory = await ethers.getContractFactory("UrlContract");
  console.log("Deploying contract...");
  const UrlContract = await UrlContractFactory.deploy();
  await UrlContract.deployed();
  console.log(`Deployed contract to: ${UrlContract.address}`);
  // what happens when we deploy to our hardhat network?
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...");
    await UrlContract.deployTransaction.wait(6);
    await verify(UrlContract.address, []);
  }
}

// async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
};

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
