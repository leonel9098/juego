let numeroAleatorio;
let intentos = 0;
let tiempoRestante = 60;
let temporizador;
let tiempoUsado = false;

function iniciarJuego() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    tiempoUsado = false;
    intentos = 0;
    tiempoRestante = 60;
    actualizarTiempoRestante();
    temporizador = setInterval(actualizarTiempoRestante, 1000);
}

function actualizarTiempoRestante() {
    document.getElementById("timeLeft").textContent = `Tiempo restante: ${tiempoRestante} segundos`;
    if (tiempoRestante === 0) {
        tiempoUsado = true;
        clearInterval(temporizador);
        document.getElementById("message").textContent = "¡Tiempo agotado! El juego ha terminado.";
    }
    tiempoRestante--;
}

function adivinaNumero() {
    if (tiempoUsado) {
        return;
    }
    const adivinar = parseInt(document.getElementById("guess").value);
    intentos++;

    if (adivinar === numeroAleatorio) {
        clearInterval(temporizador);
        tiempoUsado = true;
        document.getElementById('message').textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
    } else if (adivinar < numeroAleatorio) {
        document.getElementById('message').textContent = 'El número es mayor. Intenta de nuevo.';
    } else {
        document.getElementById('message').textContent = 'El número es menor. Intenta de nuevo.';
    }
}

iniciarJuego();