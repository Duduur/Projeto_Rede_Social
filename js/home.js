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
    coracao.src = 'https://cdn-icons-png.flaticon.com/512/833/833472.png' 
    coracao.className = 'post-icone'
    
    const comentario = document.createElement('img')
    comentario.src = 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png'
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


// Criação dos storyss
let stories = []
let storyAtual = 0

function criarStory(link, index) {
    const story = document.getElementById('story')
    const storyContainer = document.createElement('div')
    storyContainer.classList.add('story-container')

    const storyImg = document.createElement('img')
    storyImg.src = link.imagem
    storyImg.classList.add('story-img')

    storyContainer.appendChild(storyImg)
    story.appendChild(storyContainer)

    stories.push(link.imagem)

    storyContainer.addEventListener('click', () => {
        abrirModal(index)
    })
}

function abrirModal(index) {
    const modal = document.getElementById('modalStory')
    const imagemModal = document.getElementById('imagemStory')
    storyAtual = index
    imagemModal.src = stories[storyAtual]
    modal.style.display = 'flex'
}

document.querySelector('.fechar').addEventListener('click', () => {
    document.getElementById('modalStory').style.display = 'none'
})

window.addEventListener('click', (story) => {
    const modal = document.getElementById('modalStory')
    if (story.target === modal) {
        modal.style.display = 'none'
    }
})


document.querySelector('.seta.direita').addEventListener('click', () => {
    if (storyAtual < stories.length - 1) {
        storyAtual++
    } else {
        storyAtual = 0 
    }
    document.getElementById('imagemStory').src = stories[storyAtual]
})

document.querySelector('.seta.esquerda').addEventListener('click', () => {
    if (storyAtual > 0) {
        storyAtual--
    } else {
        storyAtual = stories.length - 1 
    }
    document.getElementById('imagemStory').src = stories[storyAtual]
})


document.addEventListener('DOMContentLoaded', () => {
    preencherGaleria()
    preencherStorys()
})

