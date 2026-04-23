//Dublique o menu e adicione em copy
const menu= document.querySelector('.menu');
const copy=document.querySelector('.termos')
console.log(menu);
 const novoMenu=menu.cloneNode(true)

 copy.appendChild(novoMenu);
 console.log(novoMenu);

//selecione o primeiro DT da Dl de faq
const faq= document.querySelector('.perguntas-faq');
const filhoFaq=faq.children;
const dt=filhoFaq[1].children[0];
console.log(dt);
//Logica da origamid
const proximoDT=faq.querySelector('dt');
const proximoDD=proximoDT.nextElementSibling;
console.log(proximoDD);

//selecione o DD referente ao primeiro dt
const dd=dt.nextElementSibling;
console.log(dd);

//substitua o conteudo html de faq pelo o de animais
const listaAnimais=document.querySelector('.animais');
faq.innerHTML=listaAnimais.innerHTML;