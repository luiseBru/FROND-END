const video = document.getElementById("cameraFeed");
const canvas = document.getElementById("capturedImage");
const botao = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");
 
//solicitar acesso à câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(erro => {
        console.error("Erro ao acessar a câmera: ", erro);
    });
 
//atribuir uma função para o botão de captura
botao.addEventListener("click", () => {
    //desenhar o quadro atual do vídeo no área do canvas
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);
    //obter a imagem como um URL de dados
    const imageDta = canvas.toDataURL("image/png");
    //enviar imagem para um servidor
    enviarImagemParaServidor(imageDataURL);
})
//funçao para enviar imagem para um servidor
function enviarImagemParaSeguidor(){
    //simular o envio salvando o dado no proprio computador
    console.log("Enviando iamgem para o servidor...");

    fetch("/",{
        method: "POST",
        body: JSON.stringify({image: imageDataURL}),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then( resposta => resposta.json())
        .then( dados => {
            console.log("respostas do servidor: ", dados);
        })
        .catch( erro => {
            console.error("Erroao enviar a imagem: ", erro);
        })
} 
 