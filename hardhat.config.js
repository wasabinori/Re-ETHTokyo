require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
    networks: {
      hardhat: {
      },
      mumbai: {
        url: process.env.API_URL,
        accounts: [process.env.PRIVATE_KEY],
      },
    }
};
