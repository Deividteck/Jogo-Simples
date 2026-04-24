// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
let contagemPalpites = 0;

document.getElementById("botaoAdivinhar").addEventListener("click", verificarPalpite);
document.getElementById("campoAdivinhacao").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        verificarPalpite();
    }
});

function verificarPalpite() {
    const palpiteUsuario = parseInt(document.getElementById("campoAdivinhacao").value);
    contagemPalpites++;
    const mensagem = document.getElementById("mensagem");
    
    if (isNaN(palpiteUsuario) || palpiteUsuario < 1 || palpiteUsuario > 50) {
        mensagem.textContent = "Por favor, insira um número válido entre 1 e 50.";
        return;
    }

    if (palpiteUsuario === numeroAleatorio) {
        mensagem.textContent = `Parabéns! Você acertou o número ${numeroAleatorio} em ${contagemPalpites} tentativas!`;
        mensagem.style.color = "green";
        desabilitarEntrada();
    } else if (palpiteUsuario < numeroAleatorio) {
        mensagem.textContent = "Muito baixo! Tente novamente.";
        mensagem.style.color = "blue";
    } else {
        mensagem.textContent = "Muito alto! Tente novamente.";
        mensagem.style.color = "orange";
    }
}

function desabilitarEntrada() {
    document.getElementById("campoAdivinhacao").disabled = true;
    document.getElementById("botaoAdivinhar").disabled = true;
}
