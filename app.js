// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres ingresados
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco al inicio y final

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista si no está vacío
    listaAmigos.push(nombre);
    
    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar lista antes de actualizar

    listaAmigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎁</li>`;
}
