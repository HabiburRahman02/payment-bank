document.getElementById('btn-cash-out').addEventListener('click', function (e) {
    e.preventDefault();
    const cashOutAmountStr = document.getElementById('field-cash-out-amount').value;
    const cashOutAmount = parseFloat(cashOutAmountStr);
    const pinNumber = document.getElementById('field-cash-out-pin').value;
    if (pinNumber === '1234') {
        const prevBalanceStr = document.getElementById('prev-balance').innerText;
        const prevBalance = parseFloat(prevBalanceStr);

        const newBalance = prevBalance - cashOutAmount;
        document.getElementById('prev-balance').innerText = newBalance

    }
    else {
        alert('Something is wrong please try again');
    }
})