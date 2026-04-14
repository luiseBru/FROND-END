const visualizador = () => console.log(algo);

let minhaPromessa = new Promisse((resolve, reject) =>{
    let ok = false;

    setTimeout(() => ok = true, 3000);


    if (ok){
        resolve("ok");
    } else {
        reject("erro");
    }

})

minhaPromessa.then(
    (valor) => visualizador(valor),
    (razao) => visualizador(razao)
)