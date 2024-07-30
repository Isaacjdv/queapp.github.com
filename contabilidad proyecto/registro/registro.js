document.getElementById('registro-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find(user => user.username === newUsername);

    if (userExists) {
        alert('El usuario ya existe');
    } else {
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registro exitoso');
        window.location.href = '../index.html';
    }
});
