/*-	1. Loop de pares
Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
En caso de que el número de  itlaeración, sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.
*/



/* function loopDePares(num){
    for(let i = 0; i <= 100; i++){
      if(i === num){
         if( num % 2 === 0){
             console.log('este nuemro es par')
         } else{
             console.log(i)
         }
      } else {
          console.log(i)
      }

    }
}
loopDePares(10);
 */



/*-	2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
*/


 /* function loopDeImpares(num, palabra){

    for(let i = 0; i <= 100; i++){
        if(i === num){
            if(num % 2 ){
                console.log(palabra)
            } else{
                console.log(i)
            }
         } else {
             console.log(i)
         }  
       
    }
}
loopDeImpares(15, 'Hello world'); */



/*
-	3. Sumatoria
    Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
Ejemplo: 
-	sumattion(3) debe retornar 6 porque hace (1 +2 +3)
-	sumattion(8) debe retornar 36



function sumattion(num){
    let result = 0
    for(let i=0; i<= num; i++){
        result += i
    }
    return result
}
console.log(sumattion(8));
*/

/*
-	4. Callback
Debes crear una Función llamada callback que reciba como Parámetros un número y una Función. Esta deberá retornar el resultado de esa función pasándole como argumento el número que llega por parámetro.

Teoria de callbacks: click aqui

Ejemplo:
-	callback(5, (num)=>{return num*10}) debe retornar 50
-	callback(25, (num)=>{return num/5}) debe retornar 5
*/
/*

function callbacks(num, funcion){
   return  funcion(num);
}
console.log(callbacks(5 , (numero)=>{return numero * 10}));
console.log(callbacks(25, (numero)=>{return numero / 5}));
*/



/*
-	5. Nuevo Arreglo

Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

Ejemplo: 
-	nuevoArreglo(5) debe retornar [1,2,3,4,5]
-	nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

 */

/*
function  nuevoArreglo(num){
    let arr = [];
    for(let i = 1; i<= num; i++){
        arr.push(i);
    }
    return arr;
}
console.log(nuevoArreglo(10));
*/


/*
-	6. Similar String.split()
Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

Ejemplo: 
-	split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
-	split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

*/
/*
function split(string) {
    let arr = [];
    for(let i = 0; i < string.length; i++){
       arr.push(string[i]);
    }
    return arr
}
console.log(split('Hola'));

console.log(split('chaito'));
*/


/*
Carácter del medio
Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

Ejemplo: 
-	middleCharacter(“plataforma5”) debe retornar “f”
-	middleCharacter(“hola”) debe retornar “ol”
-	middleCharacter(“cosas”) debe retornar “s”

 */
/*
function middleCharacter(string){
    for(let i = 0; i <string.length; i++){
        let info 
        if(string.length % 2){
            let resul = Math.floor(string.length / 2)
            info = string[resul];
        }else {
            let resul = string.length / 2
            let resul2 = (string.length / 2)-1
            info =  string[resul2] + string[resul]  
        }
       return info
    }
}

console.log(middleCharacter('plataforma5'))
console.log(middleCharacter('hola'))
console.log(middleCharacter('cosas'))
*/


/* 
- 8. Mover ceros a lo último
Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

Ejemplo: 
-	moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
-	moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

*/

/*
 function comapra(a ,b){
    return a + b 
}
 function moveZeros(arr){
    let nuevoArr = []
    arr.filter((items, index) =>{
        if(items === 0){
            arr.splice(index,1);
            nuevoArr.push(items)
        }
    });
    return arr.concat(nuevoArr);
} 

console.log(moveZeros([1,5,2,0,1,0,1,45])) 
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) 
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

/* 
-	moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
-	moveZeros([]) debe retornar [1,2,1,1,3,1,0,0,0,0] */

/**
Manejando dos arreglos
Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

Ejemplo:
-	arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 

Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a

*/
/*
function arrayHandler(arr1, arr2){

    if(arr1.length === arr2.length){
        for(let i = 1; i <= arr2.length; i++){
            console.log( `soy ${arr1[i -1]} y yo soy ${arr2[i - 1]}`)
        }
          // for(let num in arr2){
         //   console.log(`Soy ${num} y yo soy ${arr2[num]}`)
        // } 
    }
}
arrayHandler([1,2,3,4], ['h','o','l','a']);
*/


