//retorne no console todas as imagens do site
const imagemSites = document.querySelectorAll("img");
console.log(imagemSites);
//retorne no concole apenas a imagens quem comecaram com a palvra imagem
const iniciaImagem = document.querySelectorAll('img[src^="img/imagem"');
console.log(iniciaImagem);
//selecione todos os links internos ( onde o href comeca com #)
const linksInternos = document.querySelectorAll('[href^="#"');
console.log(linksInternos);
//selecione o primeiro h2 no animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);
//selecione o ultimo p do site

const ultimoP = document.querySelectorAll("p");

console.log(ultimoP[--ultimoP.length])