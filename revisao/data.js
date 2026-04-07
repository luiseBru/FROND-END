let dataAtual = new Date();
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minutos = dataAtual.getMinutes();
let segundos = dataAtual.getSeconds();

console.log(`${dia < 10 ? `0${dia}` : dia }/${mes < 10 ? `0${mes}`: mes}/${ano} ${hora}:${minutos}:${segundos}`);