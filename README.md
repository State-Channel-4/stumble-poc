We are creating a POC that allows users to discover new and interesting content in a randomized fashion, similar to the early version of the website StumbleUpon.

One of the key features of the platform is the use of state channels, which allow for fast, low-cost interactions between users and the platform without the need for every transaction to be processed on the Ethereum blockchain. By using state channels, we are hoping to solve common online incentive problems, such as ensuring that users are rewarded for contributing high-quality content and penalizing those who engage in undesirable behaviors.

All in all, this POC is a decentralized platform that allows for discovery of random content using ethereum state channel and smart contract based incentives for the users. The platform aims to provide a seamless, enjoyable experience for users and create a community that values high-quality content.

# StumbleUpon POC

This project demonstrates a basic implementation of stumbleupon. We are trying to use state channel technique.

Try running some of the following tasks:

### how to run

```shell
npm install yarn
yarn install package.json
yarn hardhat node
yarn hardhat run scripts/deploy.js --network localhost
```

from the last command
`yarn hardhat run scripts/deploy.js --network localhost`
you will get following output

```
Deploying contract...
Deployed contract to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Done in 1.26s.
```

copy the contract address and put it in constants.js (contractAddress)

You should have metamask extension too
