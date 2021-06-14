// INICIO DECLARACION DE OBJETOS, CONST, Y VAR GENERALES
const pi = Math.PI;
function rueda(ancho, perfil, radial){
  this.ancho = ancho;
  this.perfil = perfil;
  this.radial = radial;
};
var botonCalcular = document.getElementById("idBtn1");
var botonReiniciar = document.getElementById("idBtn2");
var botonReset = document.getElementById("idBtn3");
//INICIO DECLARACION OBJETOS NEUMATICO
var ruedaV = new rueda();
var ruedaN = new rueda();
//FIN DECLARACION OBJETOS NEUMATICO

//FINAL DECLARACION DE OBJETOS, CONST, Y VAR GENERALES

//INICIO DECLARACION DE FUNCIONES FORMULAS
function calPerfil(a, b){
  return a / 100 * b;
};
function calPerfilT(a){
  return a * 2;
};
function calRadialmm(a){
  return a * 25.4;
};
function calDiametro(a, b) {
  return a + b;
};
function calRadio(a){
  return a / 2;
};
function calDesarrollo(a) {
  return 2 * pi * a;
};
function calTolerancia(a) {
  return 3 * a.diametro / 100;
};
function calDiferencias(a, b) {
  return a - b;
};
//FIN DECLARACION DE FUNCIONES FORMULAS

//INICIO FUNCIONES EVENTO NEUMATICO VIEJO DE VALIDACION

function recargaObjetoNV(a){
    /*Rueda Vieja Recarga de variables*/
    a.ancho = document.getElementById("idAnchoN1");
    a.perfil = document.getElementById("idPerfilN1");
    a.radial = document.getElementById("idRadialN1");
};
function recargaValueNV(a){
  /*Rueda Vieja Recarga de variables*/
  a.ancho = document.getElementById("idAnchoN1").value;
  a.perfil = document.getElementById("idPerfilN1").value;
  a.radial = document.getElementById("idRadialN1").value;
};
function validaValueNV(a){
    /*INICIO VALIDACIONES CAMPOS OBLIGATORIOS*/
    for (var i in a) {
      if (a[i] <= 0) {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN1").style.borderColor = "red";
            break;
          case "perfil":
            document.getElementById("idPerfilN1").style.borderColor = "red";
            break;
          case "radial":
            document.getElementById("idRadialN1").style.borderColor = "red";
            break;
        };
        document.getElementById("idAviso1").innerHTML = "Introduzca numeros mayores a cero en la casilla '" + i + "' resaltada en rojo";
        return false;
      } else {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN1").style.borderColor = "";
            break;
          case "perfil":
            document.getElementById("idPerfilN1").style.borderColor = "";
            break;
          case "radial":
            document.getElementById("idRadialN1").style.borderColor = "";
            break;
        };
        document.getElementById("idAviso1").innerHTML = "";
      };
    };
};
function validaInputsNV(a){
    /*INICIO VALIDACIONES CAMPOS OBLIGATORIOS*/
    for (var i in a) {
      if (a[i] <= 0) {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN1").style.borderColor = "orange";
            break;
          case "perfil":
            document.getElementById("idPerfilN1").style.borderColor = "orange";
            break;
          case "radial":
            document.getElementById("idRadialN1").style.borderColor = "orange";
            break;
        };
        document.getElementById("idAviso1").innerHTML = "Introduzca numeros mayores a cero en la casilla '" + i + "'";
        return false;
      } else {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN1").style.borderColor = "";
            break;
          case "perfil":
            document.getElementById("idPerfilN1").style.borderColor = "";
            break;
          case "radial":
            document.getElementById("idRadialN1").style.borderColor = "";
            break;
        };
        document.getElementById("idAviso1").innerHTML = "";
      };
    };
};
//FINAL FUNCIONES EVENTO NEUMATICO VIEJO DE VALIDACION

//INICIO FUNCIONES EVENTO NEUMATICO NUEVO DE VALIDACION

