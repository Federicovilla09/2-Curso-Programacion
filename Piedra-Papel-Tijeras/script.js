function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  let resultado = "";

  if (jugada == 1) {
    resultado = "Piedra";
  } else if (jugada == 2) {
    resultado = "Papel";
  } else if (jugada == 3) {
    resultado = "Tijeras";
  } else {
    resultado = "Perdiste :(";
  }
  return resultado;
}

let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt("Elije: 1 para piedra, 2 para papel, 3 para tijeras");

  alert("Pc elige: " + eleccion(pc));
  alert("Tu elijes: " + eleccion(jugador));

  //duelo
  if (pc == jugador) {
    alert("Empate");
  } else if (jugador == 1 && pc == 3) {
      alert("Ganaste");
      triunfos = triunfos + 1;
  } else if (jugador == 2 && pc == 1) {
      alert("Ganaste");
     triunfos = triunfos + 1;
  } else if (jugador == 3 && pc == 2) {
      alert("Ganaste");
      triunfos = triunfos + 1;
  } else {
      alert("Perdiste");
      perdidas = perdidas + 1;
  }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");