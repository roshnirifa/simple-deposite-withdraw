// deposite button

document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeInputText = depositeInput.value;
    const depositeInputTextconvert = parseFloat(depositeInputText);



    depositeInput.value = '';

    // get current deposite amount
    const showDeposite = document.getElementById('show-deposite');
    const showDepositeText = showDeposite.innerText;
    const showDepositeTextConvert = parseFloat(showDepositeText);
    showDeposite.innerText = showDepositeTextConvert;


    const depositeTotal = depositeInputTextconvert + showDepositeTextConvert;
    showDeposite.innerText = depositeTotal;

    // deposite + balnace increase

    const totalBalance = document.getElementById('total-balnace');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceTextConvert = parseFloat(totalBalanceText);
    const newBalanceDeposite = depositeInputTextconvert + totalBalanceTextConvert;
    totalBalance.innerText = newBalanceDeposite;




});

// withdraw button
document.getElementById('withraw-btn').addEventListener('click', function () {
    const whitdrawInput = document.getElementById('withdraw-input');
    const whitdrawInputText = whitdrawInput.value;
    const whitdrawInputTextConvert = parseFloat(whitdrawInputText);
    whitdrawInput.value = '';


    // get the withdraw amount
    const currentWithdraw = document.getElementById('current-withdraw');
    const currentWithdrawText = currentWithdraw.innerText;
    const currentWithdrawTextConvert = parseFloat(currentWithdrawText);

    currentWithdraw.innerText = whitdrawInputTextConvert + currentWithdrawTextConvert;


    // withdraw and decrease balance
    const totalBalance = document.getElementById('total-balnace');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceTextConvert = parseFloat(totalBalanceText);
    const newBalancewithdraw = totalBalanceTextConvert - whitdrawInputTextConvert;
    totalBalance.innerText = newBalancewithdraw;



});


