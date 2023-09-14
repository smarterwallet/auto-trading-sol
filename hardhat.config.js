require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-solhint");
require('@gnosis.pm/safe-contracts');
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-contract-sizer");
require("hardhat-interface-generator");
require('hardhat-abi-exporter');

const { task } = require("hardhat/config");

// const PRIVATE_KEY = process.env.PRIVATE_KEY;
const withOptimizations = true;
const defaultNetwork = "hardhat"; // "hardhat" for tests

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.0",
                settings: {
                    optimizer: {
                        enabled: withOptimizations, runs: 200
                    }
                }
            },
            {
                version: "0.8.7",
                settings: {
                    optimizer: {
                        enabled: withOptimizations, runs: 200
                    }
                }
            },
            {
                version: "0.8.12",
                settings: {
                    optimizer: {
                        enabled: withOptimizations, runs: 200
                    }
                }
            },
            {
                version: "0.4.14",
                settings: {
                    optimizer: {
                        enabled: withOptimizations, runs: 200
                    }
                }
            },
            {
                version: "0.4.24",
                settings: {
                    optimizer: {
                        enabled: withOptimizations, runs: 200
                    }
                }
            },
        ]
    },
    defaultNetwork: defaultNetwork,
    networks: {
        hardhat: {
            blockGasLimit: 10000000, allowUnlimitedContractSize: !withOptimizations
        }, goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/qfu3KPP1LckyT991B6o5SM9eK73EY2uu',
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
        }, sepolia: {
            url: 'https://eth-sepolia.g.alchemy.com/v2/EmsfiRZ34lwj9uxyHC1lXktrBY7ivqBC',
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
        }, ethereum: {
            url: 'https://eth-mainnet.g.alchemy.com/v2/GlAFz_VOPK6XUapGQx5WkLNguXulcdMJ',
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
        }, mumbai: {
            url: 'https://polygon-mumbai.g.alchemy.com/v2/GmqREz-eRvN6r_lVW8aTY3VipXvn3qKL',
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
        }, polygon: {
            url: 'https://polygon-mainnet.g.alchemy.com/v2/DM_dA_cDWvI6a2IfGOe0RhDVWyXhvmYN',
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
        }
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined, currency: "USD"
    },
    etherscan: {
        apiKey: process.env.SCAN_API_KEY
    },
    contractSizer: {
        alphaSort: false, disambiguatePaths: false, runOnCompile: true, strict: false
    },
    mocha: {
        timeout: 9999999999
    }
};