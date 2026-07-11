export default function initMenuFixo() {
  const menu = document.querySelector(".js-menu");
  const tamanhoTela = window.innerWidth;

  if (tamanhoTela <= 700) {
    menu.classList.add("ativo");
  }
}
