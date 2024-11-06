//d
//Algoritmo 4
// Esse algoritimo irá iterar um array existente "arr" passando o método Filter para filtrar os elementos
// maiores que 4, esses elementos serão salvo no array "output". O método Filter recebe como callback uma aerrow function
// que verifica se o elemento é maior que 4.

const arr = [1, 2, 3, 4, 5] //Declara um array de números "arr"
const output = arr.filter((x) => x > 4);
//Declara um novo array "output"
//Esse array recebe "arr" com o método Filter, e uma aerrow function como callback
//Esse método irá filtrar o array "arr" e irá retornar apenas os números maiores que 4
//Os números que forem maiores que 4 serão salvo no array "output"

console.log(output); //Imprime o array output
