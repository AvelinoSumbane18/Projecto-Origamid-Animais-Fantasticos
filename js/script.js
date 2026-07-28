import LinkSuave from "./modules/scroll-suave.js";
import TabMenu from "./modules/tab-menu.js";
import Accordion from "./modules/accordion.js";
import animacaoInitScroll from "./modules/anime-scroll.js";
import initMenuFixo from "./modules/menu-fixo.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/initFuncionamento.js";
import initAnimaisFetch from "./modules/initAnimaisFecth.js";
import initBitcoinFetch from "./modules/initBitcoinFetch.js";

const linkSuave = new LinkSuave('[data-menu="suave"] a[href^="#"]');
linkSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
console.log(accordion.init());

const tabMenu = new TabMenu(
  '[data-tab="menu"] li',
  '[data-tab="content"] .animais-texto',
);
tabMenu.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();
const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

//Execucao das funcoes
animacaoInitScroll();
initMenuFixo();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBitcoinFetch();
