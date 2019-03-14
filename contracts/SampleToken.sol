pragma solidity ^0.5.0;

import '../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol';

contract SampleToken is ERC20Mintable {

    string public constant name = "Sample Token";
    string public constant symbol = "ST";
    uint8 public constant decimals = 2;

}
