document.getElementById('deposit').addEventListener('click', function(){
    // console.log("Your money has deposited !!");

    //take deposit input value 
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);

    //added some validation 
    if(depositInputText != ''){
        //current deposit amount 
        const prevDeposit = document.getElementById('deposit-current');
        const prevDepositText = prevDeposit.innerText;
        const prevDepositAmount = parseFloat(prevDepositText);

        //update deposit amount
        const totalDepositAmount = prevDepositAmount + depositInputAmount;
        prevDeposit.innerText = totalDepositAmount;

        //current balance amount 
        const prevBalance = document.getElementById('balance-current');
        const prevBalanceText = prevBalance.innerText;
        const prevBalanceAmount = parseFloat(prevBalanceText);

        //update balance amount 
        const totalBalanceAmount = prevBalanceAmount + depositInputAmount;
        prevBalance.innerText = totalBalanceAmount;

        //clear deposit amount 
        depositInput.value = '';
    }else{
        alert("Please add some amount !!")
    }

   
})

//working for withdraw amount 

document.getElementById('withdraw').addEventListener('click', function(){
    
    //taking withdraw input value 
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawInputText = withdrawInput.value;
    let withdrawInputAmount = parseFloat(withdrawInputText);
   
    //added validation for empty value 
    if(withdrawInputText != ''){
        // current withdraw amount 
        let prevWithdraw = document.getElementById('withdraw-current');
        let prevWithdrawText = prevWithdraw.innerText;
        let prevWithdrawAmount = parseFloat(prevWithdrawText);

        //update withdraw amount 
        let totalWithdrawAmount = prevWithdrawAmount + withdrawInputAmount;
        prevWithdraw.innerText = totalWithdrawAmount;

        // update Balance after withdrawn 
        //current balance amount 
        const prevBalance = document.getElementById('balance-current');
        const prevBalanceText = prevBalance.innerText;
        const prevBalanceAmount = parseFloat(prevBalanceText);

        //new balance 
        const newTotalBalance = prevBalanceAmount - withdrawInputAmount;
        prevBalance.innerText = newTotalBalance;


        //clear withdraw input field 
        withdrawInput.value = '';
    }else{
        alert("Please enter amount you want to withdraw !!")
    }
    
    
})