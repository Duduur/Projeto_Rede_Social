'use strict'

const login = async () =>{

   const email = document.getElementById('email')
    const senha = document.getElementById('password')
    //fazer a validação se esses dados estao vazios

    const url = "https://back-spider.vercel.app/login"

    const data = {
        email: email,
        senha: senha
    }
    const options = {

        method: 'Post',
        Headers: {
            'Content-type': 'application/Json'
        },
        body:JSON.stringify(data)

    }
   
    const response = await fetch(url, options)
    console.log(response)
}