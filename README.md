# ERC-20 Token Contract
standard erc20 token ( solidity contract + viem )

This repository contains an implementation of an ERC-20 token contract on the Ethereum blockchain. The ERC-20 standard defines a set of rules and functions that a token contract must adhere to, enabling seamless integration and interoperability with other Ethereum-based applications.

## Features
- Token Name: The contract supports a customizable token name.
- Symbol: The contract allows setting a unique symbol for the token.
- Decimals: The token can be configured with a specific number of decimal places for precision.
- Total Supply: The contract tracks and displays the total supply of tokens.
- Balance Tracking: Users can query their token balances at any given address.
- Transfer Function: Tokens can be transferred between addresses securely and efficiently.
- Approval Mechanism: The contract implements an approval mechanism for authorized token transfers on behalf of another address.
- Events: The contract emits events for important token transfer and approval actions.

## Usage
- Clone the repository and navigate to the project directory.
- Install the required dependencies using npm install.
- Compile the smart contract by running npx hardhat compile.
- Customize the contract parameters, such as the token name, symbol, and decimal places, in Token.sol.
- Deploy the contract to a desired Ethereum network using npx hardhat run scripts/deploy.js --network <network>.
- Interact with the deployed contract using the provided JavaScript API or via transaction calls.

## Testing
- Ensure the contract is compiled (npx hardhat compile) and a test network or local node is running.
- Run the test suite using npx hardhat test.

## Contributions
Contributions, bug reports, and feature requests are welcome. Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.
Please note that this description is a starting point, and you can customize it further based on your specific ERC-20 contract implementation and project requirements.
