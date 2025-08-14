let emailInput = document.querySelector("#email");
let submitBtn = document.querySelector(".submit_btn");
let emailRegexp =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let emailLabel = document.querySelector(".email_label");
let errorLabel = document.querySelector(".error_label")
let emailValue = "";

emailInput.addEventListener("input",(e) =>{
    emailValue += e.target.value; 
   
    if(e.target.value == ""){
        emailInput.style.backgroundColor = "transparent";
        emailInput.style.borderColor = "hsl(234, 29%, 20%)";
        errorLabel.style.opacity = 0;
        errorLabel.style.top = "45px";
    }
})



submitBtn.addEventListener("click", (e)=>{
    // e.preventDefault();
    
    if(emailRegexp.test(emailValue)){
        console.log("valid");
        errorLabel.style.opacity = 0;
        errorLabel.style.top = "45px";
        emailInput.style.backgroundColor = "transparent";
        emailInput.style.borderColor = "hsl(234, 29%, 20%)";
    }
    else if(emailRegexp.test(emailValue) === false){
        console.log("invalid")
        emailInput.style.backgroundColor = "hsla(4, 100.00%, 67.10%, 0.72)";
        emailInput.style.borderColor = "hsla(4, 100.00%, 67.10%, 0.72)";
        errorLabel.style.opacity = 1;
        errorLabel.style.top = 0;
    }
})

