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
