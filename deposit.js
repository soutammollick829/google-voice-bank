document.getElementById(`deposit-btn`).addEventListener(`click`, function(){
    const depositField = document.getElementById(`deposit-filed`);
    const depositAmount = depositField.value;
   const depositTotalElement = document.getElementById(`deposit-total`);
   const depositTotal = depositTotalElement.innerText;
   depositTotalElement.innerText = depositAmount;
   depositField.value = ``;
})