import initAnimeNumeros from "./anime-numeros.js";

export default function initAnimaisFetch() {
  async function animaisFetch(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numeroAnimais = document.querySelector(".numeros-grid");
      animaisJson.forEach((animal) => {
        const elemento = createAnimal(animal);
        numeroAnimais.appendChild(elemento);
      });
      initAnimeNumeros();
    } catch (error) {
      console.log(error);
    }
  }
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numeros-animal");
    div.innerHTML = `
            <h3> ${animal.specie}</h3>
            <span> ${animal.total}</span>
          `;
    return div;
  }
  animaisFetch("./animaisapi.json");
}