function recargaObjetoNN(a){
    /*Rueda Vieja Recarga de variables*/
    a.ancho = document.getElementById("idAnchoN2");
    a.perfil = document.getElementById("idPerfilN2");
    a.radial = document.getElementById("idRadialN2");
};
function recargaValueNN(a){
  /*Rueda Vieja Recarga de variables*/
  a.ancho = document.getElementById("idAnchoN2").value;
  a.perfil = document.getElementById("idPerfilN2").value;
  a.radial = document.getElementById("idRadialN2").value;
};
function validaValueNN(a){
  for (var i in a) {
      if (a[i] <= 0) {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN2").style.borderColor = "red";
            break;
          case "perfil":
            document.getElementById("idPerfilN2").style.borderColor = "red";
            break;
          case "radial":
            document.getElementById("idRadialN2").style.borderColor = "red";
            break;
        };
        document.getElementById("idAviso2").innerHTML = "Introduzca numeros mayores a cero en la casilla '" + i + "' resaltada en rojo";
        return false;
      } else {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN2").style.borderColor = "";
            break;
          case "perfil":
            document.getElementById("idPerfilN2").style.borderColor = "";
            break;
          case "radial":
            document.getElementById("idRadialN2").style.borderColor = "";
            break;
        }
        document.getElementById("idAviso2").innerHTML = "";
      };
    };
};
function validaInputsNN(a){
  for (var i in a) {
      if (a[i] <= 0) {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN2").style.borderColor = "orange";
            break;
          case "perfil":
            document.getElementById("idPerfilN2").style.borderColor = "orange";
            break;
          case "radial":
            document.getElementById("idRadialN2").style.borderColor = "orange";
            break;
        };
        document.getElementById("idAviso2").innerHTML = "Introduzca numeros mayores a cero en la casilla '" + i + "'";
        return false;
      } else {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN2").style.borderColor = "";
            break;
          case "perfil":
            document.getElementById("idPerfilN2").style.borderColor = "";
            break;
          case "radial":
            document.getElementById("idRadialN2").style.borderColor = "";
            break;
        };
        document.getElementById("idAviso2").innerHTML = "";
      };
    };
};

//FINAL FUNCIONES EVENTO NEUMATICO NUEVO DE VALIDACION

//INICIO FUNCIONES EVENTO CALCULOS

function recargaObjetosValue(a, b){
  /*Rueda Vieja Recarga de variables*/
  a.ancho = document.getElementById("idAnchoN1").value;
  a.perfil = document.getElementById("idPerfilN1").value;
  a.radial = document.getElementById("idRadialN1").value;
  /*Rueda Nueva Recarga de variables*/
  b.ancho = document.getElementById("idAnchoN2").value;
  b.perfil = document.getElementById("idPerfilN2").value;
  b.radial = document.getElementById("idRadialN2").value;
};
function validaValuesN(a,b){
    for (var i in a) {
      if (a[i] <= 0) {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN1").style.borderColor = "red";
            document.getElementById("idAviso1").innerHTML = "Introduzca numeros mayores a cero en la casilla '" + i + "' resaltada en rojo";
            return false;
          case "perfil":
            document.getElementById("idPerfilN1").style.borderColor = "red";
            document.getElementById("idAviso1").innerHTML = "Introduzca numeros mayores a cero en la casilla '" + i + "' resaltada en rojo";
            return false;
          case "radial":
            document.getElementById("idRadialN1").style.borderColor = "red";
            document.getElementById("idAviso1").innerHTML = "Introduzca numeros mayores a cero en la casilla '" + i + "' resaltada en rojo";
            return false;
        };
        return false;
      } else {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN1").style.borderColor = "";
            break;
          case "perfil":
            document.getElementById("idPerfilN1").style.borderColor = "";
            break;
          case "radial":
            document.getElementById("idRadialN1").style.borderColor = "";
            break;
        };
        document.getElementById("idAviso1").innerHTML = "";
      };
    };
    for (var i in b) {
      if (b[i] <= 0) {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN2").style.borderColor = "red";
            document.getElementById("idAviso2").innerHTML = "Introduzca numeros mayores a cero en la casilla '" + i + "' resaltada en rojo";
            return false;
          case "perfil":
            document.getElementById("idPerfilN2").style.borderColor = "red";
            document.getElementById("idAviso2").innerHTML = "Introduzca numeros mayores a cero en la casilla '" + i + "' resaltada en rojo";
            return false;
          case "radial":
            document.getElementById("idRadialN2").style.borderColor = "red";
            document.getElementById("idAviso2").innerHTML = "Introduzca numeros mayores a cero en la casilla '" + i + "' resaltada en rojo";
            return false;
        };

        return false;
      } else {
        switch (i) {
          case "ancho":
            document.getElementById("idAnchoN2").style.borderColor = "";
            break;
          case "perfil":
            document.getElementById("idPerfilN2").style.borderColor = "";
            break;
          case "radial":
            document.getElementById("idRadialN2").style.borderColor = "";
            break;
        };
        document.getElementById("idAviso2").innerHTML = "";
      };
    };
    if (a==false&&b==false){
      return false;
    }else{
      return true;
    };
};
function calculosN(a){
  a.perfil = calPerfil(a.perfil, a.ancho);
  a.radial = calRadialmm(a.radial);
  a.perfilT = calPerfilT(a.perfil);
  a.diametro = calDiametro(a.radial, a.perfilT);
  a.radio = calRadio(a.diametro);
  a.desarrollo = calDesarrollo(a.radio);
  a.tolerancia = calTolerancia(a);
  return a;
};
function pintarResultados(a,b){
  document.getElementById("idTitDatV").innerHTML = "Datos técnicos";
  document.getElementById("idDiametroN1").innerHTML = "Diametro = "+a.diametro.toFixed(2);
  document.getElementById("idDesarrolloN1").innerHTML = "Desarrollo = "+a.desarrollo.toFixed(2);
  document.getElementById("idToleranciaN1").innerHTML = "Tolerancia = "+a.tolerancia.toFixed(2);
  document.getElementById("idTitDatN").innerHTML = "Datos técnicos";
  document.getElementById("idDiametroN2").innerHTML = "Diametro = "+b.diametro.toFixed(2);
  document.getElementById("idDesarrolloN2").innerHTML = "Desarrollo = "+b.desarrollo.toFixed(2);
  document.getElementById("idToleranciaN2").innerHTML = "Tolerancia = "+b.tolerancia.toFixed(2);
};

