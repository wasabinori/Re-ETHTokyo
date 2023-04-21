// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const CA = await hre.ethers.getContractFactory("PrivateContractAccount");
  const ca = await CA.deploy();
  await ca.deployed();

  const CA2 = await hre.ethers.getContractFactory("PubricContractAccount");
  const ca2 = await CA2.deploy();
  await ca2.deployed();

  const CF = await hre.ethers.getContractFactory("ContractAccount_Factory");
  const cf = await CF.deploy();
  await cf.deployed();


  console.log(ca.address)
  console.log(ca2.address)
  console.log(cf.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
