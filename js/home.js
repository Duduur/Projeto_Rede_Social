'use strict'

const galeria = document.getElementById('galeria')

async function pegarPosts() {
    const url = 'https://back-spider.vercel.app/publicacoes/listarPublicacoes'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function pegarStory() {
    const url = 'https://back-spider.vercel.app/storys/listarStorys'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function pegarUsuario(id) {
    const url = `https://back-spider.vercel.app/user/pesquisarUser/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function criarPost(post, usuario) {
    const postContainer = document.createElement('div')
    postContainer.className = 'post'

    // Cabeçalho estilo Instagram (foto + nome lado a lado)
    const header = document.createElement('div')
    header.className = 'post-header'
    
    const fotoPerfil = document.createElement('img')
    fotoPerfil.className = 'foto-perfil'
    fotoPerfil.src = usuario.imagemPerfil || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' // fallback
    fotoPerfil.alt = 'Foto do perfil'
    
    const nomeUsuario = document.createElement('span')
    nomeUsuario.className = 'nome-usuario'
    nomeUsuario.textContent = usuario.nome
    
    // Adiciona foto e nome ao header (lado a lado)
    header.appendChild(fotoPerfil)
    header.appendChild(nomeUsuario)

    // Conteúdo da publicação
    const imagemPost = document.createElement('img')
    imagemPost.className = 'imagem-post'
    imagemPost.src = post.imagem
    imagemPost.alt = 'Publicação'
    
    // Rodapé com ícones e descrição
    const footer = document.createElement('div')
    footer.className = 'post-footer'
    
    const icones = document.createElement('div')
    icones.className = 'post-icones'
    
    const coracao = document.createElement('img')
    coracao.src = '/src/img/coracaozinho.png'
    coracao.className = 'post-icone'
    
    const comentario = document.createElement('img')
    comentario.src = '/src/img/chat.png'
    comentario.className = 'post-icone'
    
    icones.appendChild(coracao)
    icones.appendChild(comentario)
    
    const descricao = document.createElement('p')
    descricao.className = 'post-descricao'
    descricao.textContent = post.descricao
    
    footer.appendChild(descricao)
    footer.appendChild(icones)

    // Montando o post completo
    postContainer.appendChild(header)
    postContainer.appendChild(imagemPost)
    postContainer.appendChild(footer)

    galeria.appendChild(postContainer)
}

function criarStory(link){
    const story = document.getElementById('story')
    const storyImg = document.createElement('img')
    storyImg.src = link.imagem

    story.appendChild(storyImg)
}

async function preencherGaleria() {
    try {
        const posts = await pegarPosts()
        
        for (const post of posts) {
            const usuario = await pegarUsuario(post.idUsuario)
            criarPost(post, usuario)
        }
    } catch (error) {
        console.error('Erro ao carregar posts:', error)
    }
}

async function preencherStorys() {
    try {
        const storys = await pegarStory()
        for (const story of storys) {
            criarStory(story)
        }
    } catch (error) {
        console.error('Erro ao carregar stories:', error)
    }
}


document.addEventListener('DOMContentLoaded', () => {
    preencherGaleria()
    preencherStorys()
})

