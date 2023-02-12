document.getElementById(`submit-btn`).addEventListener(`click`, function(){
    const emailField = document.getElementById(`email-field`);
    const email = emailField.value;
    
    const passwordField = document.getElementById(`password-filed`);
    const password = passwordField.value;
    
    if(email === `somudromallick@gmail.com` && password === `somudro`){
        window.location.href = `bank.html`;
    }
    else{
        alert(`Give me valid gmail / password...!!`)
    }
})