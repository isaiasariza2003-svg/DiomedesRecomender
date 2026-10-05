import * as Funciones from "./Operadores.js";
import * as FCanciones from "./canciones.js";

const boton = document.getElementById("boton");
const enlaceYouTube = document.getElementById("enlaceYouTube");

let nombre;
let edad;
let animo;

const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const animoInput = document.getElementById("animo");

boton.addEventListener("click", (evento) => { // ACCION DEL BOTON PARA EJECUTAR
    evento.preventDefault(); //para prevenir el recargue de la pag

    const nombreVar = nombreInput.value;
    const edadVar = edadInput.value;
    const animoVar = animoInput.value;

    nombre = nombreVar;
    edad = edadVar;
    animo = animoVar;
    
    const codeNom = Funciones.NombreCode(nombre); //devuelve el codigo del nombre
    const moduloAnimo = FCanciones.cantCanciones(FCanciones.canciones,animo); //devuelve la max canciones del tipo animo 
    const edadNum = Number(edad);
    const moduloCancion = Funciones.varAleatorio(1,moduloAnimo);
    let e;
    if (animo != "especial"){ //validacion si la cancion es especial
         e = Funciones.ContadorModular(codeNom + edadNum + moduloCancion,moduloAnimo);
    } else {
         e = 1
    }
    const numeroCancion = e
    const cancion = FCanciones.buscarCancion(animo,numeroCancion);
    const hipervinculo = FCanciones.buscarURL(cancion);

    const recomendacion = document.getElementById("recomendacion");
    recomendacion.textContent = cancion;
    enlaceYouTube.href = hipervinculo;
    enlaceYouTube.style.display = "inline-block";

    console.log(moduloAnimo)
});



