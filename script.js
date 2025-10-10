const brindes = [
"vale uma dancinha juntos 💃🕺",
  "vale um shot com o Denner 🍹",
  "vale um brinde coletivo em sua homenagem 🥂",
  "vale uma foto polaroid com dedicatória 📸",
  "vale um abraço coletivo 🤗",
  "vale um discurso improvisado pro Denner 🎤",
  "vale uma música escolhida por ele dedicada a você🎶",
  "vale uma lembrança escrita num papelzinho pra guardar 📝",
  "vale uma selfie engraçada com o Denner 🤳",
  "vale um desenho ou rabisco feito por você pra gitele ✏️",
  "vale um brinde simbólico 💎",
  "vale uma rodada de perguntas constrangedoras sobre o Denner 😂",
  "vale um bilhete com um desejo pro futuro dele ✈️",
  "vale uma cerveja para comemorar o país pra onde ele vai 🌎",
  "vale um abraço de 10 segundos — cronometrado! ⏱️"
];

function confirmarPix() {
  const botao = document.getElementById("botao-sorteio");
  botao.disabled = false;
  botao.textContent = "Sortear Brinde 🎉";
  botao.style.backgroundColor = "#28a745";
  botao.style.cursor = "pointer";
}

function iniciarSorteio() {
  const countdown = document.getElementById("countdown");
  countdown.classList.remove("hidden");

  let tempo = 3;
  countdown.textContent = tempo;

  const intervalo = setInterval(() => {
    tempo--;
    if (tempo > 0) {
      countdown.textContent = tempo;
    } else {
      clearInterval(intervalo);
      countdown.classList.add("hidden");
      sortear();
    }
  }, 1000);
}

function sortear() {
  if (brindes.length === 0) {
    mostrarResultado("Todos os brindes já foram sorteados! 🎉");
    return;
  }

  const indice = Math.floor(Math.random() * brindes.length);
  const brinde = brindes[indice];
  brindes.splice(indice, 1);

  mostrarResultado(`🎉 Você ganhou: ${brinde}`);
  tocarAudio();
}

function mostrarResultado(texto) {
  const resultadoTela = document.getElementById("resultadoTela");
  const resultadoTexto = document.getElementById("resultadoTexto");

  resultadoTexto.textContent = texto;
  resultadoTela.classList.remove("hidden");

  soltarFogos();
}

function fecharResultado() {
  document.getElementById("resultadoTela").classList.add("hidden");
}

function tocarAudio() {
  try {
    const audio = new Audio("tmp5lr5_01x.mp3");
    audio.play().catch(() => {
      console.log("Som bloqueado pelo navegador.");
    });
  } catch (e) {
    console.log("Erro ao carregar áudio:", e);
  }
}

function soltarFogos() {
  for (let i = 0; i < 20; i++) {
    const fogo = document.createElement("div");
    fogo.classList.add("firework");
    fogo.style.left = Math.random() * 100 + "vw";
    fogo.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(fogo);

    setTimeout(() => fogo.remove(), 1000);
  }
}

function copyPix() {
  const pixInput = document.getElementById