let nombre = prompt("Cual es tu nombre?");
let edad = prompt("Cuantos años tienes?");
let lenguaje = prompt("Qué lenguaje de programación estás estudiando?");

alert ("Hola " + nombre + ", tienes " + edad + " años y estas estudiando actualmente " + lenguaje + "!");

function preguntarLenguaje()
{
    let respuesta = prompt("¿Te gusta estudiar " + lenguaje + "? Responde con el número 1 para SÍ o 2 para NO.")
    if (respuesta == 1)
        {
            alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
        }
    else 
        {
            alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
        }
}

preguntarLenguaje();