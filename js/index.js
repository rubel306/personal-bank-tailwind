document.getElementById('login').addEventListener('click', function(){
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value == 'rubel@hasan.com' && password.value == 'rubel'){
        window.location.href = 'banking.html'
    }else{
        alert("Invalid user or password !!")
    }
})