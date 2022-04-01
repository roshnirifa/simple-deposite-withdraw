// login button
document.getElementById('login-btn').addEventListener('click', function () {
    const emailInput = document.getElementById('email-field');
    const userEmail = emailInput.value;

    // get user password
    const passwordInput = document.getElementById('password-field');
    const userPassword = passwordInput.value;

    if (userEmail == 'roshnirifa998@gmail.com' && userPassword == 12345) {
        console.log('valid user');
    } else {
        console.log('invalid user or password');
    }
    window.location.href = 'banking.html'



})