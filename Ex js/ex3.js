//Exercicio 3 
//Classes e atributos

//Adicione a classe ativo a todos os itens do menu
  const menu=document.querySelectorAll('.menu-lista li');
  console.log(menu);

menu.forEach((item)=>{
  console.log(item.classList.add('ativo'));
  console.log(item);
})

//remova a classe ativo de todos os itens do menu menos do primeiro
menu.forEach((item,index)=>{
  if(index!==0){
  console.log(item.classList.remove('ativo'));
  }
  console.log(item);
})
//verifique se as imagens possuem o atributo alt
const imgs= document.querySelectorAll('img');

imgs.forEach((item)=>{
  console.log(item.hasAttribute('alt'));

})
//modifique o link href do link externo
const linkExterno=document.querySelectorAll('')