/*
-	10. Mezclando arreglos
Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

Ejemplo: 
-	mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
-	mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
-	mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]
 
*/
/*
function mezclarArreglos(arr1, arr2){
    let nuevoArr = []
    if(arr1.length >= arr2.length){
        for(let i = 1; i <= arr1.length; i++){
            nuevoArr.push(arr1[i -1], arr2[i -1]);
           
        }
    } else if(arr1.length < arr2.length){
        for(let i = 1; i <= arr2.length; i++){
            nuevoArr.push(arr2[i -1], arr1[i -1]);
        }
    }
    
    for(let i = 0; i < nuevoArr.length; i++){
        if(nuevoArr[i] === undefined){
            nuevoArr.splice(i,1);
        }
    }
    return nuevoArr
}
console.log(mezclarArreglos([1,2,3,4],['h','o','l','a']));
console.log(mezclarArreglos([1,2,3,4], ['h','p']));
console.log(mezclarArreglos(['h','p'], [1,2,3,4]));

*/
/*
-	11. Arreglos
Investiga los siguientes métodos de los arreglos y replica su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5: 
-	1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
-	2. “pop([1,2,3,4,5])” debe retornar 5
-	3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
-	4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]

*/
/*

// 1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”

let join = (num, simbol )=>{
    let arr = []
    for(let i = 1; i <= num.length; i++){
        arr.push(i);
    }
    return arr.join(simbol)
}

console.log(join([1,2,3,4,5],' | '));
*/
/*
//2. “pop([1,2,3,4,5])” debe retornar 5

let pop = (num)=>{
    let arr = []
    for(let i = 0; i < num.length; i++){
        arr.push(num[i]);
    }
    let sacarElement = arr.pop()
    return sacarElement
}
console.log(pop([1,2,3,4,5]));
*/

/*
// 3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
function filter(num){
    let result = num.filter(e => {return e % 2 === 0});
    return result
}

console.log(filter([1,2,3,4,5]));
*/


/*
// 4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]

let map = (num)=>{
    let result = num.map((e) =>{ return e *10});
    return result
}
console.log(map([1,2,3,4,5]));*/



/*
-	12. Mínima Suma
Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.

Ejemplo: 
-	minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
-	minSum([1, 10, 43, 900, 20, 8]) debe retornar 9

*/
/*
function minSum(arr){
    let order = arr.sort((a,b) => a-b);
    let sumaMin = order[0] + order [1]
    return sumaMin;
}
console.log(minSum([7, 5, 6, 5, 4, 3, 2, 1]));
console.log(minSum([1, 10, 43, 900, 20, 8]));
*/


/*
-	13. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

Ejemplo:
-	arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
-	arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]
*/
/*
function arregloDeObjetos(num){
    let arr = []
    for(let i = 1; i <= num; i++){
    let obj = {valor: i}
    arr.push(obj)
    }
    return arr
}

console.log(arregloDeObjetos(5))
console.log(arregloDeObjetos(3))
*/
/*

-	14. Arreglo de objetos 
Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

Ejemplo:
-	arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
-	arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]
*/

/*
function arregloDeObjetos(num, palabra){
    let arr = [];
    for(let i = 1; i <= num; i++){
        let obj = {[`${palabra}`] :  i}
        arr.push(obj)
    }
    return arr
}
console.log(arregloDeObjetos(5, 'hola'));
console.log(arregloDeObjetos(3, 'chau')); 
*/
/*
-	15. Única propiedad
Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 

Ejemplo: 
 var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
-	oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
-	oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]
*/
/*

 var  arreglo = [{
    nombre: 'Diego', edad: 21, hobby: 'Jugar Video juegos'
    }, 
    {
    nombre: 'lucas', edad: 22, hobby: 'cocinar' 
    }, 
    {nombre: 'Abigail', edad: 20, hobby: 'practicar Baile'}]  

function oneProperty(arr, string){
    let nuevoArr = [];
        
    if(arr && string){
        for(let items in arr ){
            let valor = arr[items][string];
            if(valor != undefined){
                let obj = {[`${string}`] : valor};
                nuevoArr.push(obj);
            } else{
               return 'Error! ingresa un dato correcto'
            }

           }
    } else{
        return 'Completa los campos'
    }
    return nuevoArr
}

console.log(oneProperty(arreglo,'edad'));
console.log(oneProperty(arreglo, 'nombre'));
console.log(oneProperty(arreglo, 'hobby'));  


var  arreglo2 = [{
    name: 'maria', edad: 26, hobby: 'Jugar Video juegos'
    }, 
    {
    name: 'jorge', edad: 32, hobby: 'cocinar' 
    }, 
    {name: 'lucas', edad: 17, hobby: 'practicar Baile'
}]

console.log(oneProperty(arreglo2, 'name'));

*/


/*
-	16. Guerra de palabras
      Utils: 
 var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}


Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).

Ejemplo:
-	warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
-	warWord(“love”, “friendship”) debe retornar “friendship”

*/

/*
function warWords(palabra1, palabra2) {
    if (palabra1 && palabra2) {
        var abc = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
        let arr1 = [];
        let arr2 = [];
        for (var items in abc) {
            for (let i = 0; i <= palabra1.length; i++) {
                if (items === palabra1[i]) {
                    arr1.push(abc[items]);
                }
            }
        }
        for (var items in abc) {
            for (let i = 0; i <= palabra2.length; i++) {
                if (items === palabra2[i]) {
                    arr2.push(abc[items]);
                }
            }
        }
        let sumaTotalA = arr1.reduce((acc, num) => { return acc + num });

        let sumaTotalB = arr2.reduce((acc, num) => { return acc + num });
        if (sumaTotalA > sumaTotalB) {
            return palabra1
        } else {
            return palabra2
        }
    } else {
        return ('por favor ingresa los dos campos')
    }
}

console.log(warWords('hola', 'chau'));
console.log(warWords('love', 'friendship'));
*/


