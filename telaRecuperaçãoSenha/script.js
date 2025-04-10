'use strict'

document.getElementById('campo').addEventListener("submit", async function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let wordKey = document.getElementById("key_password").value;
    const url = "https://back-spider.vercel.app/user/RememberPassword";

    // Verificação dos campos
    if (!email || !wordKey) {
        alert('Dados inválidos! Preencha todos os campos.');
        return; // Evita continuar o código se os dados estão inválidos
    }

    // Montando os dados para enviar
    let data = {
        email: email,
        wordKey: wordKey
    };

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, options);

        if (response.status === 200) {
            // Se a resposta for sucesso, redireciona para a página de nova senha
            window.location.href = "nova-senha.html"; // Altere para o caminho correto da sua página
        } else {
            alert('Erro ao validar os dados! Verifique se as informações estão corretas.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro ao tentar recuperar a senha. Tente novamente mais tarde.');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const senhaInput = document.getElementById("key_password");
    const escondido = document.getElementById("senhaEscondida3");

    const imgOlhoAberto = "https://cdn-icons-png.flaticon.com/512/11502/11502607.png";
    const imgOlhoFechado = "https://cdn-icons-png.flaticon.com/512/9726/9726597.png";

    escondido.addEventListener("click", () => {
        if (senhaInput.type === "password") {
            senhaInput.type = "text";   
            escondido.src = imgOlhoAberto; 
        } else {
            senhaInput.type = "password";
            escondido.src = imgOlhoFechado; 
        }
    });
});
