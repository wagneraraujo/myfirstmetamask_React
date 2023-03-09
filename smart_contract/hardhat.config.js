require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    sepolia: {
      url: 'https://eth-goerli.g.alchemy.com/v2/2anHHdHSN416zTZsYOo-6sIFxh4D5atk',
      accounts: [
        '3e007b77cd5fae3eeba040aa4f6ec29abd6f1dc26af5d80816e404c81924badb'
      ],

    },

  },

};
