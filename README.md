# A-Blockchain-based-Anti-Fake-Product-System
The increment in the fake products brought the idea for this project.

The objectives of this project are: 
1. To design Anti-Fake Product System using Blockchain. 
2. To store product details and unique code of that product as blocks in the database. 
3. To secure product details.

A simple Decentralised Inventory System using the Ethereum Blockchain, Solidity and the MERN(MongoDB, Express.js, ReactJS, Node.js) stack.

<img src="https://appinventiv.com/wp-content/uploads/sites/1/2017/11/News26thNov.jpg" height="200px" width="280px"/>



## Dependencies
<ul>
  <li>Node.js</li>
  <li>npm</li>
  <li>React.js</li>
  <li>Web3.js</li>
  <li>Ganache-cli</li>
  <li>Truffle</li>
  <li>Solidity</li>
  <li>MongoDB</li>
  <li>Metamask</li>
</ul>


## Getting Started

Change the <DB_USERNAME> and <DB_PASSWORD> of the mongoose.js file in the db sub-folder of database folder. #IMPORTANT

### To deploy the Smart Contract

1. Install Ganache and create a workspace with server port 8545 and add truffle project i.e. truffle-config.js file of antifake sub-folder.
2. Install Truffle npm package globally by running ```npm install -g truffle```.
3. ```cd antifake```
4. Run ```truffle migrate --reset``` from the command line to deploy the smart contract to the blockchain.
5. Download Metamask Chrome extension for the browser to help interaction between the application and the blockchain and change the network server to "localhost 8545".


### To run react development server

```bash
cd antifake
```

```bash
set NODE_OPTIONS=--openssl-legacy-provider
```

```bash
npm start
```

### To run node server

```bash
cd database
```

```bash
npm run dev
```

&copy; 2023 Blockchain based AFPS
