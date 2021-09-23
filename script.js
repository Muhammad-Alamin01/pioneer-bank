// login btn event handler
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});

// Deposit btn event handler
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', () => {
    const depositNumber = getInputAmount('deposit-amount');

    updateSpanText('current-deposit', depositNumber);
    updateSpanText('balance', depositNumber);

    document.getElementById('deposit-amount').value = '';
});

// withdraw btn event handler
const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click', () => {
    const withdrawNumber = getInputAmount('withdraw-amount');

    updateSpanText('current-withdraw', withdrawNumber);
    updateSpanText('balance', -1 * withdrawNumber);

    document.getElementById('withdraw-amount').value = '';
})

// input amount
function getInputAmount(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);

    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}


