import { getJoao, getMaria, setJoao, setMaria, deJoaoParaMaria, deMariaParaJoao } from "./joaoEMaria.js";

console.log('módulo main');

console.log('João tem ', getJoao(),' maçãs!');
console.log('Maria tem ', getMaria(),' maçãs!');

setJoao(5);

console.log('João tem ', getJoao(),' maçãs!');
console.log('Maria tem ', getMaria(),' maçãs!');

deJoaoParaMaria();

console.log('João tem ', getJoao(),' maçãs!');
console.log('Maria tem ', getMaria(),' maçãs!');


