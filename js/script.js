import LinkSuave from "./modules/scroll-suave.js";
import initTabMenu from "./modules/tab-menu.js";
import Accordion from "./modules/accordion.js";
import animacaoInitScroll from "./modules/anime-scroll.js";
import initMenuFixo from "./modules/menu-fixo.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/initFuncionamento.js";
import initAnimaisFetch from "./modules/initAnimaisFecth.js";
import initBitcoinFetch from "./modules/initBitcoinFetch.js";

const linkSuave= new LinkSuave('[data-menu="suave"] a[href^="#"]');
linkSuave.init();

const accordion= new Accordion('[data-anime="accordion"] dt');
console.log(accordion.init());



//Execucao das funcoes
initTabMenu();
animacaoInitScroll();
initMenuFixo();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBitcoinFetch();