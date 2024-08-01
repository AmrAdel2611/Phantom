document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === '123') {
        alert('Login successful!');
        window.location.href = 'tracker.html'; // Redirect to index.html
    } else {
        alert('Invalid username or password.');
    }
});
