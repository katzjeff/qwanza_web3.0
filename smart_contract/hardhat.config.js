require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/91ZIlMbK40ljXNViOpWG1BY8A_yWgKc6', //insert url obtained from alchemy
      accounts:['97127ecb49b2f5053a98da0117a8c067709b94d4b496be1bc350a7b7c4592a30']
    }
  }
}
