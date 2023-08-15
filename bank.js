let totalDepositAmount = 0;
let totalWithdrawAmount = 0;
let totalBalanceAmount = 20500;

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
    if (depositFeild.value == "") {
      alert("please Enter an amount to DEPOSITE 💵");
    } else {
      //calculating deposit + total balance
      totalDepositAmount = parseFloat(depositAmount) + totalDepositAmount;
      totalBalanceAmount = totalBalanceAmount + parseFloat(depositAmount);
      
      // updating total deposit & total balance
      depositTotal.innerText = totalDepositAmount;
      balanceTotal.innerText = totalBalanceAmount;
      depositFeild.value = '';
    
    }
  });

// WITHDRAW JS
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawFeild = document.getElementById("withdraw-amount");
    const withdrawAmount = withdrawFeild.value;

    console.log(withdrawAmount);

    //withdraw total amount
    const withdrawTotal = document.getElementById("withdraw");
    const balanceTotal = document.getElementById("balance");
    const withdraw = withdrawTotal.innerText;

    //calculating withdraw + total balance
    if (withdrawFeild.value == "") {
      alert("please Enter an amount to Withdraw 💸");
    } else {
      totalWithdrawAmount = parseFloat(withdrawAmount) + totalWithdrawAmount;
      
      if(totalBalanceAmount < parseFloat(withdrawAmount)){
        alert("Balance Insufficient");
        withdrawFeild.value = '';
      }else{
      // updating total withdraw & total balance
      totalBalanceAmount = totalBalanceAmount - parseFloat(withdrawAmount);
      withdrawTotal.innerText = totalWithdrawAmount;
      balanceTotal.innerText = totalBalanceAmount;
      withdrawFeild.value = '';
      }
    }
  });
