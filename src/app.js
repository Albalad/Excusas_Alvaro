import "./style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Arrays con palabras
let Quien = [
  "4Geeks ",
  "Pikachu ",
  "Gozilla ",
  "Trotuman ",
  "Terminator ",
  "Rayo Mcqueen "
];
let Que = [
  "atropelló ",
  "desintegró ",
  "electrocutó ",
  "teletransportó ",
  "abrazó "
];
let Objeto = [
  "a un cactus ",
  "a mi perro ",
  "a mi pais ",
  "mi portatil ",
  "mi universo ",
  "mi chancla ",
  "mi router "
];
let CuandoComo = [
  "mientras comía.",
  "sin dejar rastro.",
  "apasionadamente.",
  "a base de bugs.",
  "sin descanso",
  "con mi ayuda"
];

window.onload = function() {
  // Randomizar las palabras
  const excusa = a => a[Math.floor(Math.random() * a.length)];

  //Forma larga

  // let rdm1 = Math.floor(Math.random() * Quien.length);
  // let rdm2 = Math.floor(Math.random() * Que.length);
  // let rdm3 = Math.floor(Math.random() * Objeto.length);
  // let rdm4 = Math.floor(Math.random() * CuandoComo.length);
  // //Creamos el resultado
  // let resultado = Quien[rdm1] + Que[rdm2] + Objeto[rdm3] + CuandoComo[rdm4];
  // return resultado;

  // Creamos la excusa y la ponemos en el h1 con id excusa
  document.querySelector("#excusa").innerHTML =
    excusa(Quien) + excusa(Que) + excusa(Objeto) + excusa(CuandoComo);

  function boton() {
    document.querySelector("#excusa").innerHTML =
      excusa(Quien) + excusa(Que) + excusa(Objeto) + excusa(CuandoComo);
  }

  boton();

  document.getElementById("actualizador").addEventListener("click", function() {
    boton();
  });
};
