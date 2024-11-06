//b
//Algoritmo 2
//Esse Algoritimo declara um array de números chamado "numbers" de tamanho 5 [1,2,3,4,5], será utilizado o método map para multiplicar
//cada elemento desse array, esses elementos serão salvo em um novo array "output" [2,4,6,8,10] com o mesmo tamanho de "numbers".

const numbers = [1, 2, 3, 4, 5]; //Declara um array de números chamado "numbers" com 5 elementos.
const output = numbers.map((x) => x * 2); //Declara um novo array chamado "output", onde esse array recebe o array
//"numbers" com o método map, esse método map recebe como parâmetro uma aerrow function como callback e retorna
//cada elemento (x) do array multiplicado por 2. Será salvo no array "output" todos os elementos de "numbers" multiplicado
//por 2

console.log(numbers); //Imprime os elementos de numbers
console.log(output); //Imprime os elementos de output