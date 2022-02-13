/**************************
    ---------------------------------------------------------------------------------
    ---------------------------------------------------------------------------------
    Tenemos tres funciones:

    1 funcion que valida todo el formulario ---->function validarForm()
    1 funcion para validar el usuario- --->function validarUser()
    1 funcion para validar la password ---->function validarPassword()
    ---------------------------------------------------------------------------------
    ---------------------------------------------------------------------------------
*****************************************************/


function validarForm() {

    var okNombre = validarUser(); /* comprobamos que el usuario esta correcto pasandole la funcion que comprueba el campo Nombre */
    var okPassword = validarPassword(); /* comprobamos que el usuario esta correcto pasandole la funcion que comprueba el campo Nombre */


    if (okNombre && okPassword) /* -------------si el nombre y password  estan ok se cumplen se valida nuestro formulario    */

        return true;

    return false;
}

/* ----------------------------------------------------------------------------
 Función validar el campo Usuario
  ----------------------------------------------------------------------------*/
function validarUser() {
    var ok = true; //bolean
    var msgError = ""; //mesaje de error
    var nombre = document.getElementById("nombre").value; //Devuelve una referencia al elemento por su id "nombre"
    var divNombre = document.getElementById("divNombre"); //Devuelve una referencia al elemento por su id "divnombre"
    var error = document.getElementsByClassName("error")[0]; //Retorna un objecto precido a un array de los elementos hijos que tengan todos los nombres de clase indicados "error"

    divNombre.style.border = "";
    error.innerHTML = "";

    if (nombre.length < 3 || nombre.length > 12 || this.nombre.length == 0) {
        // --> Comprobamos tanto que el campo no esté vacío como la longitud de los caracteres sean entre de 3 a 12
        ok = false;
        msgError = "**********Error********** Campo Vacio Debe contenter entre 3 y 12 caracteres.-->Ej. de Nombres válidos: Ana,Pepe,Luis..";

    } else if (/^\s+$/.test(nombre)) {

        /* Comprobamos que no esté compuesto sólo por espacios en blanco
         \s -->Hace match con un espacio en blanco .
         $ -->El símbolo dólar indica que la letra anterior ha de ser obligatoriamente última letra de la cadena
       */

        ok = false;
        msgError = "**********Error********** Este campo no puede contener sólo espacios en blanco";

    } else if (/^\d+$/.test(nombre)) {
        /*  Comprobamos que no sea un número
       $ -->El símbolo dólar indica que la letra anterior ha de ser obligatoriamente última letra de la cadena
       \d --> Hace match con cualquier número entre 0 y 9
         */
        ok = false;
        msgError = "**********Error********** Este campo no puede ser un número";

    } else if (/^([a-z]+\s?)+$/.test(nombre)) {
        /*
        ->Si está compuesto por letras nada más, le damos el ok.
        --> El símbolo ^ (denominado “exponente”) indica comienzo de la cadena por ese símbolo.
        --> [a-z] -->Cadenas que empiezan de a hasta la z
        --> \s -->Hace match con un espacio en blanco.
        -->$ El símbolo dólar indica que la letra anterior ha de ser obligatoriamente última letra de la cadena
        --> SI CUMPLIMOS TODO LO ANTERIOR SE VALIDA ok
        */
        ok = true;

    } else {
        ok = false;
        msgError = "**********Error********** Debe contener letras en mínusculas";
    }

    if (!ok) { // Si-->Cuadro con mensaje de error en pantalla pintado con borde rojo
        divNombre.style.border = "4px solid red";
        error.innerHTML = msgError;
        return false;
    }
    return true;
}


/* ----------------------------------------------------------------------------
 Función validar el campo Password
  ----------------------------------------------------------------------------*/

function validarPassword() {

    var ok = true; //bolean
    var msgError = ""; //mensaje de error
    var Password = document.getElementById("Password").value; //Devuelve una referencia al elemento por su id "Password"
    var divPassword = document.getElementById("divPassword"); //Devuelve una referencia al elemento por su id "divPassword"
    var error = document.getElementsByClassName("error")[1]; //Retorna un objecto precido a un array de los elementos hijos que tengan todos los nombres de clase indicados "error"

    divPassword.style.border = "";
    error.innerHTML = "";

    if (Password.length == 0) { /* --- Comprobar que la contraseña no este vacia */
        ok = false;
        msgError = "**********Error********** Campo Password Vacio";

    } else if (/[A-Z]{1}[.,-]{1}[a-z0-9]{6}/.test(Password)) {
        ok = true;
        /* ---
        El formato de la contraseña será el siguiente: una letra mayúscula, seguida de uno de estos tres caracteres especiales punto(.),
         coma(,) o guion medio(-), a continuación seis letras en minúscula, 
         o seis números o combinación de ambos (letras y números). 
         Ej. de contraseñas válidas: A.carbot, F,as14dg, H-951357
        Si la contraseña cumple estos requisitos damos por ok.
        */
    } else {
        ok = false; /* --- Si no se cumple volveremos a indicar que se corrija la password y damos una sugerencia*/
        msgError = "**********Error********** Campo Password Incorrecto (debe contenter -->Ej. de contraseñas válidas: A.carbot, F,as14dg, H-951357) ";
    }


    if (!ok) { // Si negamos la sentencia buleando envia -->Cuadro con mensaje de error en pantalla pintado con borde rojo
        divPassword.style.border = "4px solid red";
        error.innerHTML = msgError;
        return false;
    }
    return true;
}
