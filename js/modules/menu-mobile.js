import outsideClick from "./initoutside-click.js";
export default function initMenuMobile() {}
const botaoMenu = document.querySelector('[data-menu="mobile"]');
const menuLista = document.querySelector("[data-menulist]");
const eventos=["click", "touchstart"];

function abrirMenu(event) {
  event.stopPropagation();
  botaoMenu.classList.add("ativo");
  menuLista.classList.add("ativo");
  console.log('abriu o menu')
  outsideClick(menuLista,eventos , () => {
    console.log('Teste')
    botaoMenu.classList.remove("ativo");
    menuLista.classList.remove("ativo");
  });
}
eventos.forEach((userEvent) => {
  botaoMenu.addEventListener(userEvent, abrirMenu);
});