/*
-	17. Prefijos Telefónicos
    Utils:
    var prefijos = [54, 55, 56, 57, 58]
 var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

1.	Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
ejemplo : 

{
    54: “Argentina”,
    55: ”Brasil”,
    56: ”Ecuador”,
    57: ”Bolivia”
}

2.	Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
3.	En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”

Ejemplo: 
-	validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
-	validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
-	validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países”

*/

/*
var prefijos = [54, 55, 56, 57, 58];
var paises = ["argentina", "brasil", "Peru", "colombia", "venezuela"];
function validarPrefijo(num) {
    let arr = [];
    let pref = num + arr
    if (num || pref ) {
        let obj = {};
        for (let i = 0; i < prefijos.length; i++) {
            obj[prefijos[i]] = paises[i];
        }

        for (let i = 0; i < prefijos.length; i++) {
            if (pref[0] + pref[1] == prefijos[i]) {
                let result = prefijos[i]
                return `Este número pertenece a ${paises[i]}`
               
            } 
        }
        return 'El número no pertenece a nuestros países'
    }
}
console.log(validarPrefijo(5655564645));
console.log(validarPrefijo(5412345678));
console.log(validarPrefijo(5712345678));
console.log(validarPrefijo(8012345678));
*/





/* 
    -	18. {value: key} kelue: vay

Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.

	Ejemplo:
-	reverseKeys(344) debería devolver “error, input can’t be a number”
-	reverseKeys([ ]) debería devolver “error, input can’t be an Array”
-	reverseKeys(‘hola’) debería devolver “error, input can’t be a string”





var prueba = {
	nombre: ‘santi’,
	edad: 22,
	nacionalidad: ‘de otro planeta’,
	documento: 44444444
	
}
-	reverseKeys(prueba) debería devolver:
{
santi: ‘nombre’, 
edad: 22,
‘’de otro planeta”: nacionalidad,
 documento: 44444444
}

*/


/* 
var prueba = {
	nombre: 'santi',
	edad: 22,
	nacionalidad: 'de otro planeta',
	documento: 44444444
	
}

function reverseKeys(obj){

if(typeof obj === 'string'){
    return 'El input no acepta texto'
}
if(typeof obj === 'number'){
    return 'El input no puede contener números'
}

if(Array.isArray(obj)){
    return 'El input no acepta arreglos'
}
if(typeof obj === 'object'){
    return obj
} 

}
console.log(reverseKeys(`Hola`));
console.log(reverseKeys(1808));
console.log(reverseKeys([]));
console.log(reverseKeys(prueba));
 */


/* 
-	19. Palindromo
Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.

Definición de palíndromo aquí.

Ejemplo: 

-	palindromo(“anilina”) debe retornar true
-	palindromo(“Ana”) debe retornar true
-	palindromo(“Enrique”) debe retornar false

*/

/*

function palindromo(palabra) {
let palindromo = palabra.split('').reverse().join('');

return palindromo === palabra ? true : false
    
  }
 console.log(palindromo('anilina')) // debe retornar true
 console.log(palindromo('ana')) // debe retornar true
 console.log(palindromo('Enrique')) // debe retornar false

*/
/*
-	20. Rotación de arreglo a la derecha
Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.

Ejemplo: 
-	rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
-	rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]
*/

/*
function rotar(arr, num){  
let rotar =  arr.splice(arr.length - num , num);
return rotar.concat(arr);

}
console.log(rotar([1,2,3,4,5], 4));
console.log(rotar([1, 2, 3, 4, 5], 2));
console.log(rotar([1, 2, 3, 4, 5], 3));
*/


/* -	21. Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string. 
Ejemplo: 
-	consecutivosSimilares(“AAAA”) debe retornar 3
-	consecutivosSimilares(“BBBBB”) debe retornar 4
-	consecutivosSimilares(“ABABABAB”) debe retornar 0
-	consecutivosSimilares(“BABABA”) debe retornar 0
-	consecutivosSimilares(“AAABBB”) debe retornar 4
 */

/*
function consecutivosSimilares(str){
    let arr = []
     for(let i = 0 ; i < str.length; i++){
        if(str[i] === str[i + 1]){
            arr.push(str[i]);
        }
    } 
    return arr.length;
}

console.log(consecutivosSimilares('AAAA'));
console.log(consecutivosSimilares('BBBBB'));
console.log(consecutivosSimilares('ABABABAB'));
console.log(consecutivosSimilares('BABABA'));
console.log(consecutivosSimilares('AAABBB'));
*/