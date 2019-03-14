pragma solidity ^0.5.0;

contract MultiOwnable {

    modifier anyOwner () {
        require (owners[msg.sender] == true);
        _;
    }

    mapping (address => bool) public owners;
    uint256 public numberOfOwners;

    constructor () public {
        owners[msg.sender] = true;
        numberOfOwners = 1;
    }

    function addOwner (address _owner) anyOwner public {
        require(_owner != address(0), "should be a valid owner");
        owners[_owner] = true;
        numberOfOwners += 1;
    }

    function removeOwner (address _owner) anyOwner public {
        require(numberOfOwners > 1, "must keep at least one owner");
        owners[_owner] = false;
        numberOfOwners -= 1;
    }
}
