export default class AnimeNumeros {
  constructor(numero, observerClass, observerTarget) {
    this.numeros = document.querySelectorAll(numero);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    this.handleMutation=this.handleMutation.bind(this);
  }
  //Recebe um elemento do DOM numero em seu texto
  //incrementa
  static incrementoNumeros(numero) {
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
  }
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementoNumeros(numero);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  addMutattionObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }
  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutattionObserver();
    }
    return this;
  }
}
