function validarLogin() {

    const inputEmail = document.getElementById('email');
    const inputSenha = document.getElementById('senha');

    const usuarioPadrao = 'admin';
    const senhaPadrao = 'admin';

    const isLoginValido = inputEmail.value == usuarioPadrao && inputSenha.value == senhaPadrao;

    if (inputEmail.value) {
        alert('Tem valor!!!')
    }

    if (isLoginValido == true) {
        // Concatenação de valores através de Crase
        alert(`
            Usuário logado com sucesso!
            Acesso com email: ${inputEmail.value}
            `);
    } else {
        alert('Usuário ou senha incorretos');
    }

}