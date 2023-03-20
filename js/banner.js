let banner = document.querySelector('#banner');
let indice = 0;

const bannerImagens = [
  "/banner/banner-img1.jpg",
  "/banner/banner-img2.jpg",
  "/banner/banner-img3.jpg",
  "/banner/banner-img4.jpg",
];

function trocaImagemBanner() {
  const imagemAtual = bannerImagens[indice];
  banner.style.backgroundImage = `url(${imagemAtual})`;

  if(indice < bannerImagens.length - 1) {
    indice++;
  } else {
    indice = 0;
  }
}

trocaImagemBanner();
setInterval(trocaImagemBanner, 3000);