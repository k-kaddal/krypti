require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/saYZCoE-5yp6Fx4HXeXQR4bNIY0Wz6ld",
      accounts: [
        "2c5666d7861086ff7451dfb2cdbeb95e3e726dcb940dccda04057f6651fcbb2d",
      ],
    },
  },
};
