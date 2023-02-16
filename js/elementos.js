function iniciarJuego() {

let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

}

function seleccionarMascotaJugador() {
    let inputPeluza = document.getElementById("Peluza")
    let inputMasitas = document.getElementById("Masitas")
    let inputKipo = document.getElementById("Kipo")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    

    if (inputPeluza.checked) {
        spanMascotaJugador.innerHTML ="Peluza"
    } else if(inputMasitas.checked) {
        spanMascotaJugador.innerHTML ="Masitas"
    }else if(inputKipo.checked) {
        spanMascotaJugador.innerHTML ="Kipo"
    }else {
        alert("SELECCIONA UNA MASCOTA")
    }

    seleccionarMascotaEnemigo () 

    }
    function seleccionarMascotaEnemigo() {
        let ataqueAleatorio = aleatorio(1,3)
        let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

        if(ataqueAleatorio == 1) {
            spanMascotaEnemigo.innerHTML = "Peluza"
        } else if (ataqueAleatorio == 2) {
            spanMascotaEnemigo.innerHTML = "Masitas"
        } else {
            spanMascotaEnemigo.innerHTML = "Kipo"
        }

    }


    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)

