module.exports = {
    solidity: {
      version: '0.8.9',
      defaultNetwork: 'goerli',
      networks: {
        hardhat: {},
        goerli: {
          url: 'https://rpc.ankr.com/eth_goerli',
          accounts: [`0xd54e714bae4d0158d2539189e8fc5972122bd1a9a28c13d883cdfcbe9a3d34a4`]
        }
      },
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  };