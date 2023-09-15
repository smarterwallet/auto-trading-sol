# AA Wallet Solidity

## Dependence

- Node: v16.x+

## Setup 

### Install

```shell
# commom package
npm install

# install uniswap package
npm install --save-dev @uniswap/v3-core@1.0.2-solc-0.8-simulate
npm install --save-dev git+https://github.com/Uniswap/v3-periphery.git#0.8
```


### Set env

1. Copy config
    ```shell
    cp .env.example .env
    ```
2. modify environment variables
    ```
    ETHERSCAN_API_KEY=ABC123ABC123ABC123ABC123ABC123ABC1
    # your ethereum address private key
    PRIVATE_KEY=0xabc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc1
    ```
   
## Contract Info

1. Mumbai: `0x0987e55f3d11847ef4099dabfb38c6acbd8acfc5`
2. Polygon: ``

## Deploy

### Mumbai Test Network

1. Deploy auto trading
   ```shell
   npm run deploy-autotrading-mumbai
   ```

