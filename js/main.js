document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('parol');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    // Ko'zcha ikonkasini o'zgartirish
    this.textContent = type === 'password' ? '👁' : '🙈';
});