//FINAL FUNCIONES EVENTO CALCULOS

//INICIO FUNCIONES EVENTO LIMPIAR
function limpiar(){
  //Limpieza estilos e input Neumatico viejo
  document.getElementById("idTitDatV").innerHTML = "";
  document.getElementById("idAnchoN1").value = "";
  document.getElementById("idPerfilN1").value = "";
  document.getElementById("idRadialN1").value = "";
  document.getElementById("idDiametroN1").innerHTML = "";
  document.getElementById("idDesarrolloN1").innerHTML = "";
  document.getElementById("idToleranciaN1").innerHTML = "";
  document.getElementById("idAnchoN1").style.borderColor = "";
  document.getElementById("idPerfilN1").style.borderColor = "";
  document.getElementById("idRadialN1").style.borderColor = "";
  document.getElementById("idAviso1").innerHTML = "Introduzca las medidas del neumatico montado";
  document.getElementById('idFormV').style.display='block';
  //Limpieza estilos e input Neumatico nuevo
  document.getElementById("idTitDatN").innerHTML = "";
  document.getElementById("idAnchoN2").value = "";
  document.getElementById("idPerfilN2").value = "";
  document.getElementById("idRadialN2").value = "";
  document.getElementById("idDiametroN2").innerHTML = "";
  document.getElementById("idDesarrolloN2").innerHTML = "";
  document.getElementById("idToleranciaN2").innerHTML = "";
  document.getElementById("idAnchoN2").style.borderColor = "";
  document.getElementById("idPerfilN2").style.borderColor = "";
  document.getElementById("idRadialN2").style.borderColor = "";
  document.getElementById("idAviso2").innerHTML = "Introduzca las medidas del neumatico nuevo";
  document.getElementById('idFormN').style.display='block';

  document.getElementById('idBtn1').style.display="inline";

  //Limpieza estilos e input caja resultado
  document.getElementById("idAviso").innerHTML = "";
  };

function validInputsNV(a){
  recargaValueNV(a);
  validaInputsNV(a);
};
function validInputsNN(a){
  recargaValueNN(a);
  validaInputsNN(a);
};

function loadInicio(){
  document.getElementById('idInicio').classList.add('animated');
  document.getElementById('idInicio').classList.add('fadeOut');
  document.getElementById("idInicio").style.display="none";
  document.getElementById("idNav").style.display="flex";
  document.getElementById("idSecNeums").style.display="flex";
  document.getElementById("idPie").style.display="flex";
}

function animaModal(){
  document.getElementById('idInfoContenido').classList.add('animate');
  document.getElementById('idInfoContenido').classList.add('bounceIn');
}
function desAnimaModal(){
  document.getElementById('idInfoContenido').classList.remove('bounceIn');
  document.getElementById('idInfoContenido').classList.remove('animate');
}

function ocultarInputs(){
  document.getElementById('idFormV').style.display='none';
  document.getElementById('idFormN').style.display='none';
}
