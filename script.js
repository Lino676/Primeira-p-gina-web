const botao = document.getElementById('ButtonInteractive');
const divContent = document.getElementById("divid");
const audio = document.getElementById("audio");
divContent.style.display = "none";
botao.addEventListener("click", function() {
    audio.play();
    audio.volume=0.1;
    if (divContent.style.display === "none") {
        divContent.style.display = "block"; 
    } else {
            divContent.style.display = "none";
        }
    });