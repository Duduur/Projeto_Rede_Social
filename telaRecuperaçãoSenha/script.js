'use strict'

let modal = document.getElementById('modal');
let botaoModificar = document.getElementById('botaoModificar');
let botaoConfirmar = document.getElementById('botao')

const recuperarSenha = async () => {
    let email = document.getElementById('email').value;
    let palavra = document.getElementById('key_password').value;
    let url = "https://back-spider.vercel.app/user/RememberPassword";

    if (!email || email == "" || email == null|| email == undefined||
        palavra == "" || palavra == null || palavra == undefined ||  !palavra) 
    {
        alert('Dados não preenchidos corretamente!');
    } else {
        let data = {
            email: email,
            wordKey: palavra
        };

        let options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, options);
        const responseData = await response.json();

        localStorage.setItem('idUser', responseData.id)

        if(response.ok){
            botaoConfirmar.onclick = function(){
                modal.showModal()
            }
        }else{
            alert('Dados inválidos')
        }
    }
};

const modificarSenha = async function(id) {
    let novaSenha = document.getElementById('senha').value
    let confirmarSenha = document.getElementById('confirmar').value
    let url = `https://back-spider.vercel.app/user/newPassword/${id}`

    if(novaSenha == "" || novaSenha == null || novaSenha == undefined ||
        confirmarSenha == "" || confirmarSenha == null || confirmarSenha == undefined
    ){
        alert('Necessario preencher todos os dados corretamente!')
    }else{
        
        let data = {
            senha: novaSenha
        }
        let options = {
            method:'PUT',
            headers:{
                 'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)

        if(response.ok){
            alert("Senha Alterada com Sucesso !")
            return true
        }else{
            alert('Não foi possível modificar a senha')
        }
    }
}

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

botaoModificar.onclick = async function() {
    
    let idUser = localStorage.getItem("idUser")

    const validaPasswword = await modificarSenha(idUser)

    if(validaPasswword){
        modal.close()
        window.location.href = "../telaLogin/index.html"
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('botao').addEventListener('click', recuperarSenha);
});
