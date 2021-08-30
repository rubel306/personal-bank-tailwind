document.getElementById('deposit').addEventListener('click', function(){
    // console.log("Your money has deposited !!");

    //take deposit input value 
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);

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
    depositInput.value = ''
})

//working for withdraw amount 

document.getElementById('withdraw').addEventListener('click', function(){
    
    //taking withdraw input value 
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawInputText = withdrawInput.value;
    let withdrawInputAmount = parseFloat(withdrawInputText);
   

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
    
})