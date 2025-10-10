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

// Ativa o botão de sorteio após confirmação do Pix
function confirmarPix() {
  const botao = document.getElementById("botao-sorteio");
  botao.disabled = false;
  botao.textContent = "Sortear Brinde 🎉";
  botao.style.backgroundColor = "#28a745";
  botao.style.cursor = "pointer";
}

// Sorteia um brinde aleatório
function sortear() {
  const indice = Math.floor(Math.random() * brindes.length);
  const brinde = brindes[indice];
  const resultado = document.getElementById("resultado");
  resultado.textContent = `🎉 Você ganhou: ${brinde}`;
  tocarAudio();
  soltarConfetes();
}

// Toca som de comemoração
function tocarAudio() {
  const audio = new Audio("tmp5lr5_01x.mp3"); // certifique-se que o arquivo está na mesma pasta que index.html
  audio.play();
}

// Solta confetes animados
function soltarConfetes() {
  for (let i = 0; i < 30; i++) {
    const confete = document.createElement('div');
    confete.classList.add('confete');
    confete.style.left = Math.random() * 100 + 'vw';
    confete.style.setProperty('--i', Math.random());
    confete.style.animationDuration = (3 + Math.random() * 2) + 's';
    document.body.appendChild(confete);

    setTimeout(() => {
      confete.remove();
    }, 5000);
  }
}

// Emojis flutuantes aleatórios
window.addEventListener('DOMContentLoaded', () => {
  const emojis = document.querySelectorAll('.emoji');
  emojis.forEach((emoji) => {
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (5 + Math.random() * 5) + 's';
  });
});

// Copia a chave Pix para a área de transferência
function copyPix() {
  const pixInput = document.getElementById("pixKey");
  pixInput.select();
  document.execCommand("copy");
  alert("Chave Pix copiada!");