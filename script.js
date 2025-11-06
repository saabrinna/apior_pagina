
setInterval(() => {
    alert('VOCÊ GOSTA DE HAMBÚRGUER??? 🍔');
  }, 10000);
  
  
  function tocarMusica() {
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
  }
  
  document.body.addEventListener('click', tocarMusica);
  