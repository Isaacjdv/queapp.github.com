document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const messagePopup = document.getElementById('message-popup');
    const messageText = document.getElementById('message-text');
    const messageClose = document.getElementById('message-close');

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin/admin.html';
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            if (username !== 'admin') {
                // Redirigir a la página de contenido si el usuario es diferente a "admin"
                window.location.href = 'contenido/contenido.html';
            } else {
                // Mostrar mensaje si el usuario es "admin"
                messageText.textContent = '¡Inicio de sesión exitoso!';
                messagePopup.style.backgroundColor = '#d4edda'; // Color verde para éxito
                messagePopup.style.display = 'block';
            }
        } else {
            // Mostrar mensaje de error
            messageText.textContent = 'Usuario o contraseña incorrectos';
            messagePopup.style.backgroundColor = '#f8d7da'; // Color rojo para error
            messagePopup.style.display = 'block';
        }
    }

    messageClose.addEventListener('click', function () {
        messagePopup.style.display = 'none';
    });
});

document.getElementById('forgot-password').addEventListener('click', function () {
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=gatosac52@gmail.com&su=Solicitud de recuperación de usuario/contraseña';
});
