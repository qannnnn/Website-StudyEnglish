document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn không cho form submit mặc định

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Simple validation
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        errorMessage.textContent = '';
        // Redirect to another page or perform other actions
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
