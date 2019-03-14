pragma solidity ^0.5.0;

import "./SampleToken.sol";
import "./MultiOwnable.sol";

contract BYODex is MultiOwnable {
    using SafeMath for uint256;

    //TODO:
    //events

    SampleToken public token;
    //how many tokens for one ether, e.g. 900
    uint256 public buyRate;
    //how many tokens for one ether, e.g. 1000
    uint256 public sellRate;
    bool public isTradingPaused;

    constructor(SampleToken _token, uint256 _buyRate, uint256 _sellRate) public {
        require(_buyRate < _sellRate, "buyRate should be smaller then sellRate");
        token = _token;
        buyRate = _buyRate;
        sellRate = _sellRate;
        isTradingPaused = false;
    }

    function () external payable {
        //to allow ether deposits
        //event?
    }

    function buyTokens(uint256 _expectedBuyRate) public payable {
        require(!isTradingPaused, "trading is paused");
        //to prevent unexpected changes of rate
        require(_expectedBuyRate == buyRate, "the buyRate is different from expected");
        require(msg.value > 0, "must be sending non zero eth value");
        uint256 totalTokens = msg.value.mul(buyRate).mul(10**uint256(token.decimals())).div(10**uint256(18));
        require(token.transfer(msg.sender, totalTokens), "failed to transfer tokens to user");
    }

    //needs approval
    function sellTokens(uint256 _expectedSellRate, uint256 _tokenAmount) public {
        require(!isTradingPaused, "trading is paused");
        //to prevent unexpected changes of rate
        require(_expectedSellRate == sellRate, "the sellRate is different from expected");
        require(token.transferFrom(msg.sender, address(this), _tokenAmount), "could not transfer tokens, no allowance?");
        uint256 totalEth = _tokenAmount.mul(10**uint256(18)).div(10**uint256(token.decimals())).div(sellRate);
        msg.sender.transfer(totalEth);
    }

    function updateRates(uint256 _buyRate, uint256 _sellRate) public anyOwner {
        require(_buyRate <= _sellRate, "buyRate should not be greater then sellRate");
        buyRate = _buyRate;
        sellRate = _sellRate;
    }

    function withdrawTokens(uint256 _tokenAmount) public anyOwner {
        require(token.transfer(msg.sender, _tokenAmount), "token withdrawal failed");
    }

    function withdrawEther(uint256 _ethAmount) public anyOwner {
        msg.sender.transfer(_ethAmount);
    }

    function pauseTrading() public anyOwner {
        require(!isTradingPaused, "trading has been paused already");
        isTradingPaused = true;
    }

    function resumeTrading() public anyOwner {
        require(isTradingPaused, "trading has resumed already");
        isTradingPaused = false;
    }

    //convenience function, checks the current token balance of this exchange instance
    function tokenBalance() external view returns (uint256) {
        return token.balanceOf(address(this));
    }
}
