'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        senha: senha 
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
        const result = await response.json(); 

        if (response.ok) {
            alert("Sucesso");
            window.location.href = "../../src/Pages/home.html"; 
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

document.addEventListener("DOMContentLoaded", () => {
    const senhaInput = document.getElementById("password");
    const escondido = document.getElementById("senhaEscondida");

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





