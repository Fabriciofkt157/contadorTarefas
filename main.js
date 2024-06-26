const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObj1 = new Date("2024-06-01T00:00:00");
const tempoObj2 = new Date("2024-07-01T00:00:00");
const tempoObj3 = new Date("2024-09-01T00:00:00");
const tempoObj4 = new Date("2024-09-30T00:00:00");

const tempos = [tempoObj1, tempoObj2, tempoObj3, tempoObj4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function cronometro(){
    for (let i = 0; i < contadores.length; i++){
        document.getElementById("dias" +i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" +i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" +i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" +i).textContent = calculaTempo(tempos[i])[3];   
    }
}

function iniCronometro(){
    cronometro();
    setInterval(cronometro, 1000);
}

iniCronometro();
