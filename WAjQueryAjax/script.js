function setBitcoin() {    
    $.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Ceur%2Cczk', function(data){
        var dt = new Date(); var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

        $('#bitcoinName').html(Object.keys(data)[0]);
        $('#bitcoinUsd').html(data["bitcoin"]["usd"]);
        $('#bitcoinEur').html(data["bitcoin"]["eur"]);
        $('#bitcoinCzk').html(data["bitcoin"]["czk"]);
        $('#bitcoinTime').html(time);
        console.log("Currency = "+Object.keys(data)[0] +"\nUSD price = "+data["bitcoin"]["usd"]+" $\nEUR price = "+data["bitcoin"]["eur"]+" €\nCZK price = "+data["bitcoin"]["czk"]+" KČ");
    });
};

function setEthereum() {    
    $.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd%2Ceur%2Cczk', function(data){
        var dt = new Date(); var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

        $('#ethereumName').html(Object.keys(data)[0]);
        $('#ethereumUsd').html(data["ethereum"]["usd"]);
        $('#ethereumEur').html(data["ethereum"]["eur"]);
        $('#ethereumCzk').html(data["ethereum"]["czk"]);
        $('#ethereumTime').html(time);
        console.log("Currency = "+Object.keys(data)[0] +"\nUSD price = "+data["ethereum"]["usd"]+" $\nEUR price = "+data["ethereum"]["eur"]+" €\nCZK price = "+data["ethereum"]["czk"]+" KČ");
    });
};

function setCardano() {    
    $.get('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd%2Ceur%2Cczk', function(data){
        var dt = new Date(); var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

        $('#cardanoName').html(Object.keys(data)[0]);
        $('#cardanoUsd').html(data["cardano"]["usd"]);
        $('#cardanoEur').html(data["cardano"]["eur"]);
        $('#cardanoCzk').html(data["cardano"]["czk"]);
        $('#cardanoTime').html(time);
        console.log("Currency = "+Object.keys(data)[0] +"\nUSD price = "+data["cardano"]["usd"]+" $\nEUR price = "+data["cardano"]["eur"]+" €\nCZK price = "+data["cardano"]["czk"]+" KČ");
    });
};

function setDogecoin() {    
    $.get('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd%2Ceur%2Cczk', function(data){
        var dt = new Date(); var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

        $('#dogecoinName').html(Object.keys(data)[0]);
        $('#dogecoinUsd').html(data["dogecoin"]["usd"]);
        $('#dogecoinEur').html(data["dogecoin"]["eur"]);
        $('#dogecoinCzk').html(data["dogecoin"]["czk"]);
        $('#dogecoinTime').html(time);
        console.log("Currency = "+Object.keys(data)[0] +"\nUSD price = "+data["dogecoin"]["usd"]+" $\nEUR price = "+data["dogecoin"]["eur"]+" €\nCZK price = "+data["dogecoin"]["czk"]+" KČ");
    });
};

$( document ).ready(function() {     
    setBitcoin();
    setEthereum();
    setCardano();
    setDogecoin();
    setTimeout(function () {         
        location.reload(true);      
     }, 10000);
});

$('#bitcoin').click(function() {
    setBitcoin();
});

$('#ethereum').click(function() {
    setEthereum();
});

$('#cardano').click(function() {
    setCardano();
});

$('#dogecoin').click(function() {
    setDogecoin();
});
