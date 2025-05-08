'use stict'

// Cria uma função assíncrona
async function profile (){

    const username = document.getElementById('username')
    const perfilImg = document.getElementById('perfilImg')

    // Nessa var, é necessário integrar com o id do user logado
    let idUsuario = 1

    // EndPoint que lista usuários pelo Id (perfil)
    const dataUser = await fetch(`https://back-spider.vercel.app/user/pesquisarUser/${idUsuario}`) 

    // Converte a resposta da API em JSON, armazenando os dados do usuário na variável user
    const user = await dataUser.json()

    console.log(user);

    username.textContent = user.nome
    perfilImg.src = user.imagemPerfil
    

    
}

profile()
