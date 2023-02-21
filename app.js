//Validar un IBAN
console.log("Validar un IBAN");
//Caso 1
//Dado este IBAN:
//Validar que se informa con dos letras, y los números correspondientes.

const IBAN = "ES6600190020961234567890";
var pattern1 = new RegExp(/^[A-Z]{2}\d{22}$/, i);
var caso1 = pattern1.test(IBAN);
console.log("Caso 1 " + IBAN + " => " + caso1);

//Caso 2
//Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:

const IBAN2 = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
var pattern2 = new RegExp(/^[A-Z]{2}\d{2}\s?(\d{4}\s?){5}$/),
  i;
IBAN2.forEach((string) => {
  console.log("Caso 2 " + string + " => " + pattern2.test(string));
});

//Caso 3
//Vamos a extraer el código de páis y el dígito de control.

const IBAN3 = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
var pattern3 = /(^[A-Z]{2})(\d{2})\s?(\d{4}\s?){5}$/i;
IBAN3.forEach((string) => {
  var extraer = pattern3.exec(string);
  console.log(
    "Caso 3 " +
      string +
      " => Código de páis = " +
      extraer[1] +
      ". Dígito de control = " +
      extraer[2] +
      "."
  );
});

//Validar matrícula coche
console.log("Validar matrícula coche");
//Caso 1
//Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:

var matriculas = ["GMD 2021", "2345-GMD", "4532BDB", "0320-AAA"];
var pattern4 = /^\w{3,4}(\s|-)?\w{3,4}$/;
for (let i = 0; i < matriculas.length; i++) {
  console.log(
    "Caso 1 " + matriculas[i] + " => " + pattern4.test(matriculas[i])
  );
}

//Caso 2
//Vamos a extraer por un lado la parte numérica y por otro las letras.
var pattern5 = /(^\w{3,4})(\s|-)?(\w{3,4})$/;
for (const matricula of matriculas) {
  var extraer2 = pattern5.exec(matricula);
  console.log("Caso 2 " + matricula + " => " + extraer2[1] + " " + extraer2[3]);
}
//----------------------------------------------------------------------------------------------------------------
//Opcionales
console.log("Opcionales");
console.log("Extraer imágenes de un fichero HTML");
//Una utilidad divertida es implementar una aspiradora de imagenes, es decir de un HTML extraer de todos los tags img el //contenido de src en ese contenido tenemos las URL a las imágenes.

//Caso 1
//De una sola linea extraer el contenido de src:
var codigo =
  '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';
var pattern6 = /(img src=(["|'])(.{1,})(["|']))/i;
var extraer3 = codigo.match(pattern6);
console.log("Caso 1 " + codigo + " => " + extraer3[3]);

//Caso 2
//De un HTML extraer todos los src de todos los objetos img:

var codigo2 = `<html>
        <body>
            <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
            <h1>ejemplo</h1>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
        </body>
    </html>`;
var pattern7 = /(img src=["|'](.{1,})["|'])/gim;
var extraer4 = codigo2.match(pattern7);
console.log("Caso 2 " + codigo2);
for (let i = 0; i < extraer4.length; i++) {
  mostrar = extraer4[i].match(pattern6);
  console.log("URL => " + mostrar[3]);
}

console.log("Validar sintaxis tarjeta de crédito");

//En nuestra aplicación tenemos un apartado para que el usuario pueda introducir los datos de su tarjeta de crédito máster card, para ello vamos a tener en cuenta:

//Que una máster card tiene una longitud de 16 caracteres (numeros).
//Que tiene que empezar con 50,51,52,53,54,55.
//Qué lo normal es que se agrupen en conjuntos de 4 digitos.
//Ejemplo:
//5299 6400 0000 0000";

console.log("Caso 1");
//Vamos a validar los siguientes formatos (todos válidos)

var tarjetas = {
  tarjeta1: "5299 6400 0000 0000",
  tarjeta2: "5299-6400-0000-0000",
  tarjeta3: "5299640000000000",
};
var pattern8 = /^5[0-5]\d{2}(\s|-)?(\d{4}(\s|-)?){2}\d{4}$/;
for (const element in tarjetas) {
  var verdadero = pattern8.test(tarjetas[element]);
  console.log(element + " " + tarjetas[element] + " => " + verdadero);
}

console.log("Caso 2");
//Vamos a extraer cada grupo de cuatro digitos.
var pattern9 = /(^5[0-5](\d{2}))(\s|-)?(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})$/;
for (const element in tarjetas) {
  var verdadero = tarjetas[element].match(pattern9);
  console.log(
    "Números extraidos de " +
      element +
      ": " +
      verdadero[1] +
      verdadero[4] +
      verdadero[6] +
      verdadero[8]
  );
}

// En este ejercicio vas a buscar una serie de expresiones regulares y validar si la expresión dada es correcta:
console.log("Buscar Expresiones regulares");

console.log("Busqueda 1: Comprobar si una clave es fuerte o no:");
var contraseñas = ["123!!GGhhppp", "AAAaaa777mm"];
// Complejo: que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un numero y un caracter especial.
var patternCompleja = /^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
console.log("Prueba de clave compleja");
for (const contraseña of contraseñas) {
  console.log(
    "La contraseña: ",
    contraseña,
    "=>",
    patternCompleja.test(contraseña)
  );
}
// Moderado: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.
var patternModerada = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;
console.log("Prueba de clave moderada");
for (const contraseña of contraseñas) {
  console.log(
    "La contraseña: ",
    contraseña,
    "=>",
    patternModerada.test(contraseña)
  );
}

// Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó www.lemoncode.net ó lemoncode.net).
console.log("Busqueda 2: Validar una URl");

var urls = [
  "https://www.lemoncode.net",
  "www.lemoncode.net",
  "lemoncode.net",
  "www.novalida",
];
let patternURL =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
for (const url of urls) {
  console.log("Validacion de la URL:", url, "=>", patternURL.test(url));
}

// Validar que un color en Hexadecimal esta bien formado.
console.log("Busqueda 3: Validar un color Hexadecimal");
var colors = ["#B8FFA5", "#FFF45B", "#AJC566"];
var patternColor = /^#([0-9A-Fa-f]{3}){1,2}$/;
colors.forEach((color) => {
  console.log("Validación del código", color, "=>", patternColor.test(color));
});
