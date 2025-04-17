'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('button'); // Pega o botão dentro do DOM carregado

    async function cadastrarUser() { 
        try {
            const nome = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('password').value;
            const imagemPerfil = document.getElementById('img').value;
            const recuperacaoSenha = document.getElementById('key').value;

            if (!nome || !email || !senha || !imagemPerfil || !recuperacaoSenha) {
                alert("Todos os campos são obrigatórios!");
                return null;
            }

            let url = "https://back-spider.vercel.app/user/cadastrarUser";

            const data = {
                nome: nome,
                email: email,
                senha: senha,
                premium: '1',
                imagemPerfil: imagemPerfil,
                senhaRecuperacao: recuperacaoSenha 
            };

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Transforma o objeto em uma string JSON
            };

            const response = await fetch(url, options);
            const result = await response.json(); // Pega o JSON da resposta

            if (response.status === 201) {
                alert("Cadastro realizado com sucesso!");
            } else {
                alert(`Erro: ${result.message || "Algo deu errado"}`);
            }
            return response;
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar usuário!");
        }
    }

    button.addEventListener('click', cadastrarUser);
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

document.addEventListener("DOMContentLoaded", () => {
    const senhaInput = document.getElementById("key");
    const escondido = document.getElementById("chaveEscondida");

    const imgOlhoAberto = "https://cdn-icons-png.flaticon.com/512/11502/11502607.png";
    const imgOlhoFechado = "https://cdn-icons-png.flaticon.com/512/9726/9726597.png";

    escondido.addEventListener("click", () => {
        if (senhaInput.type == "password") {
            senhaInput.type = "text";   
            escondido.src = imgOlhoAberto; 
        } else {
            senhaInput.type = "password";
            escondido.src = imgOlhoFechado; 
        }
    });
});