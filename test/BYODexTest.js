const BYODex = artifacts.require("./BYODex.sol");
const SampleToken = artifacts.require("./SampleToken.sol");

let exchange;
let token;

let owner;
let newOwner;
let user1;
let user2;

let buyRate = 500;
let sellRate = 1000;

let oneEther = web3.utils.toWei("1", 'ether');
let twoEthers = web3.utils.toWei("2", 'ether');

let fiveHundredTokens = 500 * 100;
let oneThousandTokens = 1000 * 100;
let twoThousandTokens = 2000 * 100;

contract('BYODexTest', (accounts) => {

    beforeEach(async () => {
        owner = accounts[0];
        user1 = accounts[1];
        user2 = accounts[2];
        newOwner = accounts[3];

        token = await SampleToken.new();
        exchange = await BYODex.new(token.address, buyRate, sellRate);

        await token.mint(user1, oneThousandTokens);
        await token.mint(exchange.address, oneThousandTokens);
        await web3.eth.sendTransaction({from: owner, to: exchange.address, value: twoEthers});

    });

    function expectRevert(e, msg) {
        assert(e.message.search('revert') >= 0, msg);
    }

    it("Initial values are correct", async () => {
        assert(oneThousandTokens == (await token.balanceOf.call(user1)).toNumber(), "user has correct amount of tokens");
        assert(oneThousandTokens == (await token.balanceOf.call(exchange.address)).toNumber(), "exchange has correct amount of tokens");
        assert(oneThousandTokens == (await exchange.tokenBalance.call()).toNumber(), "convenience method for token balance works");
        assert(twoEthers == await web3.eth.getBalance(exchange.address), "exchange has correct amount of ether");
    });

    it("Buying tokens works", async () => {
        await exchange.buyTokens(buyRate, {value: oneEther, from: user2});
        assert(fiveHundredTokens == (await token.balanceOf.call(user2)).toNumber(), "user has correct amount of tokens");
    });

    it("Selling tokens works", async () => {
        //first need to approve the exchange to be able to transfer the tokens
        await token.approve(exchange.address, oneThousandTokens, {from: user1});

        // then trigger the sell function
        await exchange.sellTokens(sellRate, oneThousandTokens, {from: user1});

        assert(0 == (await token.balanceOf.call(user1)).toNumber(), "user sold all tokens");
        assert(twoThousandTokens == (await token.balanceOf.call(exchange.address)).toNumber(), "exchange has correct amount of tokens");
        assert(oneEther == await web3.eth.getBalance(exchange.address), "exchange has correct amount of ether");
    });

    it("Withdrawing tokens works", async () => {
        try {
            await exchange.withdrawTokens(oneThousandTokens, {from: newOwner});
            assert(false);
        } catch (e) {
            expectRevert(e, "cannot withdraw if now owner");
        }

        await exchange.withdrawTokens(oneThousandTokens, {from: owner});
        assert(0 == (await token.balanceOf.call(exchange.address)).toNumber(), "exchange has no tokens");
        assert(oneThousandTokens == (await token.balanceOf.call(owner)).toNumber(), "user has correct amount of tokens");
    });

    it("Withdrawing ether works", async () => {
        try {
            await exchange.withdrawEther(oneEther, {from: newOwner});
            assert(false);
        } catch (e) {
            expectRevert(e, "cannot withdraw if now owner");
        }

        await exchange.withdrawEther(oneEther, {from: owner});
        assert(oneEther == await web3.eth.getBalance(exchange.address), "exchange has one ether");
        await exchange.withdrawEther(oneEther, {from: owner});
        assert(0 == await web3.eth.getBalance(exchange.address), "exchange has no ether");
    });

    it("Managing owners works", async () => {
        assert(await exchange.owners.call(owner), "current owner is valid");
        assert(1 == await exchange.numberOfOwners.call(), "only one owner so far");

        assert(! await exchange.owners.call(newOwner), "newOwner is not yet owner");
        await exchange.addOwner(newOwner, {from: owner});
        assert(await exchange.owners.call(newOwner), "newOwner became owner");
        assert(2 == await exchange.numberOfOwners.call(), "now we have two owners");

        await exchange.removeOwner(owner, {from: newOwner});
        assert(! await exchange.owners.call(owner), "owner is no longer the owner");
        assert(1 == await exchange.numberOfOwners.call(), "back to one owner");

        try {
            await exchange.removeOwner(newOwner, {from: newOwner});
            assert(false);
        } catch (e) {
            expectRevert(e, "cannot remove the last owner");
        }
        assert(1 == await exchange.numberOfOwners.call(), "still one owner");

        try {
            await exchange.addOwner(owner, {from: owner});
            assert(false);
        } catch (e) {
            expectRevert(e, "no longer owner cannot set new owner");
        }
    });

    it("Pausing and starting trading works", async () => {
        assert(! await exchange.isTradingPaused.call(), "it shouldn't be paused yet");
        try {
            await exchange.pauseTrading({from: newOwner});
            assert(false);
        } catch (e) {
            expectRevert(e, "cannot pause if now owner");
        }
        assert(! await exchange.isTradingPaused.call(), "it shouldn't be paused yet");

        await exchange.pauseTrading({from: owner});
        assert(await exchange.isTradingPaused.call(), "should be paused now");

        try {
            await exchange.resumeTrading({from: newOwner});
            assert(false);
        } catch (e) {
            expectRevert(e, "cannot resume if now owner");
        }

        await exchange.resumeTrading({from: owner});
        assert(!await exchange.isTradingPaused.call(), "it shouldn't be paused now");
    });
    //
    // it("Only owners can update rates", async () => {
    //
    // });
    //


});
