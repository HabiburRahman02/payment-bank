document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();
    const addNewAmountStr = document.getElementById('field-new-amount').value;
    const addNewAmount = parseFloat(addNewAmountStr)
    const pinNumber = document.getElementById('field-pin-number').value;

    const prevBalanceStr = document.getElementById('prev-balance').innerText;
    const prevBalance = parseFloat(prevBalanceStr);



    if (pinNumber === '1234') {
        console.log('add money to your account');
        const currentBalance = prevBalance + addNewAmount;
       
        document.getElementById('prev-balance').innerText = currentBalance
    }
    else {
        alert('try again');
    }
})