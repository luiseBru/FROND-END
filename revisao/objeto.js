const pessoa = {
    nome: "joao",
    sobrenome: "rocella",
    idade: "instrutor"
};

const entidade = new Map([
    ["nome", "joao"],
    ["sobrenome", "rocella"]
    ["idade", 40],
    ["cargo","instrutor"]
]);

console.log(entidade.get("sobrenome"));
console.log(pessoa.sobrenome);

const professor = JSON.stringify(pessoa);
console.log(professor);

const aluno = `{"nome":"bento", "sobrenome", "andrade",}`
const alunoObjeto = JSON.prse(aluno);
console.log(alunoObjeto);
console.log(aluno.nome);

for (let x in pessoa){
    console.log(pessoa[x])
}