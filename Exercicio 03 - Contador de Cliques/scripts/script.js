let contador = 0;

function incrementaContador() {
    contador++;
    console.log("Clique número: " + contador);
}

document.getElementById("contador").addEventListener("click", incrementaContador);
