const Enter = document.getElementById('enter');
Enter.addEventListener('click', function () {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name.trim() === "" || email.trim() === "") {
    alert('Please enter both your name and email to proceed.');
    return; 
  }
  const Font = document.getElementById('log-form');
  Font.style.display = 'none';
  const Transaction = document.getElementById('transaction');
  Transaction.style.display = 'block';
  const Message = document.getElementById('avter');
  Message.innerText = name;
});

const Deposit = document.getElementById('deposit');
Deposit.addEventListener('click', function () {
  const Amount = document.getElementById('amount').value;
  const Amountnum = parseFloat(Amount);

  if (isNaN(Amountnum) || Amountnum <= 0) {
    alert('Please enter a valid deposit amount.');
    return;
  }

  const Current = document.getElementById('current');
  const Currentnum = parseFloat(Current.innerText);

  // Update the current balance
  Current.innerText = Currentnum + Amountnum;

  // Update the store balance
  const Store = document.getElementById('store');
  const Storenum = parseFloat(Store.innerText);
  Store.innerText = Storenum + Amountnum;

  document.getElementById('amount').value= "";
});

const Withdraw = document.getElementById('withdraw');
Withdraw.addEventListener('click', function () {
  const WAmount = document.getElementById('wamount').value;
  const WAmountnum = parseFloat(WAmount);

  if (isNaN(WAmountnum) || WAmountnum <= 0) {
    alert('Please enter a valid withdrawal amount.');
    return;
  }

  const Store = document.getElementById('store');
  const Storenum = parseFloat(Store.innerText);

  if (WAmountnum <= Storenum) {
    // Update the store balance after withdrawal
    const newBalance = Storenum - WAmountnum;
    Store.innerText = newBalance;

    // Update the cashout balance
    const Cashout = document.getElementById('cashout');
    const Cashoutnum = parseFloat(Cashout.innerText);
    Cashout.innerText = Cashoutnum + WAmountnum;
    document.getElementById('wamount').value= "";
    
  } else {
    alert("Insufficient balance 😭");
  }
});
