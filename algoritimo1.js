// a.
//Algoritmo 1
//Esse algoritimo irá percorrer um array de números, onde cada elemento desse array será multiplicado por 2 e esses 
//elementos serão salvo em um novo array. É utilizado o método "map" para iterar os elementos, onde recebe uma aerrow function como callback

const numeros = [1, 2, 3, 4, 5]; // Declara um array de números com 5 valores
// Declara uma função que recebe como parâmetro um número e retorna esse número vezes 2

const numerosDobro = numeros.map((numero) => numero * 2); // Declara um novo array chamado numerosDobro, esse array 
//vai receber o array de "numeros"utilizando o método map, esse método recebe como parâmetro uma aerrow function como 
//callBack, o map irá iterar cada elemento do array NUMEROS e irá utilizar a função "calcularDobro" em cada elemento, 
//no final irá retornar um novo array que será salvo em "numerosDobro". 

console.log(numerosDobro);//Imprime os elementos do array
