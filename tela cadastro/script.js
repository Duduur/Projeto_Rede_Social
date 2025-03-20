'use strict'

const  button = document.getElementById('button')

function dadosDeCadastro(){
    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value
    const imagemPerfil = document.getElementById('img').value

    const premium = document.getElementById('box').checked ? 1 : 0
    
    const jsonDados = {
        nome: nome,
        email: email,
        senha: senha,
        premium: checkbox,
        imagemPerfil: img
    }

    return jsonDados
}

async function cadastrarUsuario() {
    try {
        const response = await fetch('https://back-spider.vercel.app/user/cadastrarUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Especifica que estamos enviando um JSON
            },
            body: JSON.stringify(dadosDeCadastro()), // Transforma o objeto em uma string JSON
        });

    } catch (error) {
        
    }
    
}

button.addEventListener('click', cadastrarUsuario)