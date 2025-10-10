const brindes = [
  "vale um chocolate 🍫",
  "vale um abraço 🤗",
  "vale uma música especial 🎶",
  "vale um passeio 🚶",
  "vale um presente 🎁",
  "vale um elogio 💬",
  "vale um café ☕",
  "vale um carinho 🥰",
  "vale um beijo 😘",
  "vale um almoço 🍽️",
  "vale uma declaração no Reels 🎥"
];

function confirmarPix() {
  const botao = document.getElementById("botao-sorteio");
  botao.disabled = false;
  botao.textContent = "Sortear Brinde 🎉";
  botao.style.backgroundColor = "#28a745";
  botao.style.cursor = "pointer";
}

function sortear() {
  const indice = Math.floor(Math.random() * brindes.length);
  const brinde = brindes[indice];
  const resultado = document.getElementById("resultado");
  resultado.textContent = `🎉 Você ganhou: ${brinde}`;
  tocarAudio();
  soltarConfetes();
}

function tocarAudio() {
  const audio = new Audio("tmp5lr5_01x.mp3"); // certifique-se que o arquivo está na pasta
  audio.play();
}

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
const emojis = document.querySelectorAll('.emoji');
emojis.forEach((emoji) => {
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = (5 + Math.random() * 5) + 's';
});
