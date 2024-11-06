//c
//Algoritmo 3
//Esse algoritimo pega um array existente "numbers" [1,2,3,4,5] e irá retornar um novo array filtrado apenas com os números
//ímpares, no caso "output" [1,3,5]. É utilizado o método Filter para fazer a iteração e uma aerrow function como callback.

const numbers = [1, 2, 3, 4, 5]; //Declara um array de números com 5 valores
const isOdd = (x) => x % 2;//Declara uma aerrow function chamada "isOdd", ela recebe como parâmentro um número e a função
//irá verificar se esse número é ímpar.

const output = numbers.filter(isOdd);//Declara um novo array "output" que recebe o array "numbers" com o método FILTER
//esse método recebe a função "isOdd" como callback. O método FILTER irá iterar cada elemento de numbers e "isOdd" irá
//verificar se esse elemento é um número ímpar, se esse número é ímpar, irá retornar true, caso contrario irá retornar false.
//Os elementos que forem ímpar serão salvo em "output".

console.log(output); //Imprime os elementos de "output"
