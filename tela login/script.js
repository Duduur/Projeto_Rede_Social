'use strict';

// Aguarda o carregamento do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Obtém referência ao botão e adiciona o evento de clique
    document.getElementById('botao').addEventListener('click', login);
    document.getElementById('senhaEscondida').addEventListener('click', senhaVisivel);
});

// Função de login
const login = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const url = "https://back-spider.vercel.app/login";

    if (email.trim() === '' || senha.trim() === '') {
        alert('Dados não preenchidos corretamente!');
        return;
    }

    let data = {
        email: email,
        senha: senha // Verifique se a API espera 'senha' ou 'password'
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Tente capturar a resposta da API

        if (response.ok) {
            alert("Sucesso");
            window.location.href = "./home.html"; // Certifique-se de que este caminho está correto
        } else {
            alert(result.message || 'Dados inválidos');
        }
    } catch (error) {
        console.error("Erro ao conectar com a API:", error);
        alert("Erro na conexão com o servidor");
    }
};
document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") login(event);
});

const senhaVisivel = () => {
    const senhaInput = document.getElementById('password');
    const escondido = document.getElementById('senhaEscondida');
    
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        escondido.textContent = "";
    } else {
        senhaInput.type = "password";
        escondido.textContent = "👁️";
    }
};





