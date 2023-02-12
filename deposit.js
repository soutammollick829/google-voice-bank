// withdraw button
document.getElementById(`deposit-btn`).addEventListener(`click`, function(){
    const depositField = document.getElementById(`deposit-filed`);
    const depositAmount = depositField.value;
    const newDepositAmount = parseFloat(depositAmount);
    depositField.value = ``;
   const depositTotalElement = document.getElementById(`deposit-total`);
   const depositTotal = depositTotalElement.innerText;
   const previousDeposit = parseFloat(depositTotal);
   const newDepositTotal = previousDeposit + newDepositAmount;
   depositTotalElement.innerText = newDepositTotal;
   
   //    total balance section
const balanceTotal= document.getElementById(`balance-total`);
const previousBalance = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalance);
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = newBalanceTotal;
})

// withdraw button
document.getElementById(`withdraw-btn`).addEventListener(`click`, function(){
    const withdrawField = document.getElementById(`withdraw-filed`);
    const withdrawAmount = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmount);
    withdrawField.value = ``;
    const withdrawTotalElement = document.getElementById(`Withdraw-total`);
   const withdrawTotal = withdrawTotalElement.innerText;
   const previousWithdraw = parseFloat(withdrawTotal);
   const newWithdrawTotal = previousWithdraw + newWithdrawAmount;
   withdrawTotalElement.innerText = newWithdrawTotal;

   //    total balance section
const balanceTotal= document.getElementById(`balance-total`);
const previousBalance = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalance);
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotal.innerText = newBalanceTotal;
})