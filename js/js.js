setTimeout(loadInicio, 2000);
//INICIO EVENTO CALCULOS
botonCalcular.onclick = function eventoCalc() {
  recargaObjetosValue(ruedaV, ruedaN);
  /*INICIO VALIDACIONES CAMPOS OBLIGATORIOS*/
  validaValuesN(ruedaV, ruedaN);
  /*FINAL VALIDACIONES CAMPOS OBLIGATORIOS*/
  //INICIO CALCULOS
  if (validaValuesN(ruedaV, ruedaN) == false) {
    console.log("Es false");
  } else {
    calculosN(ruedaV);
    calculosN(ruedaN);
    ocultarInputs();
    pintarResultados(ruedaV, ruedaN);
    var diferencia = calDiferencias(ruedaV.diametro, ruedaN.diametro);
    if (diferencia <= ruedaN.tolerancia && diferencia >= -ruedaV.tolerancia) {
      document.getElementById("idAviso").innerHTML = "Si son compatibles.";
    } else {
      document.getElementById("idAviso").innerHTML = "No son compatibles.";
    };
    document.getElementById('idBtn1').style.display = "none";
  };
};
//FINAL EVENTO CALCULOS