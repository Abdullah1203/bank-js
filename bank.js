let totalDepositAmount = 0;
let totalWithdrawAmount = 0;
let totalBalanceAmount = 21000;

// DEPOSIT js
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositFeild = document.getElementById("deposit-amount");
    const depositAmount = depositFeild.value;

    console.log(depositAmount);

    //deposit total amount
    const depositTotal = document.getElementById("deposit");
    const balanceTotal = document.getElementById("balance");
    const deposit = depositTotal.innerText;

    //calculating deposit + total balance 
    totalDepositAmount = parseInt(depositAmount) + totalDepositAmount;
    totalBalanceAmount = totalBalanceAmount + parseInt(depositAmount);
    // updating total deposit & total balance
    depositTotal.innerText = totalDepositAmount;
    balanceTotal.innerText = totalBalanceAmount;
  });


  // WITHDRAW JS
  