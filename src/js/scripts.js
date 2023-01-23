//Variaveis
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


function alternarModal() {
    modal.classList.toggle("aberto");
}
//Abrir a modal do Botão 
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

//Fechar a Modal do Botão 

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");

});
