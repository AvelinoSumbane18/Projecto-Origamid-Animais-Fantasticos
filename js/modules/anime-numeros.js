export default function initAnimeNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numeros-grid] span");
    let start = 0;
    numeros.forEach((numero) => {
      let total = +numero.innerText;
      let incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        numero.innerHTML = start += incremento;

        if (start > total) {
          clearInterval(timer);
          numero.innerHTML = total;
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
