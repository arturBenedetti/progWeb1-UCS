const citacoes = [
    "A persistência é o caminho do êxito.",
    "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
    "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
    "A única forma de fazer um grande trabalho é amar o que você faz.",
    "O aprendizado é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende."
];

function geraCitacao() {
    const indiceAleatorio = Math.floor(Math.random() * citacoes.length);
    const citacaoEscolhida = citacoes[indiceAleatorio];

    document.getElementById("texto-citacao").textContent = citacaoEscolhida;
}

document.getElementById("botao-gerar").addEventListener("click", geraCitacao);
