//Exercicio 4

//Verifique a distância da primeira imagem em relacao ao topo da pagina

const primeiraImagem = document.querySelector("img");
// console.log(primeiraImagem.offsetTop);

//retorne a soma da largura de todoas as imagens da pagina
const imgs = document.querySelectorAll("img");
let total = 0;
imgs.forEach((item, index) => {
  total += item.offsetWidth;
});
// console.log(total);
//verifique se o links da pagina possuem o minimo
//recomendado para telas utilizadas com dedo
//(48px/48px de acordo com o google)

const linkPagina= document.querySelectorAll('a');
const rectLinks=linkPagina.od
//Se o browser for menor que 720px adicione a classe menu mobile ao menu
const telaLargura = window.innerWidth;
const menu = document.querySelector(".menu");

if (telaLargura < 720) {
  menu.classList.add("menu-mobile");
}
console.log(telaLargura);
