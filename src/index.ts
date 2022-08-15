let btnEnviar = document.getElementById("btnEnv");
function dibujarGuiones() {
  let linea: string = "";
  let contador: number = 0;
  for (contador = 0; contador <= 40; contador++) {
    linea += "-";
  }
  console.log(linea);
}
function calcularResultado() {
  //siguiendo con la explicacion de mas abajo, como no estoy pasando valores
  // entonces no uso ningun parametro en la funcion y declaro las variables como estan a continuacion.
  //si llegara a pasar algun valor por parametro no hace falta declar abajo con let y : number
  let valor1: number = Number(dato1.value);
  let valor2: number = Number(dato2.value);
  let accion: number = Number(dato3.value);
  let resultado: number = 0;
  if (accion === 1) {
    resultado = valor1 + valor2;
  } else {
    if (accion === 2) {
      resultado = valor1 - valor2;
    } else {
      console.log("El valor ingresado para elegir la acción tiene un error.");
    }
  }
  return resultado;
}
btnEnviar.addEventListener("click", () => {
  let resultado = calcularResultado(); //aca los argumentos que usas son valores, o sea ya estas pasando algo
  //y en este caso esos valores no salen de ningun lado, o los obtenes y los pasas como argumentos
  //o los obtenes dentro de la funcion, como es el caso propuesto
  dibujarGuiones(); //verificar siempre que este bien escrito todo!! aca deciadibujarGuines
  console.log("El resultado de la operación es:", resultado);
  dibujarGuiones(); //!
});
