import hre from "hardhat";
import {formatEther, parseEther} from "viem"
// npx hardhat run ./scripts/deploy.ts
async function main() {

  const token = await hre.viem.deployContract('ERC20Token', ['0x2459fD68B75E9f2f90d54042b2Fc3777Bb499818', 'Bitcoin', 'BTC']);
  const tokenFunctions = await hre.viem.getContractAt("ERC20Token", token.address);

  // tokenFunctions.write.mint(['0x2459fD68B75E9f2f90d54042b2Fc3777Bb499818', parseEther('100')])

  console.log(
    `token.address: ${token.address}\n`,
    `symbol: ${await tokenFunctions.read.symbol()}\n`,
    `name: ${await tokenFunctions.read.name()}\n`,
    `balanceOf: ${await tokenFunctions.read.balanceOf(['0x2459fD68B75E9f2f90d54042b2Fc3777Bb499818'])} \n`,
    `owner: ${await tokenFunctions.read.owner()}\n`,
    `paused: ${await tokenFunctions.read.paused()}\n`,
    `totalSupply: ${formatEther(await tokenFunctions.read.totalSupply())}\n`,
    `decimals: ${await tokenFunctions.read.decimals()}\n`,
    `allowance: ${await tokenFunctions.read.allowance(['0x2459fD68B75E9f2f90d54042b2Fc3777Bb499818', '0x2459fD68B75E9f2f90d54042b2Fc3777Bb499818'])}\n`,
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
