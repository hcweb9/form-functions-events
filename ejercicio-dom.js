"use strict";

window.addEventListener("load", function () {
  console.log("DOM cargado!!!");
  //Ejercicio 1
  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display = "none";
  //Ejercicio 2
  formulario.addEventListener("submit", () => {
    console.log("Evento submit capturado");

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);

    //Ejercicio 4a

    if (nombre.trim() == null || nombre.trim().length == 0) {
      alert("Este nombre no es válido!!!");
      document.querySelector("#error_nombre").innerHTML =
        "El nombre no es válido!!!";
      document.querySelector("#error_nombre").style.color = "red";
      return false;
    } else {
      document.querySelector("#error_nombre").style.display = "none";
    }

    if (apellidos.trim() == null || apellidos.trim().length == 0) {
      alert("Los apellidos no son válidos!!!");
      document.querySelector("#error_apellidos").innerHTML =
        "Los apellidos no son válidos!!!";
      document.querySelector("#error_apellidos").style.color = "red";
      return false;
    } else {
      document.querySelector("#error_apellidos").style.display = "none";
    }
    if (edad == null || edad <= 0 || isNaN(edad)) {
      alert("La edad no es válida!!!");
      document.querySelector("#error_edad").innerHTML =
        "La edad no es válida!!!";
      document.querySelector("#error_edad").style.color = "red";
      return false;
    } else {
      document.querySelector("#error_edad").style.display = "none";
    }

    box_dashed.style.display = "block";

    //console.log(nombre, apellidos, edad);

    /*Dos formas pora resolver el ejercicio 3 y 4.
     Primera:

     var datos_usuario = [nombre, apellidos, edad];

     var indice;
     for (indice in datos_usuario) {
       var parrafo = document.createElement ("p");
       parrafo.append(datos_usuario[indice]);
       box_dashed.append(parrafo);
     }
*/

    //Segunda forma para el ejercicio 3-4:
    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;
  });
});
