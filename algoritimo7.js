//g
//Algoritmo 7
//Esse algoritimo possui um array de objetos de estudantes, ele irá receber o método FILTER para filtrar
//apenas os estudantes maiores de 18 anos, esses estudantes serão salvos em um novo array "details".

let estudantes = [
  { nome: "João", idade: 15 },
  { nome: "Maria", idade: 20 },
  { nome: "Felipe", idade: 22 },
  { nome: "Pedro", idade: 12 },
  { nome: "Joana", idade: 18 },
]; //Declara um Array de objetos (Json) de estudantes

const details = estudantes.filter(({ idade }) => idade >= 18);
//Declara um novo array "details".
//Esse array recebe o array de estudantes passando o método filter para filtrar o array.
//O filter recebe uma aerrow function como callback, esse callback recebe como parâmentro uma
//desestruturação {idade}, a função vai retornar apenas os estudantes que possuem as idades maiores que 18 anos.
//Os estudantes maiores que 18 anos serão salvos no array "details".


console.log(details.length); //Imprime o tamanho do array "details".

