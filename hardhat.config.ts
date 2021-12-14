import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

import { HardhatUserConfig } from "hardhat/types";

const config: HardhatUserConfig = {
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
  solidity: {
    version: "0.8.4"
  }
};

export default config;