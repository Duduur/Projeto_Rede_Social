'use strict'

const galeria = document.getElementById('galeria')

async function pegarPosts(){
    const url = 'https://back-spider.vercel.app/publicacoes/listarPublicacoes'

    const response = await fetch(url)
    const data = await response.json()
    return data

}

async function pegarUsuarios(id) {
    const url = `https://back-spider.vercel.app/user/pesquisarUser/${id}`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

function criarImagem(link){
    const header = document.createElement('div')
    header.classList.add('usuario-info')

    const fotoPerfil = document.createElement('img')
    fotoPerfil.src = link.imagemPerfil

    const nome = document.createElement('strong')
    nome.textContent = link.nome

    const novaImg = document.createElement('img') 
    novaImg.src = link.imagem

    const descricao = document.createElement('p')
    descricao.textContent = link.descricao

    const coracao = document.createElement('img')
    coracao.src = '/src/img/coracaozinho.png'
    coracao.classList.add('icone')
    
    const comentario = document.createElement('img')
    comentario.src = '/src/img/chat.png'
    comentario.classList.add('icone')

    const icones = document.createElement('span')
    icones.className = 'icones'
    icones.appendChild(coracao)
    icones.appendChild(comentario)  

    header.appendChild(fotoPerfil)
    header.appendChild(nome)

    const container = document.createElement('div')
    container.appendChild(header)
    container.appendChild(descricao)
    container.appendChild(novaImg)
    container.appendChild(icones)
   
   

    galeria.appendChild(container)
}


async function preencherFotos(){
    const fotos = await pegarPosts()
    const users = await pegarUsuarios()

    fotos.forEach (criarImagem)
    users.forEach(1)
}

preencherFotos()