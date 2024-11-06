//e
//Algoritmo 5
//Esse algoritimo itera um array de objetos "users" utilizando o método MAP para fazer a iterção do array
//MAP recebe uma aerrow function como callback, esse callback recebe uma desestruturação de objeto e retorna o nome e o
//sobre nome do usuario.
const users = [
  { firstName: "john", lastName: "colben", age: 26 },
  { firstName: "jimmy", lastName: "fred", age: 75 },
  { firstName: "sam", lastName: "boston", age: 50 },
  { firstName: "ronald", lastName: "bristh", age: 26 },
]; //Declara um array de Objetos (Json) de usuarios.

const output = users.map(({ firstName, lastName }) => firstName + " " + lastName);
//Declara um novo array "output"
//"output" recebe "users" com o método map
//O método map recebe como callback uma aerrow function
//Essa aerrow function recebe como parâmentro uma desestruturação do array de objetos {fistName, lastName}
//Desse modo fica mais simples a manipulação dos dados, o callback retorna o nome e o sobre nome do usuario
//nome e sobrenome serão salvos no array "output".

console.log(output);//Imprime o array output
