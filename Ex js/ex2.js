//Exercicio 2 arrow function e for each

//Mostre no console cada paragrafo do site
const paragrafoSite=document.querySelectorAll("p");
console.log(paragrafoSite)


//Mostre o texto dos paragrafos no console
paragrafoSite.forEach(function(item, index){
  console.log(item.innerText);
})

//como corrigir os erros abaixo

const imgs= document.querySelectorAll("img");

imgs.forEach((item,index)=> {
  console.log(item,index);
})

let i=0;

imgs.forEach(()=> {
  console.log(i++);
});


imgs.forEach(()=> i++);
