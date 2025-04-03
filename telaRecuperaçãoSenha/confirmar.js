document.addEventListener("DOMContentLoaded", () => {
    const senhaInput = document.getElementById("Nova_senha");
    const escondido = document.getElementById("senhaEscondida2");

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
