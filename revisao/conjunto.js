const letras = new Set();

letras.add("a");
letras.add("b");
letras.add("c");

console.log(letras);
const letrasGregas = new Set(["alfa", "bet", "gama"]);

letrasGregas.add(letrasGregas);

console.log(letrasGregas.has("épsilon"));
console.log(leyrasGregas.has("alfa"));

letrasGregas.forEach