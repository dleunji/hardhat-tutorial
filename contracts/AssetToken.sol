//SPDX-License-Identifier: Unlicnese
pragma solidity >= 0.8.4;
// import ERC20 contract standard
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AssetToken is ERC20 {
  // Use underbar afterwards to distinguish Solidity and Openzeppelin
  constructor(
    uint256 totalSupply_,
    string memory name_,
    string memory symbol_) ERC20(name_, symbol_) {
      // Send tokens amounted to 'totalSupply_' to msg.sender
      _mint(msg.sender, totalSupply_);
    }
}

