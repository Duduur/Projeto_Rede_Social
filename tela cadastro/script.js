'use strict'


document.addEventListener("DOMContentLoaded", function (){

    const  button = document.getElementById('button')

function dadosDeCadastro(){
       const nome = document.getElementById('nome').valeus;
       const email = document.getElementById('email').valeus;
       const senha = document.getElementById('password').valeus;
       const premium = document.getElementById('box').valeus;
       const imagemPerfil = document.getElementById('img').valeus;

       return{
            nome: nome,
            email: email,
            senha: senha,
            premium: premium,
            imagemPerfil: imagemPerfil
       }
}

async function cadastrarUsuario() {

        const cadastrarUser = dadosDeCadastro()
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
})

