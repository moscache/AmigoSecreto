// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variable tipo arreglo que guardara la lista de amigos
let listaDeAmigos = [];

//funcion asignada al boton añadir
function agregarAmigo() {
  //guardo en una variable auxiliar los nombres que va ingresando
  let nombreAmigos = document.getElementById("amigo").value;
  //valido que al añadir algun nombre no este vacio
  if (!nombreAmigos) {
    //en caso de no haber nombre me sale el aviso siguiente
    alert("Por favor, inserte un nombre.");
  } else {
    //agrega el nombre del amigo en la lista
    listaDeAmigos.push(nombreAmigos);
    //una vez añadido el nombre en la lista se limpia la caja para ingresar otro nombre
    limpiarCaja();
    mostrarLista();
  }
}

//funcion que limpia la caja en donde se ingresa los nombres
function limpiarCaja() {
  document.querySelector("#amigo").value = "";
}

//funcion para mostrar la lista de amigos en pantalla
function mostrarLista() {
  //variable que guarda el vinculo con el id de la lista
  let listaParaMostrar = document.getElementById("listaAmigos");
  listaParaMostrar.innerHTML = "";
  // voy creando de forma dinamica la lista para mostrar los nombres de los amigos
  for (let i = 0; i < listaDeAmigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = listaDeAmigos[i];
    listaParaMostrar.appendChild(item);
  }
}

// funcion para sortear un amigo dentro de la lista de forma aleatoria
function sortearAmigo() {
  //comprueba que no este vacia la lista
  if (listaDeAmigos.length === 0) {
    alert("No hay nombres en la lista para sortear");
  } else {
    //elige un nombre de forma aleatoria dentro del rango del arreglo
    let amigoSorteado =
      listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    //guarda el nombre sorteado y lo guarda para mostrarlo
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
  }
}
