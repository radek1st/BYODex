var BYODex = artifacts.require("BYODex");
var SampleToken = artifacts.require("SampleToken");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(SampleToken)
        .then(function(){
            return SampleToken.deployed();
        })
        .then(function(tokenInstance){
            deployer.deploy(BYODex, tokenInstance.address, 100, 150)
                .then(function(){
                    return BYODex.deployed();
                })
                .then(function(exchangeInstance){
                    tokenInstance.mint(exchangeInstance.address, 100000000);
                })
        });
};
