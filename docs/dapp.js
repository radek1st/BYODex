DApp = {
    tokenContract: null,
    tokenAbi: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
    exchangeContract: null,
    exchangeAbi: [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"owners","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sellRate","type":"uint256"}],"name":"updateSellRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isBuyingPaused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"startTrading","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAmount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_expectedBuyRate","type":"uint256"}],"name":"buyTokens","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_ethAmount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_buyRate","type":"uint256"}],"name":"updateBuyRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"stopTrading","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isSellingPaused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stopBuying","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"startSelling","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"stopSelling","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"startBuying","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_expectedSellRate","type":"uint256"},{"name":"_tokenAmount","type":"uint256"}],"name":"sellTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"_buyRate","type":"uint256"},{"name":"_sellRate","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"x","type":"uint256"},{"indexed":false,"name":"y","type":"uint256"}],"name":"Debug","type":"event"}],
    emptyAddress: '0x0000000000000000000000000000000000000000',
    tokenDecimalsMultiplier: 100,

    // Local
    //exchangeAddress: "0x8A5769bE1A538aF4259f8687c73bd03a26C1A78a",
    //tokenAddress: "0xCF221b49F3CB159bE9Cbf09401FD515Bd0DC4003",

    // Rinkeby
    exchangeAddress: "0x26d92b23fe5be313bcf4d07ab3c8e4e46c16be1e",
    tokenAddress: "0xe969b3e38a031e3d2aad3848b25a6fcc2e3dc2c2",

    init: function() {
        console.log('[x] Initializing DApp.');
        this.initWeb3();
    },

    initWeb3: function() {
        window.addEventListener('load', () => {
            // If web3 is not injected
            if (typeof web3 === 'undefined') {
                // Listen for provider injection
                window.addEventListener('message', ({ data }) => {
                    if (data && data.type && data.type === 'ETHEREUM_PROVIDER_SUCCESS') {
                        // Use injected provider
                        web3 = new Web3(ethereum);
                        console.log('[x] web3 object initialized.');
                        DApp.initContracts();
                    } else {
                        // No web3 instance available show a popup
                        $('#metamaskModal').modal('show');
                    }
                });
                // Request provider
                window.postMessage({ type: 'ETHEREUM_PROVIDER_REQUEST' }, '*');
            }
            // If web3 is injected use it's provider
            else {
                web3 = new Web3(web3.currentProvider);
                console.log('[x] web3 object initialized.');
                DApp.initContracts();
            }
        });
    },

    initContracts: function() {
        DApp.exchangeContract = new web3.eth.Contract(DApp.exchangeAbi, DApp.exchangeAddress);
        console.log('[x] Exchange contract initialized.');
        DApp.tokenContract = new web3.eth.Contract(DApp.tokenAbi, DApp.tokenAddress);
        console.log('[x] Token contract initialized.');

        DApp.loadAccount();
    },

    loadAccount: function() {
        web3.eth.getAccounts(function(error, accounts) {
            if(error) {
                console.error("[x] Error loading accounts", error);
            } else {
                DApp.currentAccount = accounts[0];
                console.log("[x] Using account", DApp.currentAccount);

                DApp.initActions();
                DApp.initFrontend();
            }
        });
    },

    initActions: function() {
        $("#etherIn").on("paste keyup", function() {
            $("#tokenOut").val($("#etherIn").val() * $("#buyRate").val());
        });
        $("#tokenOut").on("paste keyup", function() {
            $("#etherIn").val($("#tokenOut").val() / $("#buyRate").val());
        });
        $("#tokenIn").on("paste keyup", function() {
            $("#etherOut").val($("#tokenIn").val() / $("#sellRate").val());
        });
        $("#etherOut").on("paste keyup", function() {
            $("#tokenIn").val($("#etherOut").val() * $("#sellRate").val());
        });
        $("#buy-tokens-button").click(function(){
            let amount = web3.utils.toWei($("#etherIn").val().toString(), "ether");
            let rate =  $("#buyRate").val();
            console.log("rate", rate);
            let tx = {value: amount, from: DApp.currentAccount};
            console.log("tx", tx);
            DApp.exchangeContract.methods.buyTokens(rate).send(tx, function(error, res) {
                if(error) {
                    console.log(error);
                } else {
                    console.log("res", res);
                    // /$('#userTokenBalance').val(web3.utils.fromWei(balance, "ether"));
                }
            });
        });
        $("#approve-tokens-button").click(function(){
            let amount = $("#tokenIn").val() * DApp.tokenDecimalsMultiplier;
            DApp.tokenContract.methods.approve(DApp.exchangeAddress, amount).send({from: DApp.currentAccount}, function(error, res) {
                if(error) {
                    console.log("approve", error);
                } else {
                    console.log("approve", res);
                }
            });
        });
        $("#sell-tokens-button").click(function(){
            let amount = $("#tokenIn").val() * DApp.tokenDecimalsMultiplier;
            let rate =  $("#sellRate").val();
            DApp.exchangeContract.methods.sellTokens(rate, amount).send({from: DApp.currentAccount}, function(error, res) {
                if(error) {
                    console.log("sell", error);
                } else {
                    console.log("sell", res);
                }
            });
        });
    },

    updateEtherBalance: function(){
        web3.eth.getBalance(DApp.currentAccount, function(error, ethBalance) {
            if (error) {
                // handle error
                console.log("Couldn't get user ether balance: ", error);
            } else {
                console.log("user Eth balance", ethBalance);
                $('#userEtherBalance').val(web3.utils.fromWei(ethBalance.toString(), "ether"));
            }
        });
        web3.eth.getBalance(DApp.exchangeAddress, function(error, ethBalance) {
            if (error) {
                // handle error
                console.log("Couldn't get exchange ether balance: ", error);
            } else {
                console.log("EX Eth balance", ethBalance);
                $('#exchangeEtherBalance').val(web3.utils.fromWei(ethBalance.toString(), "ether"));
            }
        });
    },

    updateTokenBalance: function(){
        DApp.tokenContract.methods.balanceOf(DApp.currentAccount).call(function(error, balance) {
            if(error) {
                console.log(error);
            } else {
                console.log("user token balance", balance);
                $('#userTokenBalance').val(balance/DApp.tokenDecimalsMultiplier);
            }
        });
        DApp.tokenContract.methods.allowance(DApp.currentAccount, DApp.exchangeAddress).call(function(error, balance) {
            if(error) {
                console.log(error);
            } else {
                console.log("user token approved", balance);
                $('#userTokenApproved').val(balance/DApp.tokenDecimalsMultiplier);
            }
        });
        DApp.tokenContract.methods.balanceOf(DApp.exchangeAddress).call(function(error, balance) {
            if(error) {
                console.log(error);
            } else {
                console.log("ex token balance", balance);
                $('#exchangeTokenBalance').val(balance/DApp.tokenDecimalsMultiplier);
            }
        });
    },

    updateRates: function(){
        DApp.exchangeContract.methods.buyRate().call(function(error, rate) {
            if(error) {
                console.log(error);
            } else {
                $('#buyRate').val(rate);
            }
        });
        DApp.exchangeContract.methods.sellRate().call(function(error, rate) {
            if(error) {
                console.log(error);
            } else {
                $('#sellRate').val(rate);
            }
        });
    },

    initFrontend: function(){
        $('#userWallet').val(DApp.currentAccount);
        $('#exchangeAddress').val(DApp.exchangeAddress);
        DApp.updateEtherBalance();
        DApp.updateTokenBalance();
        DApp.updateRates();
    }
}

$(function() {
    DApp.init();
